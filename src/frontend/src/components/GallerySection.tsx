import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { gallery, sectionCopy } from "../data/siteData";

/**
 * Galería de fotos del restaurante.
 * Grilla responsiva con efecto de hover y lightbox al hacer clic.
 * Las imágenes se editan desde `src/frontend/src/data/siteData.ts`.
 */
export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Cerrar lightbox con Escape + bloquear scroll del body cuando está abierto
  useEffect(() => {
    if (activeIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight")
        setActiveIndex((i) => (i === null ? i : (i + 1) % gallery.length));
      if (e.key === "ArrowLeft")
        setActiveIndex((i) =>
          i === null ? i : (i - 1 + gallery.length) % gallery.length,
        );
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  const activeImage =
    activeIndex === null ? null : (gallery[activeIndex] ?? null);

  return (
    <section
      id="galeria"
      data-ocid="gallery.section"
      className="bg-background py-16 md:py-24"
    >
      <div className="container">
        <div className="mb-12 max-w-2xl">
          <span className="ribbon-king mb-4">Galería</span>
          <h2 className="heading-king mt-4 text-4xl sm:text-5xl">
            {sectionCopy.gallery.title}
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground">
            {sectionCopy.gallery.subtitle}
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {gallery.map((image, index) => (
            <li
              key={image.id}
              data-ocid={`gallery.item.${index}`}
              className="card-king group relative overflow-hidden rounded-2xl"
            >
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                data-ocid={`gallery.open_button.${index}`}
                aria-label={`Ampliar foto: ${image.caption}`}
                className="block w-full focus:outline-none focus-visible:ring-4 focus-visible:ring-accent"
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent px-4 pb-3 pt-12 font-display text-sm font-bold uppercase tracking-wide text-foreground">
                  {image.caption}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Lightbox */}
      {activeImage && (
        <dialog
          open
          aria-modal="true"
          aria-label={`Foto ampliada: ${activeImage.caption}`}
          data-ocid="gallery.lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm"
          onClick={() => setActiveIndex(null)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setActiveIndex(null);
          }}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            data-ocid="gallery.lightbox.close_button"
            aria-label="Cerrar foto ampliada"
            className="absolute right-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-foreground bg-primary text-primary-foreground shadow-pop-yellow transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-accent"
          >
            <X className="h-6 w-6" />
          </button>

          <figure
            className="max-h-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
            tabIndex={-1}
          >
            <img
              src={activeImage.url}
              alt={activeImage.caption}
              className="max-h-[75vh] w-full rounded-2xl border-[4px] border-foreground object-cover shadow-pop-red"
            />
            <figcaption className="mt-4 text-center font-display text-lg font-bold uppercase tracking-wide text-foreground">
              {activeImage.caption}
            </figcaption>
          </figure>
        </dialog>
      )}
    </section>
  );
}
