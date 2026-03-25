"use client"
import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { useAppStore } from "@/lib/store"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, MapPin, Star, ShieldCheck, Map, CheckCircle2 } from "lucide-react"

export default function TaskDetailPage() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string
  const task = useAppStore(state => state.tasks.find(t => t.id === id))
  const updateTaskStatus = useAppStore(state => state.updateTaskStatus)
  
  const [isAccepting, setIsAccepting] = useState(false)

  if (!task) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-[24px] font-medium mb-4">Task not found</h1>
        <Link href="/feed"><Button>Back to Feed</Button></Link>
      </div>
    )
  }

  const handleAccept = () => {
    setIsAccepting(true)
    setTimeout(() => {
      updateTaskStatus(id, "Accepted")
      setIsAccepting(false)
      // Redirect to dashboard
      router.push("/dashboard")
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-[#F5F5F7] pb-24 md:pb-12">
      {/* Top Nav (Mobile) */}
      <div className="sticky top-[64px] z-40 bg-white/80 backdrop-blur-md border-b-[1px] border-border md:hidden">
        <div className="flex h-14 items-center px-4">
          <Link href="/feed" className="flex items-center text-[15px] font-medium text-primary">
            <ArrowLeft className="h-5 w-5 mr-1" /> Back
          </Link>
        </div>
      </div>

      <div className="max-w-[700px] mx-auto md:mt-8 flex flex-col gap-4 p-4 md:p-0">
        <div className="bg-white rounded-[20px] p-6 shadow-sm border border-border">
          <div className="flex justify-between items-start mb-6">
            <Badge variant="soft" className="px-3 py-1 font-semibold">{task.category}</Badge>
            <div className="text-[24px] font-bold text-primary">₹{task.pay}</div>
          </div>
          
          <h1 className="text-[28px] md:text-[32px] font-bold tracking-tight text-primary leading-tight mb-4">
            {task.title}
          </h1>

          <div className="flex flex-wrap gap-4 text-[14px] text-muted-foreground mb-6">
            <span className="flex items-center gap-1.5 bg-[#F5F5F7] px-3 py-1.5 rounded-full">
              <Clock className="h-4 w-4" /> {task.urgency}
            </span>
            <span className="flex items-center gap-1.5 bg-[#F5F5F7] px-3 py-1.5 rounded-full">
              <MapPin className="h-4 w-4" /> {task.distance}
            </span>
          </div>

          <div className="border-t border-border pt-6 mb-6">
            <h3 className="text-[16px] font-semibold text-primary mb-2">Task Details</h3>
            <p className="text-[15px] text-muted-foreground leading-relaxed whitespace-pre-wrap">
              {task.description}
            </p>
          </div>

          <div className="flex flex-col gap-3 border-t border-border pt-6">
            <h3 className="text-[16px] font-semibold text-primary mb-1">Locations</h3>
            <div className="flex items-start gap-3">
              <div className="mt-0.5"><div className="h-3 w-3 rounded-full border-[2px] border-accent" /></div>
              <div className="text-[15px]">
                <span className="font-medium text-primary">Pickup: </span>
                <span className="text-muted-foreground">{task.location.pickup}</span>
              </div>
            </div>
            {task.location.dropoff && (
              <div className="flex items-start gap-3">
                <div className="mt-0.5"><div className="h-3 w-3 bg-accent rounded-sm" /></div>
                <div className="text-[15px]">
                  <span className="font-medium text-primary">Dropoff: </span>
                  <span className="text-muted-foreground">{task.location.dropoff}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-[20px] p-6 shadow-sm border border-border flex flex-col items-center justify-center min-h-[200px] text-center bg-[url('https://maps.wikimedia.org/osm-intl/13/5765/3816.png')] bg-cover bg-center overflow-hidden relative">
           <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]"></div>
           <Map className="h-8 w-8 text-accent mb-2 z-10" />
           <span className="text-[14px] font-medium text-primary z-10">Map View (Mock)</span>
        </div>

        <div className="bg-white rounded-[20px] p-6 shadow-sm border border-border">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center text-[20px] text-accent font-semibold border-[2px] border-white shadow-sm">
              {task.posterName.charAt(0)}
            </div>
            <div className="flex-1">
              <h3 className="text-[16px] font-semibold text-primary flex items-center gap-1.5">
                {task.posterName} <ShieldCheck className="h-4 w-4 text-[#34C759]" />
              </h3>
              <div className="flex items-center gap-1 text-[14px] text-muted-foreground mt-0.5">
                <Star className="h-3.5 w-3.5 text-[#FF9F0A] fill-current" /> {task.posterRating} • Profile verified
              </div>
            </div>
          </div>
        </div>

        {/* Sticky bottom CTA for mobile, normal for desktop */}
        <div className="fixed bottom-[64px] pb-safe md:static left-0 right-0 p-4 md:p-0 bg-white md:bg-transparent border-t border-border md:border-none md:mt-4 z-40">
          {task.status === 'Open' ? (
            <Button size="lg" className="w-full text-[16px] h-14 md:h-12 shadow-apple" onClick={handleAccept} disabled={isAccepting}>
              {isAccepting ? "Accepting..." : "Accept Task Securely"}
            </Button>
          ) : (
            <Button size="lg" className="w-full text-[16px] h-14 md:h-12 shadow-apple" disabled>
              <CheckCircle2 className="h-5 w-5 mr-2" /> Task {task.status}
            </Button>
          )}
        </div>
        
        {/* Spacer for sticky bottom bar on mobile */}
        <div className="h-12 md:hidden"></div>
      </div>
    </div>
  )
}
