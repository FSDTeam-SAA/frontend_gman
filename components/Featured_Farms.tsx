"use client"
import { useQuery } from "@tanstack/react-query"
import FarmsCard from "./sheard/FramsCarda"

 interface Farm {
  _id: string
  status: "approved" | "pending" | "rejected"
  name: string
  description: string
  images:[]
  videos: any[] // Update this if you have a specific structure for videos
  seller: string
  code: string
  location?: string
  review:[]
  rating?: number // Added since it's used in FarmsCard
  profileImage?: string // Added since it's used in FarmsCard
  createdAt: string
  updatedAt: string
  __v?: number
}


const Featured_Farms = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["farms"],
    queryFn: async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/all-farm`)
        if (!response.ok) {
          throw new Error("Failed to fetch farms")
        }
        return await response.json()
      } catch (err) {
        console.error("Error fetching farms:", err)
        // Return empty data instead of throwing to prevent rendering errors
        return { data: [] }
      }
    },
  })

  if (isLoading) {
    return (
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-[100px]">
        <h2 className="text-3xl text-[#272727] font-semibold mb-8">Featured Farms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="bg-gray-300 w-full h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px] rounded-[24px] sm:rounded-[28px] md:rounded-[32px]"></div>
              <div className="p-2 sm:p-3 md:p-4 lg:p-3 mt-4 sm:mt-5 md:mt-6">
                <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-2 mb-2">
                  <div className="bg-gray-300 rounded-full w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[55px] md:h-[55px] lg:w-[50px] lg:h-[50px]"></div>
                  <div className="flex-1">
                    <div className="bg-gray-300 h-4 rounded mb-1"></div>
                    <div className="bg-gray-300 h-3 rounded w-3/4"></div>
                  </div>
                </div>
                <div className="bg-gray-300 h-3 rounded mb-2"></div>
                <div className="bg-gray-300 h-3 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-[100px]">
        <h2 className="text-3xl text-[#272727] font-semibold mb-8">Featured Farms</h2>
        <div className="text-center py-12">
          <p className="text-red-600 text-lg">Error loading farms. Please try again later.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-[100px]">
      <div>
        <h2 className="text-3xl text-[#272727] font-semibold mb-8">Featured Farms</h2>

        {/* Grid layout for farm cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data?.data?.length > 0 ? (
            data.data.map((farm: any, index: number) => (
              <FarmsCard
                key={farm.id || `farm-${index}`}
                id={farm.id}
                name={farm.name || "Farm Name"}
                location={farm.location?.city || "Unknown city"}
                street={farm.location?.street || "Unknown street"}
                state={farm.location?.state || "Unknown state"}
                image={farm.images?.[0]?.url || "/placeholder.svg?height=260&width=320"}
                profileImage={farm.profileImage || "/placeholder.svg?height=260&width=320"}
                description={farm.description || "No description available"}
                rating={farm.rating || 0}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600 text-lg">No farms available at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Featured_Farms
