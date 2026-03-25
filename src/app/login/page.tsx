import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6 py-12">
      <Link href="/" className="absolute top-8 left-8 text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-[15px] font-medium hidden md:flex">
        <ArrowLeft className="h-4 w-4" /> Back to home
      </Link>
      
      <div className="w-full max-w-[400px] flex flex-col">
        <div className="flex -space-x-1.5 justify-center mb-6">
          <div className="h-6 w-6 rounded-[6px] bg-accent opacity-80" />
          <div className="h-6 w-6 rounded-[6px] border border-background bg-accent" />
        </div>
        
        <div className="text-center mb-8">
          <h1 className="text-[28px] font-semibold tracking-tight text-primary mb-2">Welcome back</h1>
          <p className="text-[15px] text-muted-foreground">Log in to your Your Sathi account to continue.</p>
        </div>
        
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-medium text-muted-foreground ml-1" htmlFor="email">Email or Phone</label>
            <Input id="email" type="text" placeholder="name@example.com" />
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center ml-1">
              <label className="text-[13px] font-medium text-muted-foreground" htmlFor="password">Password</label>
              <Link href="#" className="text-[13px] text-accent font-medium hover:underline">Forgot?</Link>
            </div>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
          
          <Link href="/feed" className="mt-4">
            <Button className="w-full h-12 text-[16px]">Log In</Button>
          </Link>
        </form>
        
        <p className="text-center text-[15px] text-muted-foreground mt-8">
          Don't have an account?{" "}
          <Link href="/signup" className="text-accent font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
