import { ParticleCanvas } from "./ParticleCanvas";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleCanvas />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-primary/30 text-sm text-text-secondary mb-8"
          style={{ animation: "pulse-border 3s ease-in-out infinite" }}
        >
          <span className="text-cyan-primary">✦</span>
          <span>Transferencia Tecnológica ICAT-UNAM · Validación Clínica HGM</span>
        </div>

        {/* Headline */}
        <h1 className="font-syne font-extrabold text-foreground leading-[1.1] text-[42px] md:text-[76px] mb-6">
          Llevamos la ciencia
          <br />
          del laboratorio
          <br />
          <span className="text-gradient-cyan">al sistema de salud.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-text-secondary text-lg md:text-[19px] max-w-[620px] mx-auto mb-10 leading-relaxed font-dm">
          Synetra Health es la consultora especializada en simulación médica y soluciones biomédicas con respaldo científico del ICAT-UNAM. Trabajamos con hospitales, universidades y centros de formación para transformar cómo se entrena a los médicos del futuro.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#consultoria"
            className="inline-flex items-center h-12 px-8 rounded-xl bg-cyan-primary text-background font-semibold text-base transition-all duration-300 hover:brightness-110 shadow-[0_0_30px_rgba(0,180,216,0.2)]"
          >
            Conocer nuestros servicios
          </a>
          <a
            href="#catalogo"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-foreground transition-colors duration-300 text-base font-medium"
          >
            Ver catálogo de productos
            <span className="text-cyan-primary">→</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <ChevronDown
            className="text-cyan-primary/50 animate-bounce"
            size={28}
          />
        </div>
      </div>
    </section>
  );
}