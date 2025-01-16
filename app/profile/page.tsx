"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, Users, Wallet } from "lucide-react"
import Link from "next/link"

export default function Profile() {
  // Mock data - in a real app, this would come from your backend
  const myEvents = [
    {
      id: 1,
      title: "BLOCKDEV CONF 2024",
      date: "Every Tuesday 19.00 Asia/Jakarta",
      location: "Online (Zoom)",
      image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/event/e948db15-ef8b-4a29-859c-dc6fe4cdccb3.jpg",
      price: "0.1 ETH",
      totalTickets: 1000,
      soldTickets: 867,
      description: "Join us for ETH Global London, the largest Ethereum hackathon in Europe! Connect with developers, entrepreneurs, and industry leaders in the heart of London's tech scene.",
      revenue : '30'
    },
    {
      id: 2,
      title: "BlockDev Mingle",
      date: "March 10, 2024",
      location: "Sinarmas Land, Kuningan, Jakarta",
      image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/event/67ae71c9-71f3-48d6-91cb-700379583640.jpg",
      price: "0.15 ETH",
      totalTickets: 500,
      soldTickets: 479,
      description: "Join us for ETH Global London, the largest Ethereum hackathon in Europe! Connect with developers, entrepreneurs, and industry leaders in the heart of London's tech scene.",
      revenue : '30'
    },
    {
      id: 3,
      title: "Kelas Blockchain BlockDev",
      date: "May 20, 2024",
      location: "Jakarta, Indonesia",
      image: "https://firebasestorage.googleapis.com/v0/b/byscript-io.appspot.com/o/blockdev.jpg?alt=media&token=4c7a8fe0-4188-44c4-aa27-769fea3660eb",
      price: "0.08 ETH",
      totalTickets: 750,
      soldTickets: 523,
      description: "Join us for ETH Global London, the largest Ethereum hackathon in Europe! Connect with developers, entrepreneurs, and industry leaders in the heart of London's tech scene.",
      revenue : '30'
    }
  ]

  const isEventActive = (date: string) => new Date(date) > new Date()

  return (
    <div className=" w-screen flex justify-center">
      <div className="container pt-24">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">My Events</h1>
            <p className="mt-2 text-gray-400">Manage your created events and track their performance</p>
          </div>
          <Link href="/create">
            <Button>Create New Event</Button>
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {myEvents.map((event) => {
            const isActive = isEventActive(event.date)
            const percentageSold = (event.soldTickets / event.totalTickets) * 100
            const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })

            return (
              <Card key={event.id} className="overflow-hidden border border-border/40 bg-black/40">
                <div className="relative">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute right-4 top-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${isActive
                        ? 'bg-green-500/20 text-green-400 ring-1 ring-green-500/40'
                        : 'bg-gray-500/20 text-gray-400 ring-1 ring-gray-500/40'
                      }`}>
                      {isActive ? 'Active' : 'Past Event'}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 p-6">
                  <div>
                    <h3 className="text-xl font-bold">{event.title}</h3>
                    <p className="mt-1 text-sm text-gray-400">{event.description}</p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        {formattedDate}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4" />
                        {event.location}
                      </div>
                      <div className="flex items-center">
                        <Ticket className="mr-2 h-4 w-4" />
                        {event.price} ETH
                      </div>
                    </div>

                    <div className="space-y-2 rounded-lg bg-black/40 p-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Sales</span>
                        <span className="font-medium text-gray-300">
                          {event.soldTickets}/{event.totalTickets}
                        </span>
                      </div>
                      <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-800">
                        <div
                          className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                          style={{ width: `${percentageSold}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-lg bg-black/40 p-4">
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-gray-400" />
                      <div>
                        <div className="text-sm font-medium">{event.soldTickets} Attendees</div>
                        <div className="text-xs text-gray-400">Total tickets sold</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Wallet className="h-5 w-5 text-gray-400" />
                      <div>
                        <div className="text-sm font-medium">{event.revenue} ETH</div>
                        <div className="text-xs text-gray-400">Total revenue</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Link href={`/event/${event.id}`} className="flex-1">
                      <Button className="w-full" variant="outline">
                        View Details
                      </Button>
                    </Link>
                    {isActive && (
                      <Link href="/verify" className="flex-1">
                        <Button className="w-full">
                          Verify Tickets
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div></div>
  )
}