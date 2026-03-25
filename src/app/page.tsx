import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ArrowRight, 
  MapPin, 
  Wallet, 
  ShieldCheck, 
  Utensils, 
  Key, 
  Dog, 
  Package, 
  Users, 
  ShoppingCart, 
  Wrench, 
  HelpCircle 
} from "lucide-react"

const categories = [
  { name: "Tiffin Delivery", icon: Utensils },
  { name: "Key Handover", icon: Key },
  { name: "Pet Care", icon: Dog },
  { name: "Parcel Pickup", icon: Package },
  { name: "Queue Standing", icon: Users },
  { name: "Grocery Run", icon: ShoppingCart },
  { name: "Quick Help", icon: Wrench },
  { name: "Other", icon: HelpCircle },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-6 py-24 md:py-32 max-w-[1120px] mx-auto w-full flex flex-col items-center text-center">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-sm font-medium text-muted-foreground mb-8">
          <span className="flex h-2 w-2 rounded-full bg-[#34C759] mr-2"></span>
          Live in Koramangala & Indiranagar
        </div>
        
        <h1 className="text-[40px] md:text-[56px] font-bold tracking-tight text-primary leading-[1.1] max-w-3xl mb-6">
          Your city. Your people. <br />
          <span className="text-muted-foreground hidden sm:inline">Your help. </span>
          <span className="text-accent sm:hidden">Your help. </span>
        </h1>
        
        <p className="text-[18px] md:text-[20px] text-muted-foreground max-w-2xl mb-10 leading-[1.5]">
          Connect with locals for urgent micro-tasks. Apna locality batao — baaki hum dekhenge. Let's make everyday life a little easier, together.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link href="/feed" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto text-[16px]">
              Find Tasks Nearby
            </Button>
          </Link>
          <Link href="/post" className="w-full sm:w-auto">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto text-[16px]">
              Post a Task <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-muted py-24">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[32px] font-semibold tracking-tight text-primary mb-4">How Your Sathi Works</h2>
            <p className="text-[18px] text-muted-foreground">Simple, transparent, and hyperlocal.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-transparent border-none shadow-none hover:shadow-none hover:translate-y-0 p-0 text-center">
              <CardContent className="p-0 flex flex-col items-center">
                <div className="h-16 w-16 bg-white rounded-full shadow-apple flex items-center justify-center text-accent mb-6">
                  <MapPin className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-[18px] font-semibold mb-3">1. Post or Find</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  Post what you need done, or browse tasks posted by verified neighbors in your locality.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-transparent border-none shadow-none hover:shadow-none hover:translate-y-0 p-0 text-center">
              <CardContent className="p-0 flex flex-col items-center">
                <div className="h-16 w-16 bg-white rounded-full shadow-apple flex items-center justify-center text-accent mb-6">
                  <ShieldCheck className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-[18px] font-semibold mb-3">2. Connect Securely</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  Chat in real-time. Payments are held in escrow. Trust is backed by community ratings.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-transparent border-none shadow-none hover:shadow-none hover:translate-y-0 p-0 text-center">
              <CardContent className="p-0 flex flex-col items-center">
                <div className="h-16 w-16 bg-white rounded-full shadow-apple flex items-center justify-center text-accent mb-6">
                  <Wallet className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-[18px] font-semibold mb-3">3. Complete & Earn</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  Get the job done. Payment is instantly released to your wallet. Aapki kamai, aapke haath.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-6 max-w-[1120px] mx-auto w-full">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-[32px] font-semibold tracking-tight text-primary mb-4">What's happening nearby</h2>
            <p className="text-[18px] text-muted-foreground">Categories to help you get started.</p>
          </div>
          <div className="hidden sm:block">
            <Link href="/post" className="text-accent font-medium hover:underline flex items-center">
              View all <ArrowRight className="ml-1 h-4 w-4 inline" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link key={category.name} href={`/feed?category=${encodeURIComponent(category.name)}`}>
              <Card className="group cursor-pointer hover:border-accent/30 transition-all text-center flex flex-col items-center justify-center py-8">
                <div className="bg-muted p-4 rounded-full group-hover:bg-accent/10 transition-colors mb-4 text-[#1D1D1F] group-hover:text-accent">
                  <category.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h4 className="font-medium text-[15px] text-primary">{category.name}</h4>
              </Card>
            </Link>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-24 text-center px-6">
        <h2 className="text-[32px] font-semibold tracking-tight mb-6 text-white">Ready to help your neighbors?</h2>
        <p className="text-[18px] text-[#AEAEB2] max-w-xl mx-auto mb-10">
          Join thousands of verified locals earning quick money and helping each other out.
        </p>
        <Link href="/signup">
          <Button className="bg-[#FFFFFF] text-[#1D1D1F] hover:bg-[#F5F5F7] h-12 px-8 text-[16px]">
            Create a Free Account
          </Button>
        </Link>
      </section>
    </div>
  )
}
