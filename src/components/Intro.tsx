import Image from "next/image";
import { awards } from "@/data/awards";

export default function Intro() {
  return (
    <section
      id="about"
      className="relative z-20 mx-auto -mt-20 px-4"
    >
      <div className="container rounded-[20px] bg-white px-6 py-8 md:px-15 md:py-10">
        {/* Top information */}
        <div
          className="
            grid
            grid-cols-1
            gap-2
            border-b
            border-black/10
            pb-6
            text-[12px]
            font-extrabold
            uppercase
            tracking-wide
            sm:grid-cols-3
          "
        >
          <span>Top-notch Experts</span>

          <span className="sm:text-center">
            Dedicated Support 24/7
          </span>

          <span className="sm:text-right">
            Flexible Pricing
          </span>
        </div>

        {/* Main introduction */}
        <div className="py-10 sm:flex sm:justify-between sm:gap-10">
          {/* Founder */}
          <div className="sm:w-80">
            <div className="flex -space-x-3">
              <div className="flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-full">
                <img
                  src="/images/founder.webp"
                  alt="Founder"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-full">
                <img
                  src="/images/founder-2.png"
                  alt="Founder"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <p className="mt-3 text-[10px] font-semibold uppercase text-black/50">
              Founders of
              <br />
              Hubfolio
            </p>
          </div>

          {/* Text */}
          <div className="mt-6 w-full sm:mt-0 sm:max-w-[560px]">
            <h2 className="text-xl font-semibold leading-tight md:text-2xl lg:text-[32px]">
              We help business elevate their value through custom software
              development, product design, QA and consulting services.
            </h2>

            <a
              href="#"
              className="
                mt-6
                inline-flex
                items-center
                rounded-full
                bg-blue-600
                px-5
                py-3
                text-sm
                font-medium
                text-white
                transition-all
                duration-300
                hover:bg-blue-700
              "
            >
              View about us →
            </a>
          </div>
        </div>

        {/* Awards */}
        <div className="overflow-hidden py-12 md:py-20">
          <div className="flex flex-wrap justify-center md:flex-nowrap">
            {awards.map((item, index) => (
              <div
                key={index}
                className={`
                  relative
                  mb-4
                  flex
                  h-[180px]
                  w-[180px]
                  flex-col
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#ECECEC]
                  bg-white
                  text-center
                  transition-all
                  duration-300
                  hover:z-10
                  hover:border-black
                  hover:shadow-xl

                  sm:h-[220px]
                  sm:w-[220px]

                  lg:h-[280px]
                  lg:w-[280px]

                  ${
                    index !== 0
                      ? "md:-ml-10 lg:-ml-14"
                      : ""
                  }
                `}
              >
                <div className="relative mb-4 h-[50px] w-[50px] sm:h-[70px] sm:w-[70px] lg:mb-8 lg:h-[80px] lg:w-[80px]">
                  <Image
                    src={item.icon}
                    alt={item.text}
                    fill
                    className="object-contain"
                  />
                </div>

                <p className="max-w-[120px] text-[11px] font-semibold leading-relaxed text-[#616060] sm:max-w-[140px] sm:text-[13px] lg:max-w-[160px] lg:text-[15px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}