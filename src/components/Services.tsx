import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="
        bg-black
        px-5
        py-16
        text-white
        md:px-10
        md:py-24
      "
    >
      <div className="container">
        {/* Heading */}
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <h2 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
            Our{" "}
            <span className="font-serif italic text-blue-500">
              Services
            </span>
          </h2>

          <a
            href="#"
            className="
              inline-flex
              w-fit
              items-center
              rounded-full
              border
              border-white/20
              px-4
              py-2
              text-sm
              transition-all
              duration-300
              hover:text-blue-500
            "
          >
            See Our Expertise →
          </a>
        </div>

        {/* Services List */}
        <div>
          {services.map((service) => (
            <div
              key={service.number}
              className="
                group
                border-t
                border-white/10
                py-6
                md:grid
                md:grid-cols-[1fr_260px_60px]
                md:gap-8
                md:py-8
              "
            >
              {/* Number */}
              <span className="mb-3 block text-xs tracking-wider text-white/30 md:order-3 md:mb-0 md:text-right">
                {service.number}
              </span>

              {/* Title */}
              <h3
                className="
                  mb-3
                  text-3xl
                  font-medium
                  tracking-tight
                  transition-colors
                  duration-300
                  group-hover:text-blue-500
                  sm:text-4xl
                  md:order-1
                  md:mb-0
                  md:text-5xl
                  lg:text-6xl
                "
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="
                  text-sm
                  leading-6
                  text-white/50
                  md:order-2
                  md:pr-8
                "
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}