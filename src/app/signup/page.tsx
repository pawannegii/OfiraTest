import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Leaf } from "lucide-react"

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6 py-12">
      <Link href="/" className="absolute top-8 left-8 text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-[15px] font-medium hidden md:flex">
        <ArrowLeft className="h-4 w-4" /> Back to home
      </Link>
      
      <div className="w-full max-w-[400px] flex flex-col">
        <div className="flex justify-center mb-6">
          <div className="bg-accent/10 p-3 rounded-2xl flex items-center justify-center">
            <Leaf className="h-10 w-10 text-accent" strokeWidth={2.5} />
          </div>
        </div>
        
        <div className="text-center mb-8">
          <h1 className="text-[28px] font-semibold tracking-tight text-primary mb-2">Create an account</h1>
          <p className="text-[15px] text-muted-foreground">Join your local neighborhood network.</p>
        </div>
        
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-medium text-muted-foreground ml-1" htmlFor="name">Full Name</label>
            <Input id="name" type="text" placeholder="Priya Sharma" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-medium text-muted-foreground ml-1" htmlFor="phone">Phone Number</label>
            <Input id="phone" type="tel" placeholder="+91" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-medium text-muted-foreground ml-1" htmlFor="locality">Locality (City, Area)</label>
            <Input id="locality" type="text" placeholder="e.g. Koramangala, Bangalore" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-medium text-muted-foreground ml-1" htmlFor="password">Password</label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
          
          <Link href="/feed" className="mt-4">
            <Button className="w-full h-12 text-[16px]">Sign Up</Button>
          </Link>
        </form>
        
        <p className="text-center text-[15px] text-muted-foreground mt-8">
          Already have an account?{" "}
          <Link href="/login" className="text-accent font-medium hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}
