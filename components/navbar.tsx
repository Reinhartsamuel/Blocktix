"use client"

import { Ticket, Plus, Wallet, User } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
// import { createThirdwebClient } from "thirdweb";
// import { ConnectButton } from "thirdweb/react";

export function Navbar() {
  // const client = createThirdwebClient({ clientId: process.env.NEXT_PUBLIC_THIRDWEB_API_KEY || '' });

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center">
      <div className="container flex justify-center h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Ticket className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">NFTix</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Link href="/create">
            <Button variant="ghost" size="sm">
              <Plus className="mr-2 h-4 w-4" /> Create Event
            </Button>
          </Link>
          <Link href="/verify">
            <Button variant="ghost" size="sm">
              Verify Ticket
            </Button>
          </Link>
          <Link href="/profile">
            <Button variant="ghost" size="sm">
              <User className="mr-2 h-4 w-4" /> Profile
            </Button>
          </Link>
          <Button variant="default" size="sm">
            <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
          </Button>
          {/* <ConnectButton client={client} />; */}
        </div>
      </div>
    </nav>
  )
}