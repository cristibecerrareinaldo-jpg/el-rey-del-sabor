import { MapPin } from "lucide-react";
import { LOGO_PATH, business, sectionCopy } from "../data/siteData";
import { buildWhatsAppLink } from "../data/siteData";

/**
 * Sección Hero — slogan "Crujiente, Jugoso, Irresistible" + logo de la marca
 * + ilustración de pollo broaster como elemento visual destacado.
 *
 * El contenido editable vive en `src/frontend/src/data/siteData.ts`
 * (campos `sectionCopy.hero` y `business`).
 */
export default function HeroSection() {
  const hero = sectionCopy.hero;

  return (
    <section
      id="inicio"
      data-ocid="hero.section"
      className="relative overflow-hidden bg-rays-king"
      aria-label="Inicio"
    >
      <div className="bg-grid-king">
        <div className="container grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          {/* Texto */}
          <div className="flex flex-col items-start gap-6">
            <span className="ribbon-king" data-ocid="hero.badge">
              {hero.badge}
            </span>

            {/* Slogan destacado — "Crujiente, Jugoso, Irresistible" */}
            <p
              className="font-display text-xl font-extrabold uppercase tracking-[0.18em] text-accent sm:text-2xl"
              data-ocid="hero.slogan"
            >
              {hero.slogan}
            </p>

            <h1
              className="heading-king text-5xl leading-[1.05] sm:text-6xl md:text-7xl"
              data-ocid="hero.title"
            >
              {hero.title}
            </h1>
            <p
              className="max-w-lg font-body text-lg leading-relaxed text-muted-foreground"
              data-ocid="hero.subtitle"
            >
              {hero.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="hero.primary_button"
                className="btn-king-accent"
              >
                {hero.primaryCta}
              </a>
              <a
                href="#menu"
                data-ocid="hero.secondary_button"
                className="btn-king-ghost"
              >
                {hero.secondaryCta}
              </a>
            </div>

            {business.address && (
              <p
                className="flex items-center gap-2 font-body text-sm text-muted-foreground"
                data-ocid="hero.address"
              >
                <MapPin className="h-4 w-4 text-accent" />
                {business.address}
              </p>
            )}
          </div>

          {/* Logo mascota + ilustración de pollo broaster destacados */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative animate-float-soft">
              {/* Resplandor rojo detrás del logo */}
              <div className="absolute inset-0 -z-10 rounded-full bg-primary/30 blur-3xl" />

              {/* Logo de la mascota de la marca */}
              <img
                src={LOGO_PATH}
                alt={`Mascota de ${business.name}: pollo con corona y delantal rojo`}
                className="h-72 w-72 rounded-full border-[4px] border-foreground object-cover shadow-pop-red-xl sm:h-80 sm:w-80 md:h-96 md:w-96"
                data-ocid="hero.logo"
              />

              {/* Ilustración de pollo broaster como elemento visual destacado */}
              <img
                src="/assets/generated/hero-broaster-chicken.dim_1024x1024.png"
                alt="Pollo broaster crujiente dorado recién preparado"
                loading="lazy"
                className="absolute -bottom-6 -left-10 hidden h-40 w-40 rounded-full border-[4px] border-foreground object-cover shadow-pop-yellow sm:block md:h-48 md:w-48"
                data-ocid="hero.broaster_image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
