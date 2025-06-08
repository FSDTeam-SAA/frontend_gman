import type React from "react"
import { MapPin, MessageCircle, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface FarmsCardProps {
  id: number
  name: string
  location: string
  image: string
  profileImage: string
  description: string
  rating: number
}

const FarmsCard: React.FC<FarmsCardProps> = ({ id, name, location, image, profileImage, description, rating }) => {
  return (
    <div className="w-full ">
      {/* Main Farm Image */}
      <div className="w-full relative">
          <div className="bg-white w-[50px] h-[50px] rounded-full absolute top-4 right-4 flex items-center justify-center shadow-lg cursor-pointer">
                  <MessageCircle className=" text-" />
              </div>
        <Image
          src={image || "/placeholder.svg?height=180&width=320&query=farm field with workers" || "/placeholder.svg"}
            width={1000}
            height={1000}
          alt={name}
          className="w-full h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px] object-cover rounded-[24px] sm:rounded-[28px] md:rounded-[32px]"
        />
      </div>

      {/* Content Section */}
      <div className="p-2 sm:p-3 md:p-4 lg:p-3 relative mt-4 sm:mt-5 md:mt-6">
        {/* Farm Details */}
        <div className="space-y-1 sm:space-y-1.5 md:space-y-2 lg:space-y-1">
          <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-2">
            <div className="rounded-full overflow-hidden w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[55px] md:h-[55px] lg:w-[50px] lg:h-[50px] flex-shrink-0">
            
              <Image
                width={1000}
                height={1000}
                src={profileImage || "/placeholder.svg?height=32&width=32&query=farm logo" || "/placeholder.svg"}
                alt={`${name} profile`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-[18px] font-semibold text-[#272727] truncate">
                {name}
              </h3>
              <div className="flex items-center gap-1">
                <span>
                  <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-3 lg:h-3 flex-shrink-0" />
                </span>
                <p className="text-sm sm:text-base md:text-lg lg:text-base text-[#595959] font-normal truncate">
                  {location}
                </p>
              </div>
            </div>
          </div>

          <p className="text-sm sm:text-base md:text-lg lg:text-base text-[#4B5563] mt-2 sm:mt-2.5 md:mt-3 leading-[120%] line-clamp-2 sm:line-clamp-3">
            {description}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2 sm:mt-2.5 md:mt-3">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-5 lg:h-5 fill-[#FACC15] text-[#FACC15]" />
            <span className="text-sm sm:text-base md:text-lg lg:text-base font-medium text-[#000000]">
              {rating.toFixed(1)} {"(127)"}
            </span>
          </div>

          {/* View Button */}
          <div className="mt-2 sm:mt-2.5 md:mt-3">
            <Link
              href={`/farms/${id}`}
              className="text-sm sm:text-base md:text-lg lg:text-base text-[#039B06] font-medium flex items-center hover:text-[#027A04] transition-colors"
            >
              View Farms →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FarmsCard
