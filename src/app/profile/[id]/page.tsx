"use client"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ShieldCheck, MapPin, CheckCircle } from "lucide-react"

export default function ProfilePage() {
  const params = useParams()
  // Simply mock data for the profile
  const isMe = params.id === "me"
  const name = isMe ? "You" : "Priya Sharma"
  
  return (
    <div className="min-h-screen bg-[#F5F5F7] pb-24 md:pb-12">
      {/* Cover / Header */}
      <div className="h-32 bg-primary w-full"></div>
      
      <div className="max-w-[700px] mx-auto px-6 mb-8 relative -mt-12">
        <div className="bg-white rounded-[20px] p-6 shadow-sm border border-border flex flex-col md:flex-row md:items-center gap-6">
          <div className="h-24 w-24 rounded-full bg-[#EBF5FF] flex items-center justify-center text-[36px] text-accent font-semibold border-[4px] border-white shadow-sm shrink-0">
            {name.charAt(0)}
          </div>
          <div className="flex-1">
            <h1 className="text-[28px] font-bold tracking-tight text-primary flex items-center gap-2">
              {name}
              <ShieldCheck className="h-6 w-6 text-success" />
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-[15px] text-muted-foreground mt-2">
              <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> Koramangala, Bangalore</span>
              <span className="flex items-center gap-1"><Star className="h-4 w-4 text-[#FF9F0A] fill-current" /> 4.9 (42 reviews)</span>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <span className="inline-flex items-center gap-1 text-[12px] font-medium bg-[#E8F8EE] text-success px-2 py-1 rounded-full">
                <CheckCircle className="h-3.5 w-3.5" /> ID Verified
              </span>
              <span className="inline-flex items-center gap-1 text-[12px] font-medium bg-[#F5F5F7] text-muted-foreground px-2 py-1 rounded-full">
                Joined Feb 2026
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full md:w-auto mt-2 md:mt-0">
            {!isMe && <Button className="w-full">Message</Button>}
            {!isMe && <Button variant="secondary" className="w-full">Vouch for {name.split(' ')[0]}</Button>}
            {isMe && <Button variant="secondary" className="w-full">Edit Profile</Button>}
          </div>
        </div>
      </div>
      
      <div className="max-w-[700px] mx-auto px-6 flex flex-col gap-6">
        <h2 className="text-[20px] font-semibold text-primary">Recent Reviews</h2>
        
        <Card className="shadow-sm">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-[16px] text-muted-foreground shrink-0">
                A
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-[15px] text-primary">Arjun</span>
                  <div className="flex text-[#FF9F0A]">
                    <Star className="h-3 w-3 fill-current" />
                    <Star className="h-3 w-3 fill-current" />
                    <Star className="h-3 w-3 fill-current" />
                    <Star className="h-3 w-3 fill-current" />
                    <Star className="h-3 w-3 fill-current" />
                  </div>
                </div>
                <p className="text-[14px] text-muted-foreground leading-relaxed mt-1">
                  "Very quick and reliable. Delivered my tiffin perfectly on time. Will definitely trust again."
                </p>
                <div className="text-[12px] text-muted-foreground/50 mt-2">Task: Tiffin Delivery • 2 days ago</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardContent className="p-6">
            <div className="flex gap-4">
               <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-[16px] text-muted-foreground shrink-0">
                S
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-[15px] text-primary">Sneha</span>
                  <div className="flex text-[#FF9F0A]">
                    <Star className="h-3 w-3 fill-current" />
                    <Star className="h-3 w-3 fill-current" />
                    <Star className="h-3 w-3 fill-current" />
                    <Star className="h-3 w-3 fill-current" />
                    <Star className="h-3 w-3 fill-current" />
                  </div>
                </div>
                <p className="text-[14px] text-muted-foreground leading-relaxed mt-1">
                  "Took great care of my dog while I was working late. So helpful!"
                </p>
                <div className="text-[12px] text-muted-foreground/50 mt-2">Task: Pet Care • 1 week ago</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
