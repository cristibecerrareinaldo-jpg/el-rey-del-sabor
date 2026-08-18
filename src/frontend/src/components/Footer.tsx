import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { Clock, MapPin, Phone } from "lucide-react";
import {
  LOGO_PATH,
  business,
  openingHours,
  socialLinks,
} from "../data/siteData";
import { buildWhatsAppLink } from "../data/siteData";

export default function Footer({
  onOwnerSignIn,
}: {
  onOwnerSignIn: () => void;
}) {
  const { identity, clear } = useInternetIdentity();
  const isAuthenticated = !!identity;

  return (
    <footer
      data-ocid="footer"
      className="border-t-[3px] border-foreground bg-card"
    >
      <div className="container grid gap-10 py-14 md:grid-cols-3">
        {/* Columna 1: Logo + nombre + slogan */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <div className="flex items-center gap-3">
            <img
              src={LOGO_PATH}
              alt={`Logo de ${business.name}`}
              className="h-16 w-16 rounded-full border-[2px] border-foreground object-cover shadow-pop-red"
            />
            <span className="font-display text-2xl font-extrabold uppercase tracking-tight text-foreground">
              {business.name}
            </span>
          </div>
          <p className="mt-4 max-w-xs font-body text-sm font-semibold uppercase tracking-wide text-accent">
            {business.slogan}
          </p>
          <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-muted-foreground">
            {business.description}
          </p>
        </div>

        {/* Columna 2: Contacto + horario */}
        <div className="flex flex-col gap-5">
          <h3 className="heading-king text-lg uppercase">Contacto</h3>
          <ul className="space-y-4 font-body text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span className="text-foreground">{business.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <a
                href={`tel:${business.phone.replace(/\s/g, "")}`}
                data-ocid="footer.phone_link"
                className="text-foreground transition-colors hover:text-accent"
              >
                {business.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div className="space-y-1">
                {openingHours.map((entry) => (
                  <div key={entry.days} className="text-foreground">
                    <span className="font-semibold">{entry.days}:</span>{" "}
                    {entry.hours}
                  </div>
                ))}
              </div>
            </li>
          </ul>
        </div>

        {/* Columna 3: Redes sociales + CTA WhatsApp */}
        <div className="flex flex-col gap-5">
          <h3 className="heading-king text-lg uppercase">Síguenos</h3>
          <ul className="flex flex-wrap gap-3">
            {socialLinks.map((social) => (
              <li key={social.id}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid={`footer.social_link.${social.id}`}
                  className="inline-flex items-center rounded-full border-[3px] border-foreground bg-secondary px-4 py-2 font-display text-sm font-bold uppercase tracking-wide text-foreground transition-transform hover:-translate-y-0.5"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="footer.whatsapp_button"
            className="btn-king-accent w-full justify-center"
          >
            Pedir por WhatsApp
          </a>
        </div>
      </div>

      {/* Barra inferior: copyright + acceso del dueño */}
      <div className="border-t-[3px] border-foreground bg-background">
        <div className="container flex flex-col items-center justify-between gap-3 py-5 text-center sm:flex-row sm:text-left">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} {business.name}. Todos los derechos
            reservados.
          </p>
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <button
                type="button"
                onClick={clear}
                data-ocid="footer.sign_out_button"
                className="font-body text-xs font-bold uppercase tracking-wide text-muted-foreground underline-offset-4 hover:text-accent hover:underline"
              >
                Cerrar sesión
              </button>
            ) : (
              <button
                type="button"
                onClick={onOwnerSignIn}
                data-ocid="footer.owner_sign_in_button"
                className="font-body text-xs font-bold uppercase tracking-wide text-muted-foreground underline-offset-4 hover:text-accent hover:underline"
              >
                Acceso del dueño
              </button>
            )}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.hostname : "",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="footer.attribution_link"
              className="font-body text-xs text-muted-foreground underline-offset-4 hover:text-accent hover:underline"
            >
              © {new Date().getFullYear()}. Built with love using caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
