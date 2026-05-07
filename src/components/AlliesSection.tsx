import { ScrollReveal } from "./ScrollReveal";
import icatLogo from "@/assets/icat-unam-logo.png";
import hgmLogo from "@/assets/hgm-logo.png";

const allies = [
  {
    logo: icatLogo,
    name: "ICAT-UNAM",
    fullName: "Instituto de Ciencias Aplicadas y Tecnología",
    desc: "Cuna de Synetra Health. El Laboratorio Nacional de Manufactura Aditiva y Digital (MADiT) del ICAT es donde se investiga, desarrolla y manufactura nuestra tecnología biomédica. Más de 8 años de investigación en bioinstrumentación y 13+ publicaciones indexadas respaldan cada solución.",
  },
  {
    logo: hgmLogo,
    name: "Hospital General de México",
    fullName: "Dr. Eduardo Liceaga",
    desc: "Socio clínico de validación. Los productos y servicios de Synetra Health se validan con residentes y especialistas del HGM e INNN en condiciones reales de práctica clínica. Neurocirugía, urgencias y medicina interna.",
  },
];

export function AlliesSection() {
  return (
    <section id="aliados" className="bg-surface py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-syne font-bold text-3xl md:text-5xl text-foreground mb-4 leading-tight">
              El respaldo científico que
              <br />
              <span className="text-text-secondary">ninguna consultora privada puede replicar.</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto text-base md:text-lg font-dm">
              Synetra Health opera con la autoridad técnica de las instituciones más rigurosas de México.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {allies.map((a, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="p-8 rounded-2xl border border-cyan-primary/10 bg-background/50 h-full">
                <div className="h-20 flex items-center mb-6">
                  <img
                    src={a.logo}
                    alt={a.name}
                    className="h-16 object-contain rounded bg-white p-2"
                  />
                </div>
                <h3 className="font-syne font-bold text-xl text-foreground mb-1">{a.name}</h3>
                <p className="text-cyan-primary text-sm font-dm font-medium mb-4">{a.fullName}</p>
                <p className="text-text-secondary text-sm leading-relaxed font-dm">{a.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="text-center text-text-muted text-sm mt-12 italic font-dm">
            "Synetra Health es donde la ciencia del ICAT-UNAM encuentra el sistema de salud."
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}