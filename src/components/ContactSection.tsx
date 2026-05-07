import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { Lock } from "lucide-react";

const helpOptions = [
  "Diagnóstico de centro de simulación",
  "PlanSurg",
  "Capacitación",
  "Desarrollo a medida",
  "Catálogo de productos",
  "No sé aún",
];

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contacto"
      className="py-24 md:py-32 relative"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(0,180,216,0.06) 0%, transparent 70%)",
      }}
    >
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-syne font-bold text-3xl md:text-5xl text-foreground leading-tight mb-4">
              Su institución forma
              <br />
              a los médicos del futuro.
              <br />
              <span className="text-gradient-cyan">Hágalo bien.</span>
            </h2>
            <p className="text-text-secondary font-dm text-base">
              Primera consulta sin costo · Respuesta en menos de 48 horas.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          {submitted ? (
            <div className="text-center py-16">
              <h3 className="font-syne font-bold text-2xl text-foreground mb-3">¡Gracias!</h3>
              <p className="text-text-secondary font-dm">
                Hemos recibido su mensaje. Un especialista se comunicará con usted en menos de 48 horas.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  required
                  type="text"
                  placeholder="Nombre completo"
                  className="w-full px-4 py-3 rounded-xl bg-bg-elevated border border-cyan-primary/10 text-foreground placeholder:text-text-muted text-sm font-dm focus:outline-none focus:border-cyan-primary/40 transition-colors"
                />
                <input
                  required
                  type="text"
                  placeholder="Institución"
                  className="w-full px-4 py-3 rounded-xl bg-bg-elevated border border-cyan-primary/10 text-foreground placeholder:text-text-muted text-sm font-dm focus:outline-none focus:border-cyan-primary/40 transition-colors"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  required
                  type="text"
                  placeholder="Cargo"
                  className="w-full px-4 py-3 rounded-xl bg-bg-elevated border border-cyan-primary/10 text-foreground placeholder:text-text-muted text-sm font-dm focus:outline-none focus:border-cyan-primary/40 transition-colors"
                />
                <input
                  required
                  type="email"
                  placeholder="Email institucional"
                  className="w-full px-4 py-3 rounded-xl bg-bg-elevated border border-cyan-primary/10 text-foreground placeholder:text-text-muted text-sm font-dm focus:outline-none focus:border-cyan-primary/40 transition-colors"
                />
              </div>
              <select
                required
                className="w-full px-4 py-3 rounded-xl bg-bg-elevated border border-cyan-primary/10 text-foreground text-sm font-dm focus:outline-none focus:border-cyan-primary/40 transition-colors appearance-none"
                defaultValue=""
              >
                <option value="" disabled>
                  ¿En qué podemos ayudarle?
                </option>
                {helpOptions.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
              <textarea
                rows={4}
                placeholder="Cuéntenos sobre su institución y sus retos"
                className="w-full px-4 py-3 rounded-xl bg-bg-elevated border border-cyan-primary/10 text-foreground placeholder:text-text-muted text-sm font-dm focus:outline-none focus:border-cyan-primary/40 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full h-14 rounded-2xl bg-cyan-primary text-background font-syne font-bold text-base transition-all duration-300 hover:brightness-110 shadow-[0_0_30px_rgba(0,180,216,0.2)] relative overflow-hidden group"
              >
                <span className="relative z-10">Quiero hablar con un especialista →</span>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)",
                    backgroundSize: "200% 100%",
                    animation: "shimmer 1.5s infinite",
                  }}
                />
              </button>
              <p className="text-center text-text-muted text-xs font-dm flex items-center justify-center gap-1.5">
                <Lock size={12} />
                Toda la información es confidencial · Sin compromiso · Solo instituciones del sector salud
              </p>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}