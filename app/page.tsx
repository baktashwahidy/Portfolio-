import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";
import { Hero } from "@/components/home/Hero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WorkSection } from "@/components/home/WorkSection";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
