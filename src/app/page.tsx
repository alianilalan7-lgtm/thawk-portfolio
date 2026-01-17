import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutPortfolioSection from "@/components/AboutPortfolioSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutPortfolioSection />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
