import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedWorks from "@/components/FeaturedWorks";
import Services from "@/components/Services";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />
<Intro/>

      <FeaturedWorks />

      <Services />
    </main>
  );
}