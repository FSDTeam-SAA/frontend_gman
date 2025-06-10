"use client"

import { useState } from "react"
import { Search, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Message {
  id: string
  sender: string
  message: string
  time: string
  avatar: string
}

export default function MessagesInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "John Doe",
      message: "Hi, I have a question...",
      time: "10:15 AM",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ])

  console.log(setMessages)
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log("Sending message:", newMessage)
      setNewMessage("")
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search Message" className="pl-10" />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="space-y-1">
            {messages.map((message) => (
              <div key={message.id} className="flex items-center gap-3 p-3 hover:bg-muted cursor-pointer">
                <Avatar>
                  <AvatarImage src={message.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{message.sender[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm">{message.sender}</p>
                  <p className="text-sm text-muted-foreground truncate">{message.message}</p>
                </div>
                <span className="text-xs text-muted-foreground">{message.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="lg:col-span-2">
        <Card className="h-full">
          <CardHeader className="border-b">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">John Doe</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-1 p-4">
            <div className="space-y-4 mb-4">
              <div className="flex justify-end">
                <div className="bg-[#014A14] text-white rounded-lg px-3 py-2 max-w-xs">What?</div>
              </div>
            </div>
          </CardContent>
          <div className="border-t p-4">
            <div className="flex gap-2">
              <Input
                placeholder="Type your message"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <Button onClick={handleSendMessage} className="bg-[#014A14] hover:bg-[#016A1A]">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
