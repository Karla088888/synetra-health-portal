import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { CatalogSection } from "@/components/CatalogSection";
import { AlliesSection } from "@/components/AlliesSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { ContactSection } from "@/components/ContactSection";
import { FooterSection } from "@/components/FooterSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Synetra Health — Consultoría en Soluciones Biomédicas a la Medida" },
      {
        name: "description",
        content:
          "Synetra Health es la consultora de referencia en simulación médica en México, con respaldo científico del ICAT-UNAM y validación clínica del Hospital General de México.",
      },
      { property: "og:title", content: "Synetra Health — Consultoría en Soluciones Biomédicas" },
      {
        property: "og:description",
        content:
          "Simulación médica, planeación prequirúrgica y tecnología biomédica desarrollada en México con respaldo ICAT-UNAM.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ProblemSection />
      <ServicesSection />
      <ProcessSection />
      <CatalogSection />
      <AlliesSection />
      <ComparisonSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
