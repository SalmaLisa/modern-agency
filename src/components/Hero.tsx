export default function Hero() {
  return (
 <section
  className="relative px-4 pt-4"
  style={{
    backgroundColor: "#020024",
    backgroundImage:
      "linear-gradient(219deg, rgba(5, 5, 10, 1) 50%, rgba(9, 9, 121, 1) 100%, rgba(35, 94, 232, 1) 100%)",
  }}
>

      <div
        className="
        container           
          overflow-hidden
          rounded-[2.4rem]          
          text-white
        "
      >

      

        {/* Hero content */}
        <div className="relative z-10 pb-16 pt-32">

          <div className="grid gap-12 md:grid-cols-2 sm-pb-30 pb-20">

            {/* Left */}
            <div>
              <h1
                className="
                  w-[65%]
                  text-5xl
                  font-medium                 
                  md:text-7xl
                "
              >
                Bigger,
                <br />
                Bolder and
                <br />
                <span className="font-serif italic font-normal">
                  Better
                </span>
              </h1>

              <div className="social-links flex mt-40 hidden sm-block">
                <a href="" className=" flex justify-center items-center w-10 h-10 rounded-full bg-white mr-2"> <img src="/images/facebook-icon.png" alt="" className=" w-5 h-5 object-scale-down"/></a>
                <a href="" className="  flex justify-center items-center w-10 h-10 rounded-full bg-white mr-2"> <img src="/images/x-ixon.webp" alt=""  className=" w-full object-scale-down"/></a>
                <a href="" className=" flex justify-center items-center w-10 h-10 rounded-full bg-white overflow-clip mr-2"> <img src="/images/linkedin-icon.png" alt=""  className="w-full object-scale-down"/></a>
              </div>
            </div>

            {/* Right */}
            <div className="sm-w-[80%]">

              <div className="">

                <p className="text-sm leading-6 text-white/60">
                  Based in San Francisco, we're a digital product design
                  & development studio that specialize with the creation
                  high applicability of digital experiences.
                </p>

                <button
                  className="
                    mt-6
                    rounded-full
                    border border-white/20
                    px-4 py-2
                    text-xs
                    transition
                    hover:bg-white
                    hover:text-black
                  "
                >
                  Learn more →
                </button>

              </div>
               <div className="sm-mt-45 mt-30 w-full flex justify-between border-t border-white/10 pt-8">

            <div className="w-[48%]">
              <div className="text-5xl tracking-tight md:text-6xl">
                95%
              </div>

              <p className="mt-2 text-[10px] uppercase tracking-wider text-white/40">
                Clients satisfaction
              </p>
            </div>

            <div className="w-[48%]">
              <div className="text-5xl tracking-tight md:text-6xl">
                125+
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