import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, MapPin, Ticket } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const events = [
    {
      id: 1,
      title: "BLOCKDEV CONF 2024",
      date: "Every Tuesday 19.00 Asia/Jakarta",
      location: "Online (Zoom)",
      image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/event/e948db15-ef8b-4a29-859c-dc6fe4cdccb3.jpg",
      price: "0.1 ETH",
      totalTickets: 1000,
      soldTickets: 867
    },
    {
      id: 2,
      title: "BlockDev Mingle",
      date: "March 10, 2024",
      location: "Sinarmas Land, Kuningan, Jakarta",
      image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/event/67ae71c9-71f3-48d6-91cb-700379583640.jpg",
      price: "0.15 ETH",
      totalTickets: 500,
      soldTickets: 479
    },
    {
      id: 3,
      title: "Kelas Blockchain BlockDev",
      date: "May 20, 2024",
      location: "Jakarta, Indonesia",
      image: "https://firebasestorage.googleapis.com/v0/b/byscript-io.appspot.com/o/blockdev.jpg?alt=media&token=4c7a8fe0-4188-44c4-aa27-769fea3660eb",
      price: "0.08 ETH",
      totalTickets: 750,
      soldTickets: 523
    }
  ]

  return (
    <div className="pt-24 w-full">
      <section className="py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                The Future of Event Ticketing
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Secure, transparent, and verifiable event tickets powered by blockchain technology.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/create">
                <Button size="lg">
                  Create Event
                </Button>
              </Link>
              <Link href="/events">
                <Button variant="outline" size="lg">
                  Browse Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 max-w-7xl mx-auto w-full">
        <h2 className="mb-8 text-2xl font-bold">Featured Events</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => {
            const percentageSold = (event.soldTickets / event.totalTickets) * 100;
            const remainingTickets = event.totalTickets - event.soldTickets;
            const isAlmostSoldOut = percentageSold >= 90;

            return (
              <Card key={event.id} className="overflow-hidden border border-border/40 bg-black/40 transition-all hover:border-primary/40 hover:bg-black/60">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{event.title}</h3>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Ticket className="mr-2 h-4 w-4" />
                      {event.price}
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
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

                  <div className="mt-4 flex space-x-3">
                    <Link href={`/event/${event.id}`} className="flex-1">
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </Link>
                    <Button className="flex-1">
                      Buy Ticket
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  )
}