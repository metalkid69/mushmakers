import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductSection } from "@/components/ProductSection";
import { RecipesPreview } from "@/components/RecipesPreview";
import { Features } from "@/components/Features";
import { FarmingProcess } from "@/components/FarmingProcess";
import { DeliveryInfo } from "@/components/DeliveryInfo";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar />
      <Hero />
      <Features />
      <ProductSection />
      <RecipesPreview />
      <FarmingProcess />
      <DeliveryInfo />
      <Footer />
    </main>
  );
}
