
import type { WebsiteContent } from "@/app/page";

type HeroProps = {
  content: WebsiteContent;
};

export default function Hero({ content }: HeroProps) {
  return (
    <section
      className="relative px-4 pt-4"
      style={{
        backgroundColor: "#020024",
        backgroundImage:
          "linear-gradient(219deg, rgba(5, 5, 10, 1) 50%, rgba(9, 9, 121, 1) 100%, rgba(35, 94, 232, 1) 100%)",
      }}
    >
      <div className="container overflow-hidden rounded-[2.4rem] text-white">
        {/* Hero content */}
        <div className="relative z-10 pb-16 pt-32">
          <div className="grid gap-12 pb-20 sm:pb-30 md:grid-cols-2">
            {/* Left */}
            <div>
              <h1 className="w-[65%] text-5xl font-medium md:text-7xl">
                {content.heroTitle}
              </h1>

              <div className="social-links mt-40 hidden items-center sm:flex">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-white"
                >
                  <img
                    src="/images/facebook-icon.png"
                    alt=""
                    className="h-5 w-5 object-scale-down"
                  />
                </a>

                <a
                  href="#"
                  aria-label="X"
                  className="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-white"
                >
                  <img
                    src="/images/x-ixon.webp"
                    alt=""
                    className="w-full object-scale-down"
                  />
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="mr-2 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white"
                >
                  <img
                    src="/images/linkedin-icon.png"
                    alt=""
                    className="w-full object-scale-down"
                  />
                </a>
              </div>
            </div>

            {/* Right */}
            <div className="sm:w-[80%]">
              <div>
                <p className="text-sm leading-6 text-white/60">
                  {content.heroDescription}
                </p>

                <a
                  href={content.heroButtonLink || "/about"}
                  className="mt-6 inline-flex rounded-full border border-white/20 px-4 py-2 text-xs transition hover:bg-white hover:text-black"
                >
                  {content.heroButtonText} →
                </a>
              </div>

              {/* Statistics */}
              <div className="mt-30 flex w-full justify-between border-t border-white/10 pt-8 sm:mt-45">
                <div className="w-[48%]">
                  <div className="text-5xl tracking-tight md:text-6xl">
                    {content.satisfaction}
                  </div>

                  <p className="mt-2 text-[10px] uppercase tracking-wider text-white/40">
                    Client satisfaction
                  </p>
                </div>

                <div className="w-[48%]">
                  <div className="text-5xl tracking-tight md:text-6xl">
                    {content.projectsCompleted}
                  </div>

                  <p className="mt-2 text-[10px] uppercase tracking-wider text-white/40">
                    Projects completed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}