import { ScrollReveal } from "./ScrollReveal";
import { Check, X, Minus } from "lucide-react";

const rows = [
  { cap: "Respaldo científico UNAM", gen: "no", prov: "no", syn: "ICAT-UNAM" },
  { cap: "Validación clínica local HGM", gen: "no", prov: "no", syn: "✓" },
  { cap: "Tecnología biomédica propia", gen: "no", prov: "Parcial", syn: "Desarrollada en México" },
  { cap: "Diagnóstico independiente", gen: "Parcial", prov: "Conflicto de interés", syn: "Objetivo" },
  { cap: "Modelo 3D paciente-específico", gen: "no", prov: "no", syn: "PlanSurg" },
  { cap: "Soporte y capacitación local", gen: "no", prov: "no", syn: "✓" },
  { cap: "Metodología publicada", gen: "no", prov: "no", syn: "13+ papers" },
];

function CellIcon({ val }: { val: string }) {
  if (val === "no") return <X size={16} className="text-text-muted/50 mx-auto" />;
  if (val === "Parcial" || val === "Conflicto de interés")
    return <span className="text-text-muted text-xs">{val}</span>;
  return null;
}

export function ComparisonSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="font-syne font-bold text-3xl md:text-5xl text-foreground text-center mb-16">
            La diferencia que no se puede fabricar.
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="overflow-x-auto rounded-2xl border border-cyan-primary/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-cyan-primary/10">
                  <th className="text-left p-4 text-text-muted font-dm font-medium">Capacidad</th>
                  <th className="p-4 text-text-muted font-dm font-medium text-center">Consultora General</th>
                  <th className="p-4 text-text-muted font-dm font-medium text-center">Proveedor de Equipo</th>
                  <th className="p-4 text-cyan-primary font-syne font-bold text-center bg-cyan-primary/5 border-l-[3px] border-cyan-primary">
                    Synetra Health
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} className="border-b border-cyan-primary/5 last:border-0">
                    <td className="p-4 text-text-secondary font-dm">{r.cap}</td>
                    <td className="p-4 text-center">
                      <CellIcon val={r.gen} />
                    </td>
                    <td className="p-4 text-center">
                      <CellIcon val={r.prov} />
                    </td>
                    <td className="p-4 text-center bg-cyan-primary/5 border-l-[3px] border-cyan-primary">
                      <span className="text-cyan-primary font-medium text-xs font-dm">{r.syn}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}