"use client"

import Image from "next/image"
import { Heart, MapPin, Star, MessageCircle, Clock6 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import PageHeader from "@/components/sheard/PageHeader"
import { useState } from "react"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Fresh Strawberries",
    image: "/asset/product1.png",
    price: "$25 per box",
    rating: 4.8,
    reviews: 98,
    distance: "2.5 kilometers away",
    availability: "Available all year",
    inStock: true,
  },
  {
    id: 2,
    name: "Fresh Strawberries",
    image: "/asset/akslj (2).png",
    price: "$25 per box",
    rating: 4.8,
    reviews: 98,
    distance: "2.5 kilometers away",
    availability: "Available all year",
    inStock: true,
  },
  {
    id: 3,
    name: "Fresh Strawberries",
    image: "/asset/product1.png",
    price: "$25 per box",
    rating: 4.8,
    reviews: 98,
    distance: "2.5 kilometers away",
    availability: "Available all year",
    inStock: true,
  },
  {
    id: 4,
    name: "Fresh Strawberries",
    image: "/asset/product1.png",
    price: "$25 per box",
    rating: 4.8,
    reviews: 98,
    distance: "2.5 kilometers away",
    availability: "Available all year",
    inStock: false,
  },
  {
    id: 5,
    name: "Fresh Strawberries",
    image: "/asset/product1.png",
    price: "$25 per box",
    rating: 4.8,
    reviews: 98,
    distance: "2.5 kilometers away",
    availability: "Available all year",
    inStock: true,
  },
  {
    id: 6,
    name: "Fresh Strawberries",
    image: "/asset/product1.png",
    price: "$25 per box",
    rating: 4.8,
    reviews: 98,
    distance: "2.5 kilometers away",
    availability: "Available all year",
    inStock: true,
  },
  {
    id: 7,
    name: "Fresh Strawberries",
    image: "/asset/product1.png",
    price: "$25 per box",
    rating: 4.8,
    reviews: 98,
    distance: "2.5 kilometers away",
    availability: "Available all year",
    inStock: true,
  },
  {
    id: 8,
    name: "Fresh Strawberries",
    image: "/asset/akslj (2).png",
    price: "$25 per box",
    rating: 4.8,
    reviews: 98,
    distance: "2.5 kilometers away",
    availability: "Available all year",
    inStock: true,
  },
  {
    id: 9,
    name: "Fresh Strawberries",
    image: "/asset/akslj (2).png",
    price: "$25 per box",
    rating: 4.8,
    reviews: 98,
    distance: "2.5 kilometers away",
    availability: "Available all year",
    inStock: true,
  },
  {
    id: 10,
    name: "Fresh Strawberries",
    image: "/asset/akslj (2).png",
    price: "$25 per box",
    rating: 4.8,
    reviews: 98,
    distance: "2.5 kilometers away",
    availability: "Available all year",
    inStock: true,
  },
  {
    id: 11,
    name: "Fresh Strawberries",
    image: "/asset/akslj (2).png",
    price: "$25 per box",
    rating: 4.8,
    reviews: 98,
    distance: "2.5 kilometers away",
    availability: "Available all year",
    inStock: true,
  },
  {
    id: 12,
    name: "Fresh Strawberries",
    image: "/asset/akslj (2).png",
    price: "$25 per box",
    rating: 4.8,
    reviews: 98,
    distance: "2.5 kilometers away",
    availability: "Available all year",
    inStock: true,
  },
]

export default function Page() {
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  return (
    <div className="min-h-screen">
      {/* page header */}
      <PageHeader
        imge="/asset/framheader.jpg"
        titile="Featured Organic Farms"
        subtitle="Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development."
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 lg:mt-[100px]">
        {/* Farm Header */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            {/* Profile Image and Basic Info */}
            <div className="flex items-start gap-4 flex-1">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-[80px] lg:h-[80px] rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/asset/profile1.png"
                  alt="Farmer profile"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-lg sm:text-xl lg:text-[18px] font-semibold text-[#272727] mb-2">
                  Green Valley Farm
                </h1>
                <div className="flex items-center gap-2 mb-2">
                  <Clock6 className="w-3 h-3 sm:w-4 sm:h-4 text-[#039B06] flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-[#039B06] font-normal">
                    This farm produces organic products
                  </span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-[#039B06] flex-shrink-0" />
                  <span className="text-sm sm:text-base font-normal text-[#595959]">Sacramento, CA 95814</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description and Rating */}
          <div className="mt-4 sm:mt-6">
            <p className="text-base sm:text-lg lg:text-xl text-[#4B5563] font-normal mb-3 sm:mb-4">
              Family-owned organic farm specializing in seasonal vegetables and herbs.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-[#FACC15] text-[#FACC15]" />
                  <span className="font-semibold text-[#000000]">4.9</span>
                  <span className="text-sm text-[#272727]">(127)</span>
                </div>
              </div>
              <Button className="bg-[#039B06] hover:bg-[#039B06]/80 text-white rounded-[4px] w-full sm:w-auto cursor-pointer text-sm sm:text-base px-4 py-2">
                <MessageCircle className="w-4 h-4 mr-2" />
                Message Farmer
              </Button>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="pb-8 sm:pb-12 lg:pb-16">
          <h2 className="text-lg sm:text-xl lg:text-xl font-bold text-[#272727] mb-6 sm:mb-8 lg:mb-10">
            Farms Products
          </h2>

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6 gap-y-10">
            {products.map((product) => (
            <Link  key={product.id} href={`/product-details/${product.id}`}>
              <div className="group cursor-pointer relative overflow-hidden ">
                <div className="relative">
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className={`absolute top-2 sm:top-3 right-2 sm:right-3 p-1.5 sm:p-2 rounded-full transition-colors ${
                      favorites.includes(product.id) ? "bg-black border-2 border-white" : "bg-white/80 hover:bg-white"
                    }`}
                  >
                    <Heart
                      className={`w-3 h-3 sm:w-4 sm:h-4 transition-colors ${
                        favorites.includes(product.id) ? "text-white fill-white" : "text-gray-600 hover:text-red-500"
                      }`}
                    />
                  </button>
                  {!product.inStock && (
                    <Badge className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-orange-100 text-orange-800 hover:bg-orange-100 text-xs">
                      Out of Stock
                    </Badge>
                  )}
                </div>

                <div className="pt-3 sm:pt-4">
                  <h3 className="font-semibold text-sm sm:text-base text-[#111827] mb-2 sm:mb-3 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-normal text-[#4B5563] mb-1">{product.distance}</p>
                  <p className="text-xs sm:text-sm font-normal text-[#4B5563] mb-2 sm:mb-3">{product.availability}</p>

                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-xs sm:text-sm text-[#111827]">{product.price}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-[#FACC15] text-[#FACC15]" />
                      <span className="text-xs sm:text-sm font-medium text-gray-900">{product.rating}</span>
                      <span className="text-xs sm:text-sm text-gray-600">({product.reviews})</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
