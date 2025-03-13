import { Button } from "./button";
import Link from "next/link";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { AlignRight } from "lucide-react";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background p-2 ">
    <div className=" flex h-16 items-center justify-between ">
      <div className="flex items-center gap-2 p-2">
        <span className="text-2xl font-bold text-blue-500">Testimonials</span>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <Link href="#features" className="text-sm font-medium hover:text-primary">
          Features
        </Link>
        <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
          Testimonials
        </Link>
        <Link href="#pricing" className="text-sm font-medium hover:text-primary">
          Pricing
        </Link>
        <Link href="#contact" className="text-sm font-medium hover:text-primary">
          Contact
        </Link>
      </nav>
      <div className="flex items-center gap-4  ">
        <Button className="hidden md:block"><Link href={"/auth/sign-in"}>Get Started</Link></Button>
        <Drawer>
            <DrawerTrigger asChild>
                <Button className="md:hidden hover:bg-blue-500 hover:text-white" variant={"link"}><AlignRight /></Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full p-4">
                <div className="p-4 pb-0">
                    <div className="flex flex-col gap-4 mb-2">
                        <Link href="#features" className="text-lg font-medium hover:text-primary">
                            Features
                        </Link>
                        <Link href="#testimonials" className="text-lg font-medium hover:text-primary">
                            Testimonials
                        </Link>
                        <Link href="#pricing" className="text-lg font-medium hover:text-primary">
                            Pricing
                        </Link>
                        <Link href="#contact" className="text-lg font-medium hover:text-primary">
                            Contact
                        </Link>
                        <Link href="/auth/sign-in" className="text-lg font-medium hover:text-primary ">
                            Get Started
                        </Link>
                    </div>
                </div>
                </div>
            </DrawerContent>
        </Drawer>
      </div>
    </div>
  </header>
  )
}
