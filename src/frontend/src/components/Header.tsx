import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { LOGO_PATH, business, navLinks } from "../data/siteData";
import { buildWhatsAppLink } from "../data/siteData";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Cerrar el menú móvil al cambiar el tamaño de ventana a escritorio.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      data-ocid="header"
      className="sticky top-0 z-40 border-b-[3px] border-foreground bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80"
    >
      <div className="container flex h-20 items-center justify-between">
        {/* Logo + nombre */}
        <a
          href="#inicio"
          data-ocid="header.brand_link"
          className="flex items-center gap-3"
          aria-label={`${business.name} — inicio`}
        >
          <img
            src={LOGO_PATH}
            alt={`Logo de ${business.name}`}
            className="h-14 w-14 rounded-full border-[2px] border-foreground object-cover shadow-pop-red"
          />
          <span className="font-display text-xl font-extrabold uppercase tracking-tight text-foreground sm:text-2xl">
            {business.name}
          </span>
        </a>

        {/* Navegación de escritorio */}
        <nav
          data-ocid="header.nav"
          className="hidden items-center gap-7 md:flex"
          aria-label="Navegación principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid={`header.nav.${link.href.replace("#", "")}`}
              className="font-display text-sm font-bold uppercase tracking-wide text-foreground/80 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA WhatsApp de escritorio */}
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          data-ocid="header.whatsapp_button"
          className="btn-king-accent hidden text-sm sm:inline-flex"
        >
          Pedir ahora
        </a>

        {/* Botón menú móvil */}
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          data-ocid="header.mobile_menu_toggle"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-foreground text-foreground transition-colors hover:bg-foreground/10 md:hidden"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {mobileOpen && (
        <nav
          data-ocid="header.mobile_nav"
          className="border-t-[3px] border-foreground bg-card md:hidden"
          aria-label="Navegación móvil"
        >
          <div className="container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid={`header.mobile_nav.${link.href.replace("#", "")}`}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 font-display text-base font-bold uppercase tracking-wide text-foreground transition-colors hover:bg-foreground/10"
              >
                {link.label}
              </a>
            ))}
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="header.mobile_whatsapp_button"
              onClick={() => setMobileOpen(false)}
              className="btn-king-accent mt-3 w-full"
            >
              Pedir por WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
