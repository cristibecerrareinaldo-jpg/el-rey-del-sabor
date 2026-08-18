import { sectionCopy, whyChooseUs } from "@/data/siteData";
import { Crown, Droplet, Flame } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * Mapa de iconos disponibles para los pilares de "¿Por qué elegirnos?".
 * Las claves corresponden al campo `icon` de cada ítem en `siteData.ts`,
 * lo que permite editar los pilares desde el archivo de datos sin tocar
 * este componente.
 */
const WHY_ICONS: Record<string, LucideIcon> = {
  flame: Flame,
  droplet: Droplet,
  crown: Crown,
};

/**
 * Sección "¿Por qué elegirnos?".
 *
 * Muestra los pilares (Crujiente, Jugoso, Irresistible, etc.) como tarjetas
 * con ícono, título y descripción corta. Todo el contenido proviene de
 * `src/frontend/src/data/siteData.ts` y es editable desde ese archivo.
 */
function WhyChooseUsSection() {
  return (
    <section
      id="por-que"
      data-ocid="why_choose_us.section"
      className="bg-card py-16 md:py-24"
      aria-labelledby="why-choose-us-heading"
    >
      <div className="container">
        <div className="mb-12 max-w-2xl">
          <span className="ribbon-king mb-4">El rey del sabor</span>
          <h2
            id="why-choose-us-heading"
            className="heading-king mt-4 text-4xl sm:text-5xl"
          >
            {sectionCopy.whyChooseUs.title}
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground">
            {sectionCopy.whyChooseUs.subtitle}
          </p>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((feature, index) => {
            const Icon = WHY_ICONS[feature.icon] ?? Crown;
            return (
              <li
                key={feature.id}
                data-ocid={`why_choose_us.item.${index}`}
                className="card-king flex flex-col items-start p-6"
              >
                <span
                  className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-foreground bg-accent text-accent-foreground shadow-pop-red"
                  aria-hidden="true"
                >
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="font-display text-lg font-extrabold uppercase tracking-tight text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
