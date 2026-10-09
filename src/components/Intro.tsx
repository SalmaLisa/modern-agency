import Image from "next/image";
import type { WebsiteContent } from "@/app/page";

type IntroProps = {
content: WebsiteContent;
};

export default function Intro({ content }: IntroProps) {
return ( <section
   id="about"
   className="relative z-20 mx-auto -mt-20 px-4"
 > <div className="container rounded-[20px] bg-white px-6 py-8 md:px-15 md:py-10">

    {/* Highlights */}
    <div className="grid grid-cols-1 gap-2 border-b border-black/10 pb-6 text-[12px] font-extrabold uppercase tracking-wide sm:grid-cols-3">
      <span>{content.feature1}</span>

      <span className="sm:text-center">
        {content.feature2}
      </span>

      <span className="sm:text-right">
        {content.feature3}
      </span>
    </div>

    {/* About and founders */}
    <div className="py-10 sm:flex sm:justify-between sm:gap-10">

      {/* Founder images */}
      <div className="sm:w-80">
        <div className="flex -space-x-3">

          <div className="flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-full bg-gray-100">
            {content.founderImage1 && (
              <img
                src={content.founderImage1}
                alt="Founder"
                className="h-full w-full object-cover"
              />
            )}
          </div>

          <div className="flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-full bg-gray-100">
            {content.founderImage2 && (
              <img
                src={content.founderImage2}
                alt="Founder"
                className="h-full w-full object-cover"
              />
            )}
          </div>

        </div>

        <p className="mt-3 text-[10px] font-semibold uppercase text-black/50">
          Founders of
          <br />
          Hubfolio
        </p>
      </div>

      {/* About content */}
      <div className="mt-6 w-full sm:mt-0 sm:max-w-[560px]">

        <h2 className="text-xl font-semibold leading-tight md:text-2xl lg:text-[32px]">
          {content.aboutTitle}
        </h2>

        {content.aboutDescription && (
          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            {content.aboutDescription}
          </p>
        )}

        <a
          href={content.aboutButtonLink || "/about"}
          className="mt-6 inline-flex items-center rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-700"
        >
          {content.aboutButtonText} →
        </a>

      </div>
    </div>

    {/* Awards and recognition */}
    {content.awards.length > 0 && (
      <div className="overflow-hidden py-12 md:py-20">
        <div className="flex flex-wrap justify-center md:flex-nowrap">

          {content.awards.map((item, index) => (
            <div
              key={`${item.description}-${index}`}
              className={`relative mb-4 flex h-[180px] w-[180px] flex-col items-center justify-center rounded-full border border-[#ECECEC] bg-white text-center transition-all duration-300 hover:z-10 hover:border-black hover:shadow-xl sm:h-[220px] sm:w-[220px] lg:h-[280px] lg:w-[280px] ${
                index !== 0 ? "md:-ml-10 lg:-ml-14" : ""
              }`}
            >

              {item.image && (
                <div className="relative mb-4 h-[50px] w-[50px] sm:h-[70px] sm:w-[70px] lg:mb-8 lg:h-[80px] lg:w-[80px]">
                  <Image
                    src={item.image}
                    alt={item.description || "Award"}
                    fill
                    unoptimized
                    className="object-contain"
                    sizes="(min-width: 1024px) 80px, (min-width: 640px) 70px, 50px"
                  />
                </div>
              )}

              <p className="max-w-[120px] text-[11px] font-semibold leading-relaxed text-[#616060] sm:max-w-[140px] sm:text-[13px] lg:max-w-[160px] lg:text-[15px]">
                {item.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    )}

  </div>
</section>

);
}
