import { Compass, Brain, GraduationCap, Wrench } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const services = [
  {
    num: "01",
    icon: Compass,
    title: "Diagnóstico y Diseño de Centros de Simulación",
    desc: "Auditoría in situ del estado actual, plano funcional del centro, plan de equipamiento priorizado y hoja de ruta de adopción a 3 años. Entregable listo para presentar a dirección.",
    clients: "Universidades · Hospitales de enseñanza",
    tags: ["Auditoría", "Planeación", "Diseño"],
  },
  {
    num: "02",
    icon: Brain,
    title: "Planeación Prequirúrgica PlanSurg",
    desc: "Modelo 3D anatómico paciente-específico generado desde estudios DICOM (CT/MRI). Ensayo virtual del procedimiento y modelo físico imprimible para planeación y entrenamiento previo a cirugía.",
    clients: "Neurocirugía · Cardiología · Oncología quirúrgica",
    tags: ["3D", "DICOM", "Paciente-específico"],
  },
  {
    num: "03",
    icon: GraduationCap,
    title: "Capacitación e Instructores Certificados",
    desc: "Formación de instructores en simulación basada en evidencia, diseño de currículo procedimental y certificación institucional reconocida.",
    clients: "Sociedades médicas · Residencias · Programas académicos",
    tags: ["Certificación", "Currículo", "Evidencia"],
  },
  {
    num: "04",
    icon: Wrench,
    title: "Desarrollo a Medida (NRE)",
    desc: "Diseño y desarrollo de módulos de simulación para procedimientos específicos solicitados por el cliente. Alta complejidad técnica, máximo impacto clínico.",
    clients: "Industria farma/MedTech · Hospitales privados premium",
    tags: ["Custom", "I+D", "MedTech"],
  },
];

export function ServicesSection() {
  return (
    <section id="consultoria" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-syne font-bold text-4xl md:text-5xl text-foreground mb-4">
              Lo que hacemos
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto text-base md:text-lg font-dm">
              Cuatro líneas de servicio. Un objetivo: que su institución entrene mejor y decida mejor.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="group relative p-8 rounded-2xl border border-cyan-primary/10 bg-background hover:border-cyan-primary/40 hover:-translate-y-1.5 hover:shadow-[0_0_40px_rgba(0,180,216,0.08)] transition-all duration-300 h-full">
                <span className="absolute top-6 right-8 font-syne font-extrabold text-6xl text-cyan-primary/5 group-hover:text-cyan-primary/10 transition-colors">
                  {s.num}
                </span>
                <div className="relative z-10">
                  <div className="p-2.5 rounded-xl bg-cyan-primary/10 w-fit mb-5">
                    <s.icon size={22} className="text-cyan-primary" />
                  </div>
                  <h3 className="font-syne font-bold text-xl text-foreground mb-3">
                    {s.num} · {s.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4 font-dm">{s.desc}</p>
                  <p className="text-text-muted text-xs mb-3 font-dm">
                    <span className="text-text-accent font-medium">Clientes:</span> {s.clients}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs rounded-md border border-cyan-primary/20 text-cyan-primary/80 font-dm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}