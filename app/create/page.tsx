"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Upload } from "lucide-react"

export default function CreateEvent() {
  return (
    <div className="container max-w-4xl pt-24">
      <Card className="border border-border/40 bg-black/40 p-6">
        <h1 className="mb-8 text-2xl font-bold">Create New Event</h1>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Event Title</Label>
            <Input id="title" placeholder="Enter event title" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Describe your event" />
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <div className="relative">
                <Input id="date" type="date" />
                <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" placeholder="Event location" />
            </div>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="price">Ticket Price (ETH)</Label>
              <Input id="price" type="number" step="0.001" placeholder="0.00" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="supply">Ticket Supply</Label>
              <Input id="supply" type="number" placeholder="100" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Event Cover Image</Label>
            <div className="flex h-32 cursor-pointer items-center justify-center rounded-lg border border-dashed border-border/40 bg-black/20 transition-colors hover:border-primary/40">
              <div className="flex flex-col items-center space-y-2 text-gray-400">
                <Upload className="h-8 w-8" />
                <span>Drop an image or click to upload</span>
              </div>
            </div>
          </div>
          
          <Button size="lg" className="w-full">
            Create Event
          </Button>
        </div>
      </Card>
    </div>
  )
}