import { buildWhatsAppLink } from "@/data/siteData";
import { menu, menuCategories, sectionCopy } from "@/data/siteData";

/**
 * Sección "Nuestro Menú".
 *
 * Renderiza el menú agrupado por categoría, con tarjetas densas y
 * escaneables. Cada ítem muestra nombre, descripción y precio en pesos ($),
 * y un botón "Pedir" que abre WhatsApp con el mensaje precargado.
 *
 * Todo el contenido (categorías, ítems, precios, textos) proviene de
 * `src/frontend/src/data/siteData.ts` y es editable desde ese archivo.
 */
function MenuSection() {
  return (
    <section
      id="menu"
      data-ocid="menu.section"
      className="bg-card py-16 md:py-24"
      aria-labelledby="menu-heading"
    >
      <div className="container">
        <div className="mb-12 max-w-2xl">
          <span className="ribbon-king mb-4">Carta</span>
          <h2
            id="menu-heading"
            className="heading-king mt-4 text-4xl sm:text-5xl"
          >
            {sectionCopy.menu.title}
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground">
            {sectionCopy.menu.subtitle}
          </p>
        </div>

        {/* Tarjetas de menú agrupadas por categoría */}
        <div className="space-y-12">
          {menuCategories.map((category) => {
            const items = menu.filter((item) => item.category === category);
            if (items.length === 0) return null;

            const categorySlug = category
              .toLowerCase()
              .normalize("NFD")
              .replace(/\p{Diacritic}/gu, "")
              .replace(/[^a-z0-9]+/g, "_");

            return (
              <div key={category} data-ocid={`menu.category.${categorySlug}`}>
                <div className="mb-6 flex items-center gap-3">
                  <h3 className="heading-king text-2xl uppercase">
                    {category}
                  </h3>
                  <span
                    className="inline-flex h-7 items-center rounded-full border-[2px] border-foreground bg-secondary px-3 font-display text-xs font-extrabold uppercase tracking-widest text-secondary-foreground"
                    aria-label={`${items.length} ítems en ${category}`}
                  >
                    {items.length}
                  </span>
                </div>
                <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((item, index) => (
                    <li
                      key={item.id}
                      data-ocid={`menu.item.${index}`}
                      className="card-king flex flex-col p-6"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="font-display text-xl font-extrabold leading-tight text-foreground">
                          {item.name}
                        </h4>
                        <span className="badge-king shrink-0">
                          {item.price}
                        </span>
                      </div>
                      <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                      <a
                        href={buildWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-ocid={`menu.order_button.${index}`}
                        className="btn-king mt-5 w-full justify-center text-sm"
                      >
                        Pedir
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default MenuSection;
