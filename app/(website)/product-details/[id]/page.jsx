"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import FutureProduct from "./Future_product"
import { ChevronLeft, ChevronRight, Star, MapPin, Truck, Shield, Minus, Plus } from "lucide-react"

export default function Page() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(2)
  const [activeTab, setActiveTab] = useState("description")
  const [showReviewModal, setShowReviewModal] = useState(false)
  const [reviewRating, setReviewRating] = useState(0)
  const [reviewDescription, setReviewDescription] = useState("")

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

  const handleSaveReview = () => {
    console.log("Rating:", reviewRating)
    console.log("Description:", reviewDescription)
    setShowReviewModal(false)
    setReviewRating(0)
    setReviewDescription("")
  }

  return (
    <div className="mt-[64px]">
      <div className="container mx-auto px-4 py-6 lg:py-8 shadow-2xl mb-[100px]">
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
            <div className="grid grid-cols-4 gap-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`rounded-lg overflow-hidden border-2 transition-colors ${
                    currentImageIndex === index ? "border-green-500" : "border-gray-200"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    width={1000}
                    height={1000}
                    className="object-cover w-full h-[116px]"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-[40px] font-semibold text-[#272727] mb-4">
                Fresh Fruits, California
              </h1>
              <p className="text-base text-[#323232] font-normal underline mb-2">From Sunshine Organic Farm</p>

              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center gap-1 text-sm text-[#707070]">
                  <MapPin className="h-4 w-4" />
                  <span>California • 2.5 kilometers away</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-[#FFD700] text-[#FACC15]" />
                  <span className="text-sm font-medium">4.8</span>
                  <span className="text-sm text-[#707070]">(98)</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-xl font-semibold text-[#111827] mt-6 mb-1">$25 per box</div>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  In stock
                </Badge>
              </div>
            </div>

            {/* Quantity and Purchase */}
            <div className="space-y-4">
              <div className="flex items-center gap-x-7">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">QTY</label>
                  <div className="flex items-center border-[1px] border-[#595959] rounded-md">
                    <Button variant="ghost" size="sm" onClick={() => updateQuantity(-1)} className="h-10 w-10 p-0">
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="px-4 py-2 min-w-[60px] text-center">{quantity}</span>
                    <Button variant="ghost" size="sm" onClick={() => updateQuantity(1)} className="h-10 w-10 p-0">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="">
                  <div className="text-base text-[#707070] font-medium mb-1">Total</div>
                  <div className="text-xl text-[#111827] font-normal">${(25 * quantity).toFixed(2)}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <Button className="bg-[#039B06] w-[377px] h-[44px] hover:bg-[#039B06]/80 text-white rounded-[4px">
                  Purchase
                </Button>
                <Button className="h-[44px] w-[175px] rounded-[4px] bg-transparent border border-[#00000033] text-[#039B06]">
                  Add Cart
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3 pt-4 border-t">
              <div className="flex items-center gap-2 text-sm text-[#595959] font-normal">
                <Truck className="h-4 w-4" />
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#595959] font-normal">
                <Shield className="h-4 w-4" />
                <span>Satisfaction guaranteed or your money back</span>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Tab Implementation */}
        <Card className="shadow-none border-none">
          <CardContent className="p-0">
            <div className="w-full">
              {/* Custom Tab Headers */}
              <div className="flex border-b">
                <button
                  onClick={() => setActiveTab("description")}
                  className={`px-6 py-3 text-base font-medium ${
                    activeTab === "description" ? "text-[#039B06] border-b-2 border-[#039B06]" : "text-gray-600"
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab("details")}
                  className={`px-6 py-3 text-base font-medium ${
                    activeTab === "details" ? "text-[#039B06] border-b-2 border-[#039B06]" : "text-gray-600"
                  }`}
                >
                  Product Details
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`px-6 py-3 text-base font-medium ${
                    activeTab === "reviews" ? "text-[#039B06] border-b-2 border-[#039B06]" : "text-gray-600"
                  }`}
                >
                  Reviews
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === "description" && (
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed">
                    Our organic apples are grown without synthetic pesticides or fertilizers. They are picked at peak
                    ripeness to ensure the best flavor and nutritional value. These apples are perfect for snacking,
                    baking, or adding to your favorite recipes. Our organic apples are grown without synthetic
                    pesticides or fertilizers. They are picked at peak ripeness to ensure the best flavor and
                    nutritional value. These apples are perfect for snacking, baking, or adding to your favorite
                    recipes.
                  </p>
                </div>
              )}

              {activeTab === "details" && (
                <div className="p-6">
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
                </div>
              )}

              {activeTab === "reviews" && (
                <div className="p-6 border-b">
                  <div className="space-y-6">
                    <div className="">
                      <Dialog className="!bg-black" open={showReviewModal} onOpenChange={setShowReviewModal}>
                        <DialogTrigger asChild>
                          <Button
                            size="sm"
                            className="bg-[#039B06] h-[44px] rounded-[4px] text-white hover:bg-[#039B06]/80 mt-[30px]"
                          >
                            Write a Review
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                          <DialogHeader>
                            <DialogTitle>Write Your Review</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-6">
                            {/* Star Rating */}
                            <div>
                              <Label className="text-sm font-medium text-gray-700 mb-3">Rate Us</Label>
                              <div className="flex gap-1 mt-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <button
                                    key={star}
                                    onClick={() => setReviewRating(star)}
                                    className="focus:outline-none"
                                  >
                                    <Star
                                      className={`h-6 w-6 transition-colors ${
                                        star <= reviewRating ? "fill-[#FACC15] text-[#FACC15]" : "text-gray-300"
                                      }`}
                                    />
                                  </button>
                                ))}
                              </div>
                            </div>

                            {/* Description */}
                            <div>
                              <Label htmlFor="review-description" className="text-sm font-medium text-gray-700 mb-3">
                                Description
                              </Label>
                              <Textarea
                                id="review-description"
                                value={reviewDescription}
                                onChange={(e) => setReviewDescription(e.target.value)}
                                placeholder="Write your review here..."
                                rows={4}
                                className="mt-2 resize-none"
                              />
                            </div>

                            {/* Save Button */}
                            <Button
                              onClick={handleSaveReview}
                              className="w-full bg-[#039B06] hover:bg-[#039B06]/80 text-white h-[44px] rounded-[4px]"
                            >
                              Save
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>

                    <div className="">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-[50px] w-[50px]">
                          <AvatarImage src="/placeholder.svg?height=50&width=50" />
                          <AvatarFallback>SJ</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="gap-2 mb-2">
                            <span className="font-medium text-[18px] text-[#595959]">Sarah Johnson</span>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-[#FACC15] text-[#FACC15]" />
                            ))}
                            <span className="text-sm text-gray-500 ml-3">2 weeks ago</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-[#272727] text-base font-normal leading-[150%] mt-6">
                        &quot;I&apos;ve been ordering from TABLEFRESH for over year now, and the quality of their organic produce
                        is consistently excellent. The convenience of having fresh, organic food delivered to my door
                        has made healthy eating so much easier for my family.&quot;
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <FutureProduct />
    </div>
  )
}
