import Image from "next/image"
import { Heart, MapPin, Star, MessageCircle, Check, Clock6 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PageHeader from "@/components/sheard/PageHeader"

const products = [
  {
    id: 1,
    name: "Fresh Strawberries",
    image: "/placeholder.svg?height=200&width=200",
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
    image: "/placeholder.svg?height=200&width=200",
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
    image: "/placeholder.svg?height=200&width=200",
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
    image: "/placeholder.svg?height=200&width=200",
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
    image: "/placeholder.svg?height=200&width=200",
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
    image: "/placeholder.svg?height=200&width=200",
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
    image: "/placeholder.svg?height=200&width=200",
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
    image: "/placeholder.svg?height=200&width=200",
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
    image: "/placeholder.svg?height=200&width=200",
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
    image: "/placeholder.svg?height=200&width=200",
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
    image: "/placeholder.svg?height=200&width=200",
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
    image: "/placeholder.svg?height=200&width=200",
    price: "$25 per box",
    rating: 4.8,
    reviews: 98,
    distance: "2.5 kilometers away",
    availability: "Available all year",
    inStock: true,
  },
]

export default function page() {
  return (
    <div className="">
        {/* page header */}
         <PageHeader imge='/asset/framheader.jpg' titile="Featured Organic Farms" subtitle='Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.'/>

      <div className=" container mx-auto mt-[100px] ">
        {/* Farm Header */}
        <div className=" p-4 sm:p-6 mb-6">
          <div className="gap-4">
            <div className="flex items-center gap-4 flex-1">
              <div className="w-[80px] h-[80px] rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/asset/profile1.png"
                  alt="Farmer profile"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-[18px] font-semibold text-[#272727] mb-1">Green Valley Farm</h1>
                <div className="flex items-center gap-2 mb-2">
                  <Clock6 className="w-4 h-4 text-[#039B06]" />
                  <span className="text-sm text-[#039B06] font-normal">This farm produces organic products</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600 ">
                  <MapPin className="w-4 h-4 text-[#039B06]" />
                  <span className="text-base font-normal text-[#595959]">Sacramento, CA 95814</span>
                </div>
              
              </div>
            </div>
              <p className="text-xl text-[#4B5563] font-normal mb-1 mt-3">
                  Family-owned organic farm specializing in seasonal vegetables and herbs.
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-[#FACC15] text-[#FACC15]" />
                    <span className="font-semibold text-[#000000]">4.9</span>
                    <span className="text-sm text-[#272727]">(127)</span>
                  </div>
                </div>
            <Button className="bg-[#039B06] hover:bg-[#039B06]/80 text-white rounded-[4px] mt-3 w-full sm:w-auto">
              <MessageCircle className="w-4 h-4 mr-2" />
              Message Farmer
            </Button>
          </div>
        </div>

        {/* Products Section */}
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Farms Products</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 sm:gap-6">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group cursor-pointer hover:shadow-lg transition-shadow relative overflow-hidden"
              >
                <div className="relative">
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
                    <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
                  </button>
                  {!product.inStock && (
                    <Badge className="absolute top-3 left-3 bg-orange-100 text-orange-800 hover:bg-orange-100">
                      Out of Stock
                    </Badge>
                  )}
                </div>

                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">{product.distance}</p>
                  <p className="text-sm text-gray-600 mb-3">{product.availability}</p>

                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900">{product.price}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-gray-900">{product.rating}</span>
                      <span className="text-sm text-gray-600">({product.reviews})</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
