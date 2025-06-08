import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BecomeSellerPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">Who should sign up to sell</h1>

        <div className="space-y-16">
          {/* Gardeners */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <Image
                src=""
                alt="Gardeners working in a garden"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-700">
                All gardeners, backyard gardeners, organic gardeners, anyone with a garden. Sign up is simple and free.
                Fill out the registration, add your pictures and you&apos;ll appear on the map for everyone to find you. Your
                exact address will never be made public.
              </p>
            </div>
          </div>

          {/* Bakers */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Freshly baked bread and pastries"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-700">
                Bakers, whether you&apos;re a small bakery or baking artisan baked goods from your kitchen, you&apos;re encouraged
                to sign up, and increase your sales.
              </p>
            </div>
          </div>

          {/* Preserves */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Jars of preserves and jams"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-700">
                Jam, jellies, preserves, canned goods with a profile on table fresh, you&apos;re neighbors, locals can find
                you. You can sell you products locally or ship nationwide, and it&apos;s free to join.
              </p>
            </div>
          </div>

          {/* Orchards */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Fruit orchard with lemons"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-700">
                Orchards apples, oranges, lemons, limes, pears, whatever you grow, you can sell and ship nationwide.
              </p>
            </div>
          </div>

          {/* Restaurants */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Restaurant chef preparing food"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-700">Restaurants and Caterers serving locally sourced products</p>
            </div>
          </div>

          {/* Other categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/placeholder.svg?height=250&width=350"
                alt="Smoked meats and fish"
                width={350}
                height={250}
                className="rounded-lg mb-4"
              />
              <p className="text-gray-700">Smoked meats and fish</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Image
                src="/placeholder.svg?height=250&width=350"
                alt="Fresh seafood"
                width={350}
                height={250}
                className="rounded-lg mb-4"
              />
              <p className="text-gray-700">Fresh seafood, oysters clams, shrimp, fish.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Image
                src="/placeholder.svg?height=250&width=350"
                alt="Dairy products"
                width={350}
                height={250}
                className="rounded-lg mb-4"
              />
              <p className="text-gray-700">Dairy products such as cheese, yogurt, kefir, homemade butter.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Image
                src="/placeholder.svg?height=250&width=350"
                alt="Fresh meats"
                width={350}
                height={250}
                className="rounded-lg mb-4"
              />
              <p className="text-gray-700">Fresh meats, next day shipping available.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/seller">
            <Button className="bg-green-600 hover:bg-green-700">Agree & Continue</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
