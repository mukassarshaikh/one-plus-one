import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import Mission from "@/sections/Mission";
import Products from "@/sections/Products";
import HowItWorks from "@/sections/HowItWorks";
import Features from "@/sections/Features";
import Technology from "@/sections/Technology";
import WhyChooseUs from "@/sections/WhyChooseUs";
import Roadmap from "@/sections/Roadmap";
import Testimonials from "@/sections/Testimonials";
import FAQ from "@/sections/FAQ";
import ContactSection from "@/sections/ContactSection";

export default function Home() {
  return (
    <>
      {/* Sticky Header */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="flex-1">
        {/* Hero Section (Includes the interactive FamilyOS Showcase Mockup inside) */}
        <Hero />

        {/* Philosophy & Mission */}
        <Mission />

        {/* Product Suite */}
        <Products />

        {/* Interactive Ingestion & OCR Process Pipeline */}
        <HowItWorks />

        {/* Handcrafted Capabilities List */}
        <Features />

        {/* Zero-Knowledge Infrastructure Stack */}
        <Technology />

        {/* Strategic Comparison */}
        <WhyChooseUs />

        {/* Development Timelines */}
        <Roadmap />

        {/* High-Fidelity Testimonials */}
        <Testimonials />

        {/* Collapsible Accordion Support Desk */}
        <FAQ />

        {/* Waitlist Secure Enrollment Form */}
        <ContactSection />
      </main>

      {/* Structured Footer */}
      <Footer />
    </>
  );
}
