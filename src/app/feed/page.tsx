"use client"
import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useAppStore } from "@/lib/store"
import { Search, MapPin, Clock, Star, ArrowRight, Utensils, Key, Dog, Package, Users, ShoppingCart, Wrench, HelpCircle } from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  "Tiffin Delivery": Utensils,
  "Key Handover": Key,
  "Pet Care": Dog,
  "Parcel Pickup": Package,
  "Queue Standing": Users,
  "Grocery Run": ShoppingCart,
  "Quick Help": Wrench,
  "Other": HelpCircle,
}

export default function FeedPage() {
  const tasks = useAppStore(state => state.tasks).filter(t => t.status === 'Open')
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) || task.category.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory ? task.category === activeCategory : true
    return matchesSearch && matchesCategory
  })

  const categories = Array.from(new Set(tasks.map(t => t.category)))

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      {/* Header / Search */}
      <div className="sticky top-[64px] z-40 bg-background/80 backdrop-blur-md border-b-[1px] border-border pt-4 pb-4 md:pt-8 md:pb-6 px-6">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-[28px] font-semibold tracking-tight text-primary mb-4 hidden md:block">Tasks nearby</h1>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Search tasks or categories..." 
              className="pl-12 bg-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
            <Badge 
              variant={activeCategory === null ? "default" : "secondary"} 
              className="cursor-pointer whitespace-nowrap"
              onClick={() => setActiveCategory(null)}
            >
              All Tasks
            </Badge>
            {categories.map(cat => (
              <Badge 
                key={cat}
                variant={activeCategory === cat ? "default" : "secondary"}
                className="cursor-pointer whitespace-nowrap font-normal"
                onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              >
                {cat}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Task List */}
      <div className="max-w-[800px] mx-auto px-6 py-6 flex flex-col gap-4">
        {filteredTasks.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center text-muted-foreground mb-4">
              <Search className="h-8 w-8" />
            </div>
            <h3 className="text-[18px] font-semibold text-primary mb-2">No tasks found</h3>
            <p className="text-[15px] text-muted-foreground max-w-sm mb-6">
              Aaj koi task nahi nearby. Be the first to post one!
            </p>
            <Link href="/post">
              <Button>Post a Task</Button>
            </Link>
          </div>
        ) : (
          filteredTasks.map(task => {
            const Icon = iconMap[task.category] || HelpCircle
            return (
              <Link key={task.id} href={`/task/${task.id}`} className="block">
                <Card className="hover:border-accent/30 cursor-pointer">
                  <CardContent className="p-5 flex flex-col md:flex-row gap-4 md:items-center justify-between">
                    <div className="flex gap-4 items-start">
                      <div className="bg-muted p-4 rounded-full text-[#1D1D1F] shrink-0">
                        <Icon className="h-6 w-6" strokeWidth={1.5} />
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[12px] font-semibold text-accent uppercase tracking-wider">{task.category}</span>
                          <span className="text-[12px] text-muted-foreground flex items-center gap-1"><MapPin className="h-3 w-3" /> {task.distance}</span>
                        </div>
                        <h3 className="text-[18px] font-semibold text-primary leading-tight mb-2">{task.title}</h3>
                        <div className="flex items-center gap-2 md:gap-4 text-[13px] text-muted-foreground flex-wrap">
                          <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {task.urgency}</span>
                          <span className="hidden md:inline">•</span>
                          <span className="flex items-center gap-1">Posted by {task.posterName} <Star className="h-3 w-3 text-[#FF9F0A] fill-current ml-0.5" /> {task.posterRating}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex md:flex-col items-center md:items-end justify-between mt-4 md:mt-0 pt-4 md:pt-0 border-t border-border md:border-none">
                      <div className="text-[20px] font-semibold text-primary">₹{task.pay}</div>
                      <div className="text-[13px] text-accent font-medium flex items-center group">
                        View Details <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })
        )}
      </div>
    </div>
  )
}
