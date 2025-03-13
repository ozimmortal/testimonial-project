"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { signIn } from "@/lib/auth-client";
import {z} from "zod";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
export default function SignIn() {
  const [email, setEmail] = useState("");
  const User = z.object({
    email: z.string().email(),
  })
  const [loading, setLoading] = useState(false);
  return (
     <div className="w-full h-full ">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-96 flex flex-col gap-4 items-center justify-center " >
          <h3 className=" text-blue-500 scroll-m-20 text-[1.7rem] font-semibold tracking-tight --font-poppins">
              Create an account
          </h3>
          <Label htmlFor="email" className="text-blue-500 flex w-full  justify-start font-semibold ">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
              <Button className="gap-2 w-full" onClick={async () => {
                await signIn.magicLink({ email });
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