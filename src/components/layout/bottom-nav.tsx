"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, ListTodo, PlusCircle, LayoutDashboard, User } from "lucide-react"
import { cn } from "@/lib/utils"

export function BottomNav() {
  const pathname = usePathname()
  
  const tabs = [
    { name: "Home", href: "/", icon: Home },
    { name: "Feed", href: "/feed", icon: ListTodo },
    { name: "Post", href: "/post", icon: PlusCircle },
    { name: "Tasks", href: "/dashboard", icon: LayoutDashboard },
    { name: "Profile", href: "/profile/me", icon: User },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t-[1px] border-border bg-background pb-safe md:hidden">
      <div className="flex h-16 items-center justify-around px-2">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href || (tab.href !== "/" && pathname?.startsWith(tab.href))
          return (
            <Link
              key={tab.name}
              href={tab.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 p-2 w-full",
                isActive ? "text-accent" : "text-[#AEAEB2]"
              )}
            >
              <tab.icon className="h-6 w-6" strokeWidth={isActive ? 2 : 1.5} />
              <span className="text-[10px] font-medium">{tab.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
