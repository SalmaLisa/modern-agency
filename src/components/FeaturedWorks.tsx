
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import type { WebsiteContent } from "@/app/page";

type FeaturedWorksProps = {
  content: WebsiteContent;
};

export default function FeaturedWorks({
  content,
}: FeaturedWorksProps) {
  return (
    <section
      id="work"
      className="bg-white px-6 pb-20 pt-16 md:px-10"
    >
      <div className="container">
        {/* Heading */}
        <div className="mb-8 flex items-end justify-between border-t border-black/10 pt-10">
          <h2 className="text-5xl font-semibold tracking-tight">
            Featured{" "}
            <span className="font-serif font-normal italic text-blue-500">
              Works
            </span>
          </h2>

          <button
            type="button"
            className="hidden rounded-3xl border border-gray-300 px-4 py-2 text-[13px] hover:text-blue-500 md:block"
          >
            See All Projects →
          </button>
        </div>

        {/* Projects Slider */}
        {content.projects.length > 0 ? (
          <Swiper
            spaceBetween={24}
            slidesPerView={1.2}
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
              1280: {
                slidesPerView: 1.5,
              },
            }}
          >
            {content.projects.map((project, index) => (
              <SwiperSlide
                key={`${project.title}-${index}`}
              >
                <article>
                  <div className="group relative aspect-[1.35] overflow-hidden rounded-xl bg-gray-200">
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}

                    <span className="absolute left-5 top-5 text-xs text-white">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="mt-4 text-3xl font-medium text-blue-500">
                    {project.title}
                  </h3>

                  <p className="mt-1 text-[14px] text-black/40">
                    {project.category}
                  </p>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="py-10 text-sm text-gray-500">
            No projects have been added yet.
          </p>
        )}
      </div>
    </section>
  );
}