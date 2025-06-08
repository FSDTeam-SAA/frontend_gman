"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Product {
  id: string
  name: string
  image: string
  distance: string
  availability: string
  price: string
  rating: number
  reviews: number
  inStock: boolean
}

const dummyProducts: Product[] = [
  {
    id: "1",
    name: "Fresh Strawberries",
    image: "/asset/product1.png",
    distance: "2.5 kilometers away",
    availability: "Available all year",
    price: "$25 per box",
    rating: 4.8,
    reviews: 98,
    inStock: true,
  },
  {
    id: "2",
    name: "Organic Apples",
    image: "/asset/product1.png",
    distance: "1.2 kilometers away",
    availability: "Available all year",
    price: "$18 per box",
    rating: 4.6,
    reviews: 156,
    inStock: true,
  },
  {
    id: "3",
    name: "Fresh Vegetables Mix",
     image: "/asset/product1.png",
    distance: "3.1 kilometers away",
    availability: "Available seasonally",
    price: "$32 per box",
    rating: 4.9,
    reviews: 87,
    inStock: false,
  },
  {
    id: "4",
    name: "Garden Fresh Herbs",
    image: "/asset/product1.png",
    distance: "0.8 kilometers away",
    availability: "Available all year",
    price: "$15 per bundle",
    rating: 4.7,
    reviews: 124,
    inStock: true,
  },
  {
    id: "5",
    name: "Organic Lettuce",
     image: "/asset/product1.png",
    distance: "2.0 kilometers away",
    availability: "Available all year",
    price: "$12 per head",
    rating: 4.5,
    reviews: 203,
    inStock: true,
  },
  {
    id: "6",
    name: "Fresh Tomatoes",
    image: "/asset/product1.png",
    distance: "1.5 kilometers away",
    availability: "Available seasonally",
    price: "$22 per box",
    rating: 4.8,
    reviews: 167,
    inStock: true,
  },
 
]

export default function FutureProduct() {
  const [favorites, setFavorites] = useState<string[]>([])

  const toggleFavorite = (productId: string) => {
    setFavorites((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Featured Products</h2>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6 gap-y-10">
        {dummyProducts.map((product) => (
          <Link key={product.id} href={`/product-details/${product.id}`}>
            <div className="group cursor-pointer relative overflow-hidden">
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
                  onClick={(e) => {
                    e.preventDefault()
                    toggleFavorite(product.id)
                  }}
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
  )
}
