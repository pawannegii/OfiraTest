"use client"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowDownRight, ArrowUpRight, Wallet, ShieldAlert, History } from "lucide-react"

export default function WalletPage() {
  const transactions = [
    { id: "tx1", type: "earned", amount: 150, title: "Tiffin Delivery", date: "Today, 2:30 PM", status: "Completed" },
    { id: "tx2", type: "escrow", amount: 300, title: "Hold: Queue Standing", date: "Today, 10:15 AM", status: "In Escrow" },
    { id: "tx3", type: "paid", amount: 200, title: "Pet Care", date: "Yesterday", status: "Paid" },
    { id: "tx4", type: "earned", amount: 120, title: "Parcel Pickup", date: "Oct 12", status: "Completed" },
    { id: "tx5", type: "withdrawn", amount: 500, title: "Bank Transfer", date: "Oct 10", status: "Success" }
  ]

  return (
    <div className="min-h-screen bg-[#F5F5F7] pb-24 md:pb-12">
      <div className="sticky top-[64px] z-40 bg-white/80 backdrop-blur-md border-b-[1px] border-border md:hidden">
        <div className="flex h-14 items-center px-4">
          <Link href="/profile/me" className="flex items-center text-[15px] font-medium text-primary">
            <ArrowLeft className="h-5 w-5 mr-1" /> Back
          </Link>
        </div>
      </div>

      <div className="bg-primary text-white pt-8 pb-16 px-6">
        <div className="max-w-[700px] mx-auto">
          <h1 className="text-[32px] font-bold tracking-tight mb-8">My Wallet</h1>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-[15px] text-white/70 font-medium mb-1 tracking-wide uppercase">Available Balance</p>
              <div className="text-[48px] md:text-[56px] font-bold tracking-tight leading-none">₹820</div>
            </div>
            <Button className="bg-white text-primary hover:bg-[#F5F5F7] h-12 px-8 text-[15px] shadow-none">
              Withdraw to Bank
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-[700px] mx-auto px-6 relative -mt-6 mb-8 flex flex-col md:flex-row gap-4">
        <Card className="flex-1 shadow-sm border-none">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-[#FFF5E6] flex items-center justify-center text-[#FF9F0A]">
              <ShieldAlert className="h-6 w-6" strokeWidth={1.5} />
            </div>
            <div>
              <div className="text-[13px] text-muted-foreground font-medium">In Escrow</div>
              <div className="text-[20px] font-bold text-primary">₹300</div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="flex-1 shadow-sm border-none">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-[#E8F8EE] flex items-center justify-center text-[#34C759]">
              <Wallet className="h-6 w-6" strokeWidth={1.5} />
            </div>
            <div>
              <div className="text-[13px] text-muted-foreground font-medium">Total Earned</div>
              <div className="text-[20px] font-bold text-primary">₹1,450</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-[700px] mx-auto px-6">
        <h2 className="text-[20px] font-semibold text-primary mb-4 flex items-center gap-2">
          <History className="h-5 w-5" /> Recent Transactions
        </h2>
        
        <Card className="shadow-sm border border-border overflow-hidden">
          <div className="flex flex-col">
            {transactions.map((tx, idx) => (
              <div key={tx.id} className={`p-4 md:p-5 flex items-center justify-between ${idx !== transactions.length - 1 ? 'border-b border-border' : ''}`}>
                <div className="flex items-center gap-4">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center shrink-0 ${
                    tx.type === 'earned' ? 'bg-[#E8F8EE] text-[#34C759]' :
                    tx.type === 'paid' || tx.type === 'withdrawn' ? 'bg-[#F5F5F7] text-primary' :
                    'bg-[#FFF5E6] text-[#FF9F0A]'
                  }`}>
                    {tx.type === 'earned' ? <ArrowDownRight className="h-5 w-5" /> :
                     tx.type === 'escrow' ? <ShieldAlert className="h-5 w-5" /> :
                     <ArrowUpRight className="h-5 w-5" />}
                  </div>
                  <div>
                    <h4 className="text-[15px] font-semibold text-primary">{tx.title}</h4>
                    <p className="text-[13px] text-muted-foreground">{tx.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-[16px] font-bold ${tx.type === 'earned' ? 'text-[#34C759]' : 'text-primary'}`}>
                    {tx.type === 'earned' ? '+' : tx.type === 'paid' || tx.type === 'withdrawn' ? '-' : ''}₹{tx.amount}
                  </div>
                  <div className="text-[12px] text-muted-foreground font-medium">{tx.status}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
