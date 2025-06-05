"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AlertCircle, Pencil } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function BuyerProfile() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="container mx-auto py-8 md:py-12">
      <h1 className="mb-8 text-3xl font-bold">Profile</h1>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16 border">
                  <AvatarImage src="/placeholder.svg?height=64&width=64" alt="@bessiedwards" />
                  <AvatarFallback>BE</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Bessie Edwards</CardTitle>
                  <p className="text-sm text-muted-foreground">@bessiedwards</p>
                </div>
              </div>
              <Button variant="outline" className="gap-1" onClick={() => setIsEditing(!isEditing)}>
                <Pencil className="h-4 w-4" />
                Edit
              </Button>
            </CardHeader>
          </Card>
        </div>

        <div className="md:col-span-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Personal Information</CardTitle>
              <div className="flex gap-2">
                <Button variant="outline">Change Password</Button>
                <Button variant="outline">Log Out</Button>
                <Button variant="outline" className="gap-1 md:hidden" onClick={() => setIsEditing(!isEditing)}>
                  <Pencil className="h-4 w-4" />
                  Edit
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <form className="grid gap-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="full-name">Full Name</Label>
                    <Input
                      id="full-name"
                      placeholder="Enter your full name"
                      defaultValue="Bessie Edwards"
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="username">User name</Label>
                    <Input
                      id="username"
                      placeholder="Enter your username"
                      defaultValue="@bessiedwards"
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      defaultValue="abcgdh@gmail.com"
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      defaultValue="+1 (888) 000-0000"
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    placeholder="Enter your address"
                    defaultValue="123 Organic Way Farmville, CA 90210"
                    disabled={!isEditing}
                  />
                  {isEditing && (
                    <Alert variant="default" className="bg-background border-amber-200">
                      <AlertCircle className="h-4 w-4 text-amber-500" />
                      <AlertDescription className="text-amber-500">Your address will be protected</AlertDescription>
                    </Alert>
                  )}
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="grid gap-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="Enter your city" defaultValue="Farmville" disabled={!isEditing} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" placeholder="Enter your state" defaultValue="CA" disabled={!isEditing} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="zip">Zip Code</Label>
                    <Input id="zip" placeholder="Enter your zip code" defaultValue="90210" disabled={!isEditing} />
                  </div>
                </div>
                {isEditing && (
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                    <Button className="bg-green-600 hover:bg-green-700">Save Changes</Button>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
