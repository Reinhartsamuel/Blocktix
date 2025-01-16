"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, Users, ArrowLeft, Share2, Globe, Clock } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function EventDetails() {
  const { id } = useParams()

  // Mock data - in a real app, fetch based on id
  const event = {
    id: 1,
    title: "ETH Global London",
    date: "April 15, 2024",
    time: "09:00 AM GMT",
    endTime: "06:00 PM GMT",
    location: "Queen Elizabeth II Centre, London, UK",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=2000&h=800",
    price: "0.1 ETH",
    totalTickets: 1000,
    soldTickets: 867,
    description: `Join us for ETH Global London, the largest Ethereum hackathon in Europe! Connect with developers, entrepreneurs, and industry leaders in the heart of London's tech scene.

This three-day event features:
• Hands-on workshops and coding sessions
• Keynote speeches from Ethereum leaders
• Networking opportunities
• $500,000 in prizes and grants
• Direct access to top protocols and companies

Whether you're a seasoned blockchain developer or just starting your Web3 journey, ETH Global London provides the perfect platform to learn, build, and connect with the community.`,
    organizer: {
      name: "ETH Global",
      verified: true,
      events: 12,
      website: "https://ethglobal.com"
    },
    venue: {
      name: "Queen Elizabeth II Centre",
      address: "Broad Sanctuary, Westminster, London SW1P 3EE",
      googleMapsUrl: "https://maps.google.com"
    }
  }

  const percentageSold = (event.soldTickets / event.totalTickets) * 100
  const remainingTickets = event.totalTickets - event.soldTickets
  const isAlmostSoldOut = percentageSold >= 90

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={event.image}
            alt={event.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-background/20" />
        </div>
        <div className="container relative flex h-full items-end pb-12">
          <div className="mb-6 space-y-4">
            <Link href="/" className="inline-flex items-center text-sm text-gray-400 hover:text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Events
            </Link>
            <h1 className="text-4xl font-bold">{event.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-300">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                {event.date}
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                {event.time} - {event.endTime}
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                {event.location}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="border border-border/40 bg-black/40 p-6">
              <div className="prose prose-invert max-w-none">
                <h2 className="mb-4 text-xl font-bold">About This Event</h2>
                <p className="whitespace-pre-line text-gray-300">{event.description}</p>
              </div>

              <div className="mt-8">
                <h3 className="mb-4 text-lg font-semibold">Venue Information</h3>
                <Card className="border border-border/40 bg-black/20 p-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="mt-1 h-5 w-5 text-gray-400" />
                    <div>
                      <h4 className="font-medium">{event.venue.name}</h4>
                      <p className="mt-1 text-sm text-gray-400">{event.venue.address}</p>
                      <a
                        href={event.venue.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center text-sm text-blue-400 hover:text-blue-300"
                      >
                        <Globe className="mr-1 h-4 w-4" />
                        View on Google Maps
                      </a>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="mt-8">
                <h3 className="mb-4 text-lg font-semibold">Organizer</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
                    <div>
                      <div className="flex items-center">
                        <h4 className="font-medium">{event.organizer.name}</h4>
                        {event.organizer.verified && (
                          <span className="ml-2 rounded-full bg-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-400 ring-1 ring-blue-500/40">
                            Verified
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-400">{event.organizer.events} events created</p>
                    </div>
                  </div>
                  <a
                    href={event.organizer.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300"
                  >
                    <Globe className="mr-1 h-4 w-4" />
                    Website
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border border-border/40 bg-black/40 p-6">
              <div className="mb-6">
                <div className="mb-2 text-2xl font-bold">{event.price}</div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Tickets Remaining</span>
                    <span className={`font-medium ${isAlmostSoldOut ? 'text-red-400' : 'text-gray-400'}`}>
                      {remainingTickets} / {event.totalTickets}
                    </span>
                  </div>
                  <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-800">
                    <div
                      className={`absolute left-0 top-0 h-full rounded-full transition-all duration-300 ${isAlmostSoldOut
                        ? 'bg-gradient-to-r from-red-500 to-red-400 shadow-[0_0_10px_rgba(239,68,68,0.5)]'
                        : 'bg-gradient-to-r from-blue-500 to-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]'
                        }`}
                      style={{ width: `${percentageSold}%` }}
                    />
                  </div>
                  {isAlmostSoldOut && (
                    <p className="animate-pulse text-center text-sm font-medium text-red-400">
                      Almost Sold Out! Only {remainingTickets} tickets left
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <Button className="w-full">Buy Ticket</Button>
                <Button variant="outline" className="w-full">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Event
                </Button>
              </div>

              <div className="mt-6 rounded-lg bg-blue-950/30 p-4 text-sm">
                <div className="flex items-center text-blue-400">
                  <Ticket className="mr-2 h-4 w-4" />
                  <span className="font-medium">NFT Ticket Benefits</span>
                </div>
                <ul className="mt-2 space-y-2 text-gray-400">
                  <li>• Easily transferable to another wallet</li>
                  <li>• Verifiable authenticity</li>
                  <li>• Exclusive holder benefits</li>
                  <li>• Collectible memorabilia</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}