import { Crown, Drumstick, Leaf, MessageCircle } from "lucide-react";
import { about } from "../data/siteData";

/** Mapa de iconos para los rasgos destacados de "Sobre nosotros". */
const HIGHLIGHT_ICONS: Record<string, typeof Crown> = {
  crown: Crown,
  drumstick: Drumstick,
  leaf: Leaf,
  message: MessageCircle,
};

/**
 * Sección "Sobre nosotros" — texto descriptivo del restaurante editable
 * desde el archivo de datos (`about` en `src/frontend/src/data/siteData.ts`).
 */
export default function AboutSection() {
  return (
    <section
      id="sobre-nosotros"
      data-ocid="about.section"
      className="bg-background py-16 md:py-24"
      aria-label="Sobre nosotros"
    >
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          {/* Columna de texto */}
          <div className="flex flex-col items-start gap-6">
            <span className="ribbon-king" data-ocid="about.badge">
              {about.badge}
            </span>
            <h2
              className="heading-king text-4xl sm:text-5xl"
              data-ocid="about.title"
            >
              {about.title}
            </h2>
            <div
              className="flex flex-col gap-4 font-body text-lg leading-relaxed text-muted-foreground"
              data-ocid="about.paragraphs"
            >
              {about.paragraphs.map((paragraph, index) => (
                <p key={`p-${index}-${paragraph.slice(0, 20)}`}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Columna de rasgos destacados */}
          <div className="flex flex-col gap-4">
            <h3
              className="font-display text-sm font-extrabold uppercase tracking-widest text-accent"
              data-ocid="about.highlights_title"
            >
              Lo que nos hace diferentes
            </h3>
            <ul className="grid gap-4 sm:grid-cols-2">
              {about.highlights.map((highlight, index) => {
                const Icon = HIGHLIGHT_ICONS[highlight.icon] ?? Crown;
                return (
                  <li
                    key={highlight.icon}
                    data-ocid={`about.highlight.${index}`}
                    className="card-king flex items-center gap-4 p-5"
                  >
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[3px] border-foreground bg-accent text-accent-foreground shadow-pop-red">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-display text-sm font-extrabold uppercase tracking-tight text-foreground">
                      {highlight.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
