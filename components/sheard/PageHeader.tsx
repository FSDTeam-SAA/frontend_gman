interface PageHeaderProps {
  titile?: string;
  subtitle?: string;
  imge?: string;
}
export default function PageHeader({ titile, subtitle, imge}: PageHeaderProps) {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[590px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('" + (imge ) + "')",
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-[#00730266]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            {titile }
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90  mx-auto font-normal max-[1000px] leading-relaxed">
            {subtitle}
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white/10 to-transparent" />
    </section>
  )
}
