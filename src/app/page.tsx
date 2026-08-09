import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Journey from "@/components/sections/Journey";
import Contact from "@/components/sections/Contact";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <ScrollReveal delay={100}>
        <Hero />
      </ScrollReveal>

      {/* ABOUT SECTION */}
      <ScrollReveal delay={150}>
        <About />
      </ScrollReveal>

      {/* EXPERIENCE SECTION */}
      <ScrollReveal delay={150}>
        <Experience />
      </ScrollReveal>

      {/* PROJECTS SECTION */}
      <ScrollReveal delay={150}>
        <Projects />
      </ScrollReveal>

      {/* EDUCATION / JOURNEY SECTION */}
      <ScrollReveal delay={150}>
        <Journey />
      </ScrollReveal>

      {/* CONTACT SECTION */}
      <ScrollReveal delay={150}>
        <Contact />
      </ScrollReveal>
    </div>
  );
}
