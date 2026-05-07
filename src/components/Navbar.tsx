import { useState, useEffect } from "react";
import { SynetraLogo } from "./SynetraLogo";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Consultoría", href: "#consultoria" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Aliados", href: "#aliados" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-cyan-primary/15"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <SynetraLogo />
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contacto"
            className="hidden md:inline-flex items-center h-9 px-5 text-sm font-medium border border-cyan-primary text-cyan-primary rounded-lg hover:bg-cyan-primary hover:text-background transition-all duration-300"
          >
            Agendar Consultoría
          </a>
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(true)}
            aria-label="Menú"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-5 right-6 text-foreground"
            onClick={() => setMobileOpen(false)}
            aria-label="Cerrar"
          >
            <X size={28} />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-2xl font-syne font-bold text-foreground hover:text-cyan-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="mt-4 inline-flex items-center h-12 px-8 text-base font-semibold border border-cyan-primary text-cyan-primary rounded-xl hover:bg-cyan-primary hover:text-background transition-all duration-300"
            onClick={() => setMobileOpen(false)}
          >
            Agendar Consultoría
          </a>
        </div>
      )}
    </>
  );
}