import { Hero } from "@/components/sections/Hero";
import { Ticker } from "@/components/sections/Ticker";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Ticker />
      <ServicesBento />
      <Projects />
      <Process />
      <Footer />
    </main>
  );
}
