import Image from "next/image";
import { Loader } from "lucide-react";
import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

export default function Page() {
  return(
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justfy-center px-4">
        <div className="text-center space-y-4 pt-16" >
            <h1 className="font-bold text-3xl text-[#2E2A47]">
                Welcome back!
            </h1>
            <p className="text-base text-[#7E8C0]"> 
                Login or create your account
            </p>
        </div>
        <div className="flex items-center justify-center mt-8">
            <ClerkLoaded>
                <SignIn path="/sign-in"/>
            </ClerkLoaded>
            <ClerkLoading>
                <Loader className="animate-spin text-muted-foreground"></Loader>
            </ClerkLoading>

        </div>
      </div>
      <div className="h-full bg-blue-600 hidden lg:flex items-center justify-center">
           <Image src="/logo.svg" height={500} width={500} alt="LOGO"/>
      </div>
      </div>
  )
}