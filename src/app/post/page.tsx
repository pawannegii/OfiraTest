"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAppStore } from "@/lib/store"
import { ArrowLeft, CheckCircle2 } from "lucide-react"

const categories = [
  "Tiffin Delivery", "Key Handover", "Pet Care", "Parcel Pickup", 
  "Queue Standing", "Grocery Run", "Quick Help", "Other"
]

export default function PostTaskPage() {
  const router = useRouter()
  const addTask = useAppStore(state => state.addTask)
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    pay: "",
    urgency: "",
    pickup: "",
    dropoff: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API delay
    setTimeout(() => {
      addTask({
        title: formData.title,
        description: formData.description,
        category: formData.category || "Other",
        pay: parseInt(formData.pay) || 0,
        distance: "0.2 km away", // Mock distance
        urgency: formData.urgency || "Needed today",
        posterName: "You", // Mock logged in user
        posterRating: 5.0,
        location: {
          pickup: formData.pickup,
          dropoff: formData.dropoff
        }
      })
      
      setIsSubmitting(false)
      setIsSuccess(true)
      
      setTimeout(() => {
        router.push("/dashboard")
      }, 1500)
    }, 800)
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
        <CheckCircle2 className="h-16 w-16 text-[#34C759] animate-bounce mb-6" />
        <h1 className="text-[28px] font-semibold text-primary mb-2">Task Posted Successfully!</h1>
        <p className="text-[15px] text-muted-foreground">Redirecting to your dashboard...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-12">
      <div className="sticky top-[64px] z-40 bg-background/80 backdrop-blur-md border-b-[1px] border-border md:hidden">
        <div className="flex h-14 items-center px-4">
          <Link href="/feed" className="flex items-center text-[15px] font-medium text-muted-foreground">
            <ArrowLeft className="h-5 w-5 mr-1" /> Back
          </Link>
        </div>
      </div>

      <div className="max-w-[600px] mx-auto px-6 py-8 md:py-12">
        <div className="mb-8">
          <h1 className="text-[32px] font-bold tracking-tight text-primary mb-2">Post a Task</h1>
          <p className="text-[16px] text-muted-foreground">Kuch chahiye? Let your neighbors help you out.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-medium text-primary ml-1">What do you need done?</label>
            <Input 
              required
              placeholder="e.g., Deliver tiffin to office" 
              value={formData.title}
              onChange={e => setFormData({...formData, title: e.target.value})}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-medium text-primary ml-1">Category</label>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <div 
                  key={cat}
                  onClick={() => setFormData({...formData, category: cat})}
                  className={`cursor-pointer border-[1.5px] rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
                    formData.category === cat 
                      ? "border-accent bg-accent/10 text-accent" 
                      : "border-border text-muted-foreground hover:border-muted-foreground/30"
                  }`}
                >
                  {cat}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-medium text-primary ml-1">Details</label>
            <textarea 
              required
              rows={4}
              placeholder="Provide any specific instructions..."
              className="flex w-full rounded-[12px] border-[1.5px] border-border bg-transparent px-[16px] py-[12px] text-[15px] transition-colors placeholder:text-[#AEAEB2] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-accent/15 focus-visible:border-accent resize-none"
              value={formData.description}
              onChange={e => setFormData({...formData, description: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-medium text-primary ml-1">Pickup Location</label>
              <Input 
                required
                placeholder="e.g., KFC Koramangala" 
                value={formData.pickup}
                onChange={e => setFormData({...formData, pickup: e.target.value})}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-medium text-primary ml-1">Dropoff Location (Optional)</label>
              <Input 
                placeholder="e.g., Home" 
                value={formData.dropoff}
                onChange={e => setFormData({...formData, dropoff: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-medium text-primary ml-1">Urgency</label>
              <select 
                required
                className="flex h-[48px] w-full rounded-[12px] border-[1.5px] border-border bg-transparent px-[16px] text-[15px] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-accent/15 focus-visible:border-accent"
                value={formData.urgency}
                onChange={e => setFormData({...formData, urgency: e.target.value})}
              >
                <option value="" disabled>Select time</option>
                <option value="Needed in 1 hr">In 1 hour</option>
                <option value="Needed in 2 hrs">In 2 hours</option>
                <option value="Needed today">Today</option>
                <option value="Needed tomorrow">Tomorrow</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-medium text-primary ml-1">Pay Amount (₹)</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-medium text-muted-foreground">₹</span>
                <Input 
                  required
                  type="number"
                  min="50"
                  max="5000"
                  placeholder="150" 
                  className="pl-8"
                  value={formData.pay}
                  onChange={e => setFormData({...formData, pay: e.target.value})}
                />
              </div>
            </div>
          </div>

          <div className="pt-6 mt-2 border-t border-border">
            <Button type="submit" className="w-full h-12 text-[16px]" disabled={isSubmitting}>
              {isSubmitting ? "Posting..." : "Post Task Securely"}
            </Button>
            <p className="text-center text-[13px] text-muted-foreground mt-4">
              By posting, you agree to our community guidelines.
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
