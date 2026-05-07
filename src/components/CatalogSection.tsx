import { ScrollReveal } from "./ScrollReveal";
import { ArrowRight } from "lucide-react";

export function CatalogSection() {
  return (
    <section id="catalogo" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-syne font-bold text-4xl md:text-5xl text-foreground mb-4 leading-tight">
              Tecnología biomédica
              <br />
              <span className="text-gradient-cyan">desarrollada en México.</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-base md:text-lg font-dm">
              Synetra Health no solo asesora — también desarrolla. Nuestro catálogo de productos propios nace del laboratorio del ICAT-UNAM y se valida en entornos clínicos reales.
            </p>
          </div>
        </ScrollReveal>

        {/* Main product card */}
        <ScrollReveal>
          <div className="relative p-8 md:p-12 rounded-2xl border border-cyan-primary/40 bg-background glow-cyan mb-8">
            <div className="absolute top-6 right-8">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-primary/20 text-cyan-primary border border-cyan-primary/30">
                Disponible
              </span>
            </div>
            <h3 className="font-syne font-extrabold text-2xl md:text-3xl text-foreground mb-1 tracking-tight">
              SONOSIM
            </h3>
            <p className="text-cyan-primary font-dm font-medium text-base mb-2">
              Simulador de Ultrasonido Médico de Alta Fidelidad
            </p>
            <p className="text-text-muted text-xs font-jetbrains mb-6 tracking-wider">
              Desarrollado en el Laboratorio Nacional MADiT · ICAT-UNAM
            </p>
            <p className="text-text-secondary text-base leading-relaxed max-w-3xl font-dm mb-6">
              SonoSim es un maniquí instrumentado que replica con precisión la respuesta acústica del cuerpo humano para entrenamiento en ultrasonido de punto de atención (POCUS). Compatible con transductores convex, lineal y phased array. Validado clínicamente en el Hospital General de México. Manufactura aditiva de alta precisión · Materiales de grado clínico.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["POCUS", "Alta fidelidad", "ICAT-UNAM", "Validación clínica"].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs rounded-md border border-cyan-primary/20 text-cyan-primary/80 font-dm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 text-cyan-primary font-semibold text-base hover:gap-3 transition-all duration-300"
            >
              Solicitar demostración <ArrowRight size={18} />
            </a>
          </div>
        </ScrollReveal>

        {/* Coming soon cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2].map((n) => (
            <ScrollReveal key={n} delay={n * 100}>
              <div className="p-8 rounded-2xl border border-cyan-primary/8 bg-background/50">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-text-muted border border-cyan-primary/10">
                  Próximamente
                </span>
                <h4 className="font-syne font-bold text-foreground text-lg mt-4 mb-1">
                  NUEVO PRODUCTO
                </h4>
                <p className="text-text-muted text-sm font-jetbrains mb-4">En desarrollo · MADiT Lab</p>
                <a
                  href="#contacto"
                  className="text-sm text-text-secondary hover:text-cyan-primary transition-colors font-dm"
                >
                  Registrarse para actualizaciones
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="text-center text-text-muted text-sm mt-10 italic font-dm">
            "Nuestro catálogo crece con cada engagement. Cada proyecto de consultoría alimenta el desarrollo del siguiente producto."
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}