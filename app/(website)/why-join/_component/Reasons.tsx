
import Image from "next/image"

export default function Reasons() {
  const features = [
    {
      icon: "/asset/why_join1.png",
      title: "Narrative First",
      description:
        "Each project is documented as a clear story: problem, intent, and the interface decisions that followed.",
    },
    {
      icon: "/asset/why_join2.png",
      title: "NDA-Respectful",
      description:
        "Client work is anonymized and generalized so the thinking can be shared without exposing private details.",
    },
    {
      icon: "/asset/why_join3.png",
      title: "Systems Thinking",
      description:
        "Visual systems, modular components, and reusable patterns keep the work consistent and buildable.",
    },
    {
      icon: "/asset/why_join4.png",
      title: "Designed to Evolve",
      description:
        "The archive is updated with new experiments and case studies so the portfolio stays current.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 md:mt-[100px]">
      <div className=" ">
        <h2 className="text-xl sm:text-[24px] lg:text-[24px] font-bold text-[#272727] ">
          Reasons to work with Studio Signal.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mt-10">
        {features.map((feature, index) => {
          // const IconComponent = feature.icon
          return (
            <div key={index} className="flex flex-col shadow-lg p-6 rounded-lg ">
              <div className="w-16 h-16 sm:w-20 sm:h-20  ">
                <Image src={feature.icon} alt="Logo" width={100} height={100} />
              </div>

              <h3 className="text-[18px] sm:text-xl font-semibold text-[#272727] mt-[34px]">{feature.title}</h3>

              <p className="text-base sm:text-base text-[#595959] leading-[150%] mt-6">{feature.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
