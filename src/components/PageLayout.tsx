import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
}

const PageLayout = ({ children, title }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Header />
      <main className="pt-24 md:pt-28 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-3xl md:text-5xl font-bold text-center mb-12">
            <span className="text-gradient-fire">{title}</span>
          </h1>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
