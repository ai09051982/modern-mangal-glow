import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import GallerySection from "@/components/GallerySection";
import LeadForm from "@/components/LeadForm";
import ContactsSection from "@/components/ContactsSection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => (
  <div className="min-h-screen bg-background font-body">
    <SiteHeader />
    <main>
      <HeroSection />
      <ProductsSection />
      <AdvantagesSection />
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <GallerySection />
          <LeadForm />
        </div>
      </section>
      <ContactsSection />
    </main>
    <SiteFooter />
  </div>
);

export default Index;
