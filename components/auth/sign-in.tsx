"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { signIn } from "@/lib/auth-client";
import {z} from "zod";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { AlertCircle, Megaphone } from "lucide-react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import clsx from "clsx";
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const[alert,setAlert] = useState<React.ReactElement>();
  const User = z.object({
    email: z.string().email(),
  })
  return (
     <div className="w-full h-full ">
      <AlertDestructive></AlertDestructive>
      {alert && alert}
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-96 flex flex-col gap-4 items-center justify-center " >
          <h3 className=" text-blue-500 scroll-m-20 text-[1.7rem] font-semibold tracking-tight --font-poppins">
              Create an account
          </h3>
          <Label htmlFor="email" className="text-blue-500 flex w-full  justify-start font-semibold ">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="me@example.com"
                required
                onChange={(e) => {
                  setEmail(e.target.value);

                  const result = User.safeParse({ email: e.target.value });

                      if (!result.success) {
                        setError(result.error.flatten().fieldErrors.email?.[0] || "!Invalid email");
                      } else {
                        setError("");
                      }
                                    
                }}
                value={email}
              />
              {error && <p className="text-red-500 font-semibold text-[0.8rem]">{error}</p>}
              <Button className="gap-2 w-full" onClick={async () => {
                try{
                  await signIn.magicLink({ email:email });
                  setAlert(AlertSuccess())
                }catch(e:any){
                  setAlert(AlertDestructive())
                }
              }}>
                Sign up with email
              </Button>
           <Separator/>   
          <p className="text-muted-foreground text-[0.8rem] font-semibold">By signing up, you agree to our <Link href={"/tos"} className="underline hover:text-black">Terms of Service</Link>.</p>
        </div>
      </div>
    </div>
  );
}


export function AlertDestructive() {
  const [hide, setHide] = useState(false)
  return (
    <Alert onClick={()=>setHide(true)} variant="destructive" className={clsx(hide && "hidden", "absolute top-5 right-1/2 translate-x-1/2 z-50 w-96")}>
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        There was a problem . please try again.
      </AlertDescription>
    </Alert>
  )
}
export function AlertSuccess() {
  const [hide, setHide] = useState(false)
  return (
    <Alert onClick={()=>setHide(true)} className={clsx(hide && "hidden", "absolute top-5 right-1/2 translate-x-1/2 z-50 w-96  text-green-500 bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-green-500/90")}>
      <Megaphone className="size-4  " />
      <AlertTitle >Success</AlertTitle>
      <AlertDescription >
        Email sent successfully.Check your inbox.
      </AlertDescription>
    </Alert>
  )
}