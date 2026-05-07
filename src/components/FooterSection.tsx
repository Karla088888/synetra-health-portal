import { SynetraLogo } from "./SynetraLogo";
import icatLogo from "@/assets/icat-unam-logo.png";
import hgmLogo from "@/assets/hgm-logo.png";

const links = [
  { label: "Consultoría", href: "#consultoria" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Aliados", href: "#aliados" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export function FooterSection() {
  return (
    <footer className="border-t border-cyan-primary/10 bg-background py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          <SynetraLogo />
          <p className="text-text-muted text-xs tracking-[0.2em] uppercase font-dm text-center">
            Consultoría en Soluciones Biomédicas a la Medida
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-text-secondary hover:text-foreground transition-colors font-dm"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <img src={icatLogo} alt="ICAT-UNAM" className="h-10 object-contain rounded bg-white p-1" />
            <img src={hgmLogo} alt="Hospital General de México" className="h-10 object-contain rounded bg-white p-1" />
          </div>

          <div className="text-center text-text-muted text-xs font-dm space-y-1">
            <p>© 2026 Synetra Health. Todos los derechos reservados.</p>
            <p>Tecnología desarrollada en colaboración con el ICAT-UNAM.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}