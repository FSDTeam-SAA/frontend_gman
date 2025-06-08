import Image from "next/image"
import Link from "next/link"

export default function Blog() {
  // Blog post data
  const blogPosts = [
    {
      id: 1,
      title: "The Benefits of Organic Farming",
      date: "May 27, 2023",
      author: "Sarah Johnson",
      description:
        "Family-owned organic farm specializing in seasonal vegetables and herbs. Family-owned organic farm specializing in seasonal vegetables and herbs.",
      image: "/asset/blog1.jpg",
    },
    {
      id: 2,
      title: "The Benefits of Organic Farming",
      date: "May 27, 2023",
      author: "Sarah Johnson",
      description:
        "Family-owned organic farm specializing in seasonal vegetables and herbs. Family-owned organic farm specializing in seasonal vegetables and herbs.",
       image: "/asset/blog2.jpg",
    },
    {
      id: 3,
      title: "The Benefits of Organic Farming",
      date: "May 27, 2023",
      author: "Sarah Johnson",
      description:
        "Family-owned organic farm specializing in seasonal vegetables and herbs. Family-owned organic farm specializing in seasonal vegetables and herbs.",
     image: "/asset/blog1.jpg",
    },
    {
      id: 4,
      title: "The Benefits of Organic Farming",
      date: "May 27, 2023",
      author: "Sarah Johnson",
      description:
        "Family-owned organic farm specializing in seasonal vegetables and herbs. Family-owned organic farm specializing in seasonal vegetables and herbs.",
     image: "/asset/blog2.jpg",
    },
    {
      id: 5,
      title: "The Benefits of Organic Farming",
      date: "May 27, 2023",
      author: "Sarah Johnson",
      description:
        "Family-owned organic farm specializing in seasonal vegetables and herbs. Family-owned organic farm specializing in seasonal vegetables and herbs.",
     image: "/asset/blog1.jpg",
    },
    {
      id: 6,
      title: "The Benefits of Organic Farming",
      date: "May 27, 2023",
      author: "Sarah Johnson",
      description:
        "Family-owned organic farm specializing in seasonal vegetables and herbs. Family-owned organic farm specializing in seasonal vegetables and herbs.",
      image: "/asset/blog2.jpg",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8 mt-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="flex flex-col">
            <div className="relative w-full h-[250px] md:h-[330px] mb-4 rounded-[32px] overflow-hidden">
              <Image src={post.image} alt={post.title} fill className="object-cover w-full h-full" />
            </div>
            <div className="flex flex-col flex-1">
              <div className="text-base font-normal text-[#595959] mb-1">
                {post.date} · {post.author}
              </div>
              <h3 className="text-[18px] font-semibold text-[#272727] mb-2">{post.title}</h3>
              <p className="text-sm text-[#4B5563] mb-3 line-clamp-2">{post.description}</p>
              <div className="mt-auto">
                <Link
                  href={`/red-blog/${post.id}`}
                  className="text-[#039B06] hover:text-[#039B06]/80 text-base font-medium inline-flex items-center"
                >
                  Read More <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
