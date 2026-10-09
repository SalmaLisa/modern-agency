import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedWorks from "@/components/FeaturedWorks";
import Services from "@/components/Services";
import Intro from "@/components/Intro";

const API_URL =
process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export type Project = {
title: string;
year: string;
category: string;
image: string;
};

export type Service = {
title: string;
description: string;
};

export type Award = {
image: string;
description: string;
};

export type WebsiteContent = {
heroTitle: string;
heroDescription: string;
heroButtonText: string;
heroButtonLink: string;
satisfaction: string;
projectsCompleted: string;
feature1: string;
feature2: string;
feature3: string;
founderImage1: string;
founderImage2: string;
aboutTitle: string;
aboutDescription: string;
aboutButtonText: string;
aboutButtonLink: string;
awards: Award[];
projects: Project[];
servicesTitle: string;
servicesDescription: string;
services: Service[];
};

const defaultContent: WebsiteContent = {
heroTitle: "Bigger, Bolder and Better",
heroDescription:
"Based in San Francisco, we're a digital product design & development studio that specializes in creating digital experiences.",
heroButtonText: "Learn more",
heroButtonLink: "/about",
satisfaction: "95%",
projectsCompleted: "125+",
feature1: "Top-notch Experts",
feature2: "Dedicated Support 24/7",
feature3: "Flexible Pricing",
founderImage1: "",
founderImage2: "",
aboutTitle:
"We help business elevate their value through custom software development, product design, QA and consulting services.",
aboutDescription:
"We combine strategy, design and technology to build digital experiences that help businesses grow.",
aboutButtonText: "View about us",
aboutButtonLink: "/about",
awards: [],
projects: [],
servicesTitle: "Our Services",
servicesDescription:
"We create memorable websites, digital products and experiences.",
services: [],
};

async function getWebsiteContent(): Promise<WebsiteContent> {
try {
const response = await fetch(
`${API_URL}/api/website-content`,
{ cache: "no-store" }
);


if (!response.ok) {
  throw new Error("Failed to fetch website content");
}

const data = await response.json();

return data
  ? { ...defaultContent, ...data }
  : defaultContent;


} catch (error) {
console.error("Error loading homepage content:", error);
return defaultContent;
}
}

export default async function Home() {
const content = await getWebsiteContent();

return ( <main> <Navbar />


  <Hero content={content} />

  <Intro content={content} />

  <FeaturedWorks content={content} />

  <Services content={content} />
</main>

);
}
