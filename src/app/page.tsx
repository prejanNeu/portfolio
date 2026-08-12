import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Journey from "@/components/sections/Journey";
import BlogPreview from "@/components/sections/BlogPreview";
import Contact from "@/components/sections/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prejan Neupane — Django & Full-stack Developer",
  description:
    "Portfolio of Prejan Neupane, a Django and full-stack developer from Nepal. Backend systems, APIs, and modern web apps.",
  alternates: {
    canonical: "https://prejanneupane.com.np",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Journey />
      <BlogPreview />
      <Contact />
    </>
  );
}
