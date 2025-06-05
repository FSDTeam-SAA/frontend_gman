"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Testimonial data
const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "I've been ordering from TABLEFRESH for over year now, and the quality of their organic produce is consistently excellent. The convenience of having fresh, organic food delivered to my door has made healthy eating so much easier for my family.",
    author: "Sarah Johnson",
    location: "Portland, OR",
    avatar: "/asset/profile1.png",
  },
  {
    id: 2,
    rating: 5,
    text: "The freshness and quality of the vegetables from TABLEFRESH is unmatched. I love supporting local farmers while getting the best produce delivered right to my doorstep. Highly recommend!",
    author: "Michael Chen",
    location: "Seattle, WA",
    avatar: "/asset/profile1.png",
  },
  {
    id: 3,
    rating: 5,
    text: "As a busy mom, TABLEFRESH has been a lifesaver. The organic fruits and vegetables are always fresh, and the delivery is reliable. My kids love the variety of seasonal produce we get.",
    author: "Emily Rodriguez",
    location: "San Francisco, CA",
    avatar: "/asset/profile1.png",
  },
  {
    id: 4,
    rating: 4,
    text: "Outstanding service and quality! The subscription model works perfectly for our family's needs, and we've discovered so many new vegetables we never tried before.",
    author: "David Thompson",
    location: "Austin, TX",
    avatar: "/asset/profile1.png",
  },
  {
    id: 5,
    rating: 5,
    text: "TABLEFRESH has transformed how we eat. The organic produce is always perfectly ripe and delicious. The packaging is eco-friendly too, which aligns with our values.",
    author: "Lisa Park",
    location: "Denver, CO",
    avatar: "/asset/profile1.png",
  },
];

export default function TestimonialCarousel() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-semibold text-[#272727]">What Our Customers Say</h2>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <div className="flex justify-end gap-2 mt-4">
          <CarouselPrevious className="h-9 w-9 rounded-md border border-green-500 flex items-center justify-center text-green-500 hover:bg-green-50 static" />
          <CarouselNext className="h-9 w-9 rounded-md border border-green-500 flex items-center justify-center text-green-500 hover:bg-green-50 static" />
        </div>
        <CarouselContent className="-ml-4">
          {testimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial.id}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <div className="h-full">
                <Card className="border rounded-lg p-6 h-full">
                  <CardContent className="p-0 space-y-4 flex flex-col h-full">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-base text-[#272727] font-normal leading-[150%] flex-grow">
                      {testimonial.text}
                    </p>
                    <div className="flex items-center gap-3 mt-auto">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-medium text-sm">
                          {testimonial.author}
                        </p>
                        <p className="text-xs text-gray-500">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
