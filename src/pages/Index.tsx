import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductCategories from "@/components/ProductCategories";
import AboutSection from "@/components/AboutSection";
import ContentSections from "@/components/ContentSections";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Header />
      <HeroSection />
      <ProductCategories />
      <AboutSection />
      <ContentSections />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
