import { ScrollReveal } from "./ScrollReveal";

const steps = [
  {
    num: "01",
    title: "DIAGNÓSTICO",
    desc: "Entendemos el estado actual de su institución, sus objetivos y sus restricciones reales.",
    time: "1–2 semanas",
  },
  {
    num: "02",
    title: "ESTRATEGIA",
    desc: "Co-diseñamos la solución: servicios, productos y hoja de ruta adaptada a su contexto.",
    time: "2–3 semanas",
  },
  {
    num: "03",
    title: "IMPLEMENTACIÓN",
    desc: "Ejecutamos junto a su equipo con metodología iterativa, medible y con entregables claros.",
    time: "4–12 semanas",
  },
  {
    num: "04",
    title: "ACOMPAÑAMIENTO",
    desc: "Soporte continuo, seguimiento de adopción y actualización ante cambios regulatorios.",
    time: "Ongoing",
  },
];

export function ProcessSection() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-foreground text-center mb-16">
            Cómo trabajamos
          </h2>
        </ScrollReveal>

        {/* Desktop timeline */}
        <div className="hidden md:grid grid-cols-4 gap-0 relative">
          <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-cyan-primary/0 via-cyan-primary/40 to-cyan-primary/0" />
          {steps.map((s, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="text-center relative pt-16">
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-cyan-primary bg-background z-10" />
                <span className="font-jetbrains text-cyan-primary text-sm font-medium">{s.num}</span>
                <h3 className="font-syne font-bold text-foreground text-base mt-2 mb-2 tracking-wide">
                  {s.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed font-dm px-2">{s.desc}</p>
                <p className="mt-3 text-xs text-text-muted font-jetbrains">⏱ {s.time}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile timeline */}
        <div className="md:hidden relative pl-8">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-cyan-primary/20" />
          {steps.map((s, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="relative pb-10">
                <div className="absolute left-[-21px] top-1 w-4 h-4 rounded-full border-2 border-cyan-primary bg-background" />
                <span className="font-jetbrains text-cyan-primary text-sm font-medium">{s.num}</span>
                <h3 className="font-syne font-bold text-foreground text-lg mt-1 mb-2">{s.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed font-dm">{s.desc}</p>
                <p className="mt-2 text-xs text-text-muted font-jetbrains">⏱ {s.time}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}