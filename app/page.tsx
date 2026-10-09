
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechStrip from "@/components/TechStrip";
import Advantage from "@/components/Advantage";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import CareerTimeline from "@/components/CareerTimeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <TechStrip />
        <Advantage />
        <Projects />
        <Skills />
        <CareerTimeline />
        <Contact />
      </main>

      <Footer />
    </>
  );
}