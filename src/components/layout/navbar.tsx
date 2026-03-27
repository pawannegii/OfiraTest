import Link from "next/link"
import { Button } from "@/components/ui/button"

import { Leaf } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b-[1px] border-border bg-background/80 backdrop-blur-md hidden md:block">
      <div className="mx-auto flex h-[64px] max-w-[1120px] items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-accent/10 p-1.5 rounded-lg flex items-center justify-center transition-colors group-hover:bg-accent/20">
            <Leaf className="h-6 w-6 text-accent" strokeWidth={2.5} />
          </div>
          <span className="text-[22px] font-bold tracking-tight text-[#1D1D1F]" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
            Ofira
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-[15px] font-medium text-muted-foreground">
          <Link href="/feed" className="hover:text-foreground transition-colors">Find Tasks</Link>
          <Link href="/dashboard" className="hover:text-foreground transition-colors">My Tasks</Link>
          <Link href="/wallet" className="hover:text-foreground transition-colors">Wallet</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost">Log In</Button>
          </Link>
          <Link href="/post">
            <Button>Post a Task</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
