import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import {
  business,
  openingHours,
  sectionCopy,
  socialLinks,
} from "../data/siteData";
import { buildWhatsAppLink } from "../data/siteData";

/**
 * Sección "Ubicación y horario" + contacto por WhatsApp.
 * Sin formulario de reserva ni de contacto — todo fluye por WhatsApp.
 * Los datos se editan desde `src/frontend/src/data/siteData.ts`.
 */
export default function LocationSection() {
  // Mapa embebido centrado en la dirección del negocio (Google Maps embed sin API key)
  const mapsQuery = encodeURIComponent(`${business.name} ${business.address}`);
  const mapSrc = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;

  return (
    <section
      id="contacto"
      data-ocid="contact.section"
      className="bg-background py-16 md:py-24"
    >
      <div className="container">
        <div className="mb-12 max-w-2xl">
          <span className="ribbon-king mb-4">Visítanos</span>
          <h2 className="heading-king mt-4 text-4xl sm:text-5xl">
            {sectionCopy.contact.title}
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground">
            {sectionCopy.contact.subtitle}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Tarjeta de información + horario */}
          <div className="card-king p-8">
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-accent" />
                <div className="min-w-0">
                  <h3 className="font-display text-sm font-extrabold uppercase tracking-widest text-muted-foreground">
                    Dirección
                  </h3>
                  <p className="mt-1 font-body text-foreground">
                    {business.address}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="contact.maps_link"
                    className="mt-2 inline-flex items-center gap-1 font-display text-sm font-bold uppercase tracking-wide text-accent underline-offset-4 hover:underline"
                  >
                    Cómo llegar
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="mt-1 h-6 w-6 shrink-0 text-accent" />
                <div>
                  <h3 className="font-display text-sm font-extrabold uppercase tracking-widest text-muted-foreground">
                    Teléfono
                  </h3>
                  <a
                    href={`tel:${business.phone.replace(/\s/g, "")}`}
                    data-ocid="contact.phone_link"
                    className="mt-1 block font-body text-foreground transition-colors hover:text-accent"
                  >
                    {business.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Clock className="mt-1 h-6 w-6 shrink-0 text-accent" />
                <div>
                  <h3 className="font-display text-sm font-extrabold uppercase tracking-widest text-muted-foreground">
                    Horario
                  </h3>
                  <ul className="mt-1 space-y-1">
                    {openingHours.map((entry) => (
                      <li
                        key={entry.days}
                        className="font-body text-foreground"
                      >
                        <span className="font-semibold">{entry.days}:</span>{" "}
                        {entry.hours}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          {/* Mapa embebido */}
          <div className="card-king overflow-hidden p-0">
            <iframe
              title={`Mapa de ${business.name}`}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[280px] w-full border-0"
              data-ocid="contact.map"
            />
          </div>
        </div>

        {/* CTA WhatsApp + redes */}
        <div className="card-king mt-6 flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-[3px] border-foreground bg-accent text-accent-foreground shadow-pop-red">
              <MessageCircle className="h-7 w-7" />
            </span>
            <div>
              <h3 className="heading-king text-2xl uppercase">
                Pídelo ahora por WhatsApp
              </h3>
              <p className="mt-1 font-body text-muted-foreground">
                Escríbenos y recibe tu pedido caliente. Sin filas, sin esperas.
              </p>
            </div>
          </div>
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="contact.whatsapp_button"
            className="btn-king-accent w-full justify-center md:w-auto"
          >
            Pedir por WhatsApp
          </a>
        </div>

        {/* Redes sociales */}
        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <h4 className="font-display text-sm font-extrabold uppercase tracking-widest text-muted-foreground">
            Síguenos
          </h4>
          <ul className="flex flex-wrap justify-center gap-3">
            {socialLinks.map((social) => (
              <li key={social.id}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid={`contact.social_link.${social.id}`}
                  className="inline-flex items-center rounded-full border-[3px] border-foreground bg-secondary px-4 py-2 font-display text-sm font-bold uppercase tracking-wide text-foreground transition-transform hover:-translate-y-0.5"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
