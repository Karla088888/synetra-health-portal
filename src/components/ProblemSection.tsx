import { AlertTriangle, Building, ClipboardList } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const problems = [
  {
    icon: AlertTriangle,
    title: "Inversión sin diagnóstico",
    desc: "Se compran equipos y se diseñan espacios sin auditoría previa ni plan de adopción.",
  },
  {
    icon: Building,
    title: "Centros mal estructurados",
    desc: "Las instalaciones no responden al currículo clínico real ni al flujo operativo de la institución.",
  },
  {
    icon: ClipboardList,
    title: "Brecha de entrenamiento",
    desc: "El 70% de los residentes en México nunca practica de forma autónoma antes de enfrentarse a un paciente real.",
  },
];

export function ProblemSection() {
  return (
    <section id="nosotros" className="bg-surface py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <ScrollReveal>
            <div>
              <h2 className="font-syne font-bold text-3xl md:text-[48px] leading-[1.15] text-foreground mb-6">
                México tiene el conocimiento.
                <br />
                <span className="text-text-secondary">
                  Le falta la infraestructura para usarlo bien.
                </span>
              </h2>
              <p className="text-text-secondary leading-relaxed text-base md:text-lg mb-4 font-dm">
                Los hospitales y universidades invierten en simulación médica sin diagnóstico previo, sin metodología y sin el respaldo científico necesario para hacerlo bien. El resultado: equipos subutilizados, residentes sin práctica real y recursos desperdiciados.
              </p>
              <p className="text-text-secondary leading-relaxed text-base md:text-lg font-dm">
                <span className="text-foreground font-semibold">Synetra Health existe para cambiar eso</span> — con la autoridad técnica del ICAT-UNAM y experiencia clínica real del Hospital General de México.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-5">
            {problems.map((p, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="p-6 rounded-xl border border-cyan-primary/10 bg-background/50 hover:border-cyan-primary/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-cyan-primary/10">
                      <p.icon size={20} className="text-cyan-primary" />
                    </div>
                    <div>
                      <h3 className="font-syne font-bold text-foreground text-lg mb-1">{p.title}</h3>
                      <p className="text-text-secondary text-sm leading-relaxed font-dm">{p.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}