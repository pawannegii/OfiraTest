"use client"
import { useState } from "react"
import Link from "next/link"
import { useAppStore } from "@/lib/store"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"posted" | "doing">("posted")
  const tasks = useAppStore(state => state.tasks)
  
  // Tasks where isMyTask is true
  const myPostedTasks = tasks.filter(t => t.isMyTask)
  // Tasks that I have accepted (mock simple logic)
  const myDoingTasks = tasks.filter(t => t.status !== 'Open' && !t.isMyTask)

  const displayTasks = activeTab === "posted" ? myPostedTasks : myDoingTasks

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-12">
      <div className="bg-white border-b-[1px] border-border sticky top-[64px] z-40 md:static pt-8 px-6">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-[32px] font-bold tracking-tight text-primary mb-6">My Tasks</h1>
          
          <div className="flex gap-6 border-b border-border">
            <button 
              className={`pb-4 text-[15px] font-medium transition-colors relative ${activeTab === 'posted' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
              onClick={() => setActiveTab('posted')}
            >
              Tasks I Posted ({myPostedTasks.length})
              {activeTab === 'posted' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
            <button 
              className={`pb-4 text-[15px] font-medium transition-colors relative ${activeTab === 'doing' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
              onClick={() => setActiveTab('doing')}
            >
              Tasks I'm Doing ({myDoingTasks.length})
              {activeTab === 'doing' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-6 py-8 flex flex-col gap-4">
        {displayTasks.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center text-muted-foreground mb-4">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-[18px] font-semibold text-primary mb-2">
              {activeTab === "posted" ? "You haven't posted any tasks yet." : "You haven't accepted any tasks yet."}
            </h3>
            <p className="text-[15px] text-muted-foreground max-w-sm mb-6">
              {activeTab === "posted" 
                ? "Need something done? Post a task and let a local help you out." 
                : "Looking to earn? Browse the feed and accept a task nearby."}
            </p>
            <Link href={activeTab === "posted" ? "/post" : "/feed"}>
              <Button>{activeTab === "posted" ? "Post a Task" : "View Task Feed"}</Button>
            </Link>
          </div>
        ) : (
          displayTasks.map(task => (
            <Link key={task.id} href={`/task/${task.id}`} className="block">
              <Card className="hover:border-accent/30 cursor-pointer">
                <CardContent className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant={
                        task.status === 'Open' ? 'secondary' : 
                        task.status === 'Completed' ? 'success' : 'soft'
                      }>
                        {task.status}
                      </Badge>
                      <span className="text-[13px] text-muted-foreground font-medium uppercase tracking-wider">{task.category}</span>
                    </div>
                    <h3 className="text-[18px] font-semibold text-primary leading-tight mb-2">{task.title}</h3>
                    <div className="flex items-center gap-3 text-[13px] text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {task.urgency}</span>
                      <span className="hidden md:inline">•</span>
                      <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {task.location.pickup}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-border mt-2 pt-4 md:border-none md:mt-0 md:pt-0">
                    <div className="text-[20px] font-semibold text-primary">₹{task.pay}</div>
                    <div className="text-[13px] text-accent font-medium flex items-center group md:ml-6">
                      View <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))
        )}
      </div>
    </div>
  )
}
