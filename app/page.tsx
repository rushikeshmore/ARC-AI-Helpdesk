import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Problems } from "@/components/sections/Problems";
import { DiscoveryEngine } from "@/components/sections/DiscoveryEngine";
import { Features } from "@/components/sections/Features";
import { FAQ } from "@/components/sections/FAQ";
import { EarlyAccess } from "@/components/sections/EarlyAccess";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navigation />
      <main>
        <Hero />
        <Problems />
        <DiscoveryEngine />
        <Features />
        <FAQ />
        <EarlyAccess />
      </main>
      <Footer />
    </div>
  );
}
