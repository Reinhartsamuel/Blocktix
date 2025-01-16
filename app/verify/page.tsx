"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { QrCode, Search } from "lucide-react"

export default function VerifyTicket() {
  return (
    <div className="container max-w-2xl pt-24">
      <Card className="border border-border/40 bg-black/40 p-6">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-2xl font-bold">Verify NFT Ticket</h1>
          <p className="text-gray-400">Scan or enter the ticket token ID to verify authenticity</p>
        </div>
        
        <div className="space-y-8">
          <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-dashed border-border/40 bg-black/20 p-8">
            <QrCode className="h-16 w-16 text-gray-400" />
            <Button variant="outline">
              Scan QR Code
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border/40" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">or</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="tokenId">Token ID</Label>
              <div className="relative">
                <Input id="tokenId" placeholder="Enter ticket token ID" />
                <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>
            
            <Button className="w-full">
              Verify Ticket
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}