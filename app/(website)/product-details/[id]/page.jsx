"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Star, MapPin, Truck, Shield, Minus, Plus } from "lucide-react"

export default function Page() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(2)

  const images = [
    "/asset/Details1 (1).jpg",
    "/asset/Details1 (2).jpg",
    "/asset/Details1 (3).jpg",
    "/asset/Details1 (4).jpg",
   
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const updateQuantity = (change) => {
    setQuantity(Math.max(1, quantity + change))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mb-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square h-[353px] w-full rounded-lg overflow-hidden">
              <Image
                src={images[currentImageIndex] || "/placeholder.svg"}
                alt="Fresh Fruits"
                fill
                className="object-cover"
                priority
              />
              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={prevImage}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={nextImage}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4  gap-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`aspect-square  rounded-lg overflow-hidden border-2 transition-colors ${
                    currentImageIndex === index ? "border-green-500" : "border-gray-200"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    width={1000}
                    height={1000}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-[40px] font-semibold text-[#272727] mb-2">
                Fresh Fruits, California
              </h1>
              <p className="text-gray-600 mb-3">From Sunshine Organic Farm</p>

              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>California • 2.5 kilometers away</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">4.8</span>
                  <span className="text-sm text-gray-500">(98)</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-1">$25 per box</div>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  In stock
                </Badge>
              </div>
            </div>

            {/* Quantity and Purchase */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">QTY</label>
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <Button variant="ghost" size="sm" onClick={() => updateQuantity(-1)} className="h-10 w-10 p-0">
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="px-4 py-2 min-w-[60px] text-center">{quantity}</span>
                    <Button variant="ghost" size="sm" onClick={() => updateQuantity(1)} className="h-10 w-10 p-0">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600 mb-1">Total</div>
                  <div className="text-2xl font-bold">${(25 * quantity).toFixed(2)}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button className="bg-green-600 hover:bg-green-700 text-white h-12">Purchase</Button>
                <Button variant="outline" className="h-12">
                  Add Cart
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3 pt-4 border-t">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Truck className="h-4 w-4" />
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className="h-4 w-4" />
                <span>Satisfaction guaranteed or your money back</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Information Tabs */}
        <Card>
          <CardContent className="p-0">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3 rounded-none border-b">
                <TabsTrigger value="description" className="rounded-none">
                  Description
                </TabsTrigger>
                <TabsTrigger value="details" className="rounded-none">
                  Product Details
                </TabsTrigger>
                <TabsTrigger value="reviews" className="rounded-none">
                  Reviews
                </TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  Our organic apples are grown without synthetic pesticides or fertilizers. They are picked at peak
                  ripeness to ensure the best flavor and nutritional value. These apples are perfect for snacking,
                  baking, or adding to your favorite recipes. Our organic apples are grown without synthetic pesticides
                  or fertilizers. They are picked at peak ripeness to ensure the best flavor and nutritional value.
                  These apples are perfect for snacking, baking, or adding to your favorite recipes.
                </p>
              </TabsContent>

              <TabsContent value="details" className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Product Specifications</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Origin:</span>
                        <span className="font-medium">California, USA</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Organic Certified:</span>
                        <span className="font-medium">Yes</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Weight:</span>
                        <span className="font-medium">5 lbs per box</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Delivery Date:</span>
                        <span className="font-medium">05/09/2025</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Farm Practices</h3>
                    <p className="text-gray-700">Sustainable farming, No synthetic pesticides, Drip irrigation</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="p-6">
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <h3 className="font-semibold text-gray-900">Customer Reviews</h3>
                    <Button variant="outline" size="sm">
                      Write a Review
                    </Button>
                  </div>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>SJ</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                          <span className="font-medium">Sarah Johnson</span>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">2 weeks ago</span>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          "I've been ordering from TABLEFRESH for over year now, and the quality of their organic
                          produce is consistently excellent. The convenience of having fresh, organic food delivered to
                          my door has made healthy eating so much easier for my family."
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>SJ</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                          <span className="font-medium">Sarah Johnson</span>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">3 weeks ago</span>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          "I've been ordering from TABLEFRESH for over year now, and the quality of their organic
                          produce is consistently excellent. The convenience of having fresh, organic food delivered to
                          my door has made healthy eating so much easier for my family."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
