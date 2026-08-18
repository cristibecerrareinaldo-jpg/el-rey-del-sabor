/**
 * El Rey del Sabor — Contenido editable centralizado.
 * --------------------------------------------------------------
 * Este es el ÚNICO archivo que el dueño del negocio necesita editar
 * para cambiar textos, precios, horarios, redes sociales, etc.
 * No se requiere tocar ningún otro archivo del proyecto.
 * --------------------------------------------------------------
 */

/** Ruta del logo de la mascota (pollo con corona y delantal rojo). */
export const LOGO_PATH = "/assets/logo/mascot.png";

/** Moneda usada para mostrar precios en todo el sitio. */
export const CURRENCY = "$";

/** Información básica del negocio. */
export const business = {
  name: "EL REY DEL SABOR",
  slogan: "Pollo Broaster • Crujiente • Jugoso • Irresistible",
  tagline: "El rey del pollo broaster",
  description:
    "Pollo broaster crujiente por fuera, jugoso por dentro. Receta secreta, sabor de rey. Pídelo por WhatsApp y te lo llevamos caliente.",
  address: "Calle Principal #123, Centro, Tu Ciudad",
  phone: "+57 300 123 4567",
  /** Número de WhatsApp en formato internacional SIN signos ni espacios. */
  whatsapp: "573001234567",
  /** Mensaje precargado al abrir el chat de WhatsApp. */
  whatsappMessage:
    "¡Hola El Rey del Sabor! 🍗 Quiero hacer un pedido. ¿Me ayudan con el menú?",
};

/** Texto de la sección "Sobre nosotros" (editable). */
export const about = {
  /** Título corto que aparece sobre el título principal. */
  badge: "Nuestra historia",
  /** Título principal de la sección. */
  title: "El rey del pollo broaster",
  /** Párrafos descriptivos del restaurante. */
  paragraphs: [
    "En El Rey del Sabor llevamos más de una década perfeccionando el arte del pollo broaster. Empezamos como un pequeño negocio familiar con una receta secreta heredada de generación en generación, y hoy somos el lugar favorito de quienes buscan un pollo crujiente por fuera y jugoso por dentro.",
    "Cada pieza se marina con nuestra mezcla exclusiva de especias, se empaniza a mano y se fríe a la temperatura exacta para lograr ese crujido dorado que nos hace famosos. Solo usamos pollo fresco del día, nunca congelado, porque la calidad empieza desde el ingrediente.",
    "Nuestra misión es simple: que cada bocado te haga sentir como un rey. Por eso atendemos con una sonrisa, preparamos al momento y lo entregamos caliente, justo como lo pediste por WhatsApp.",
  ],
  /** Rasgos destacados del restaurante (icono + texto corto). */
  highlights: [
    { icon: "crown", label: "Receta secreta del rey" },
    { icon: "drumstick", label: "Pollo fresco del día" },
    { icon: "leaf", label: "Ingredientes seleccionados" },
    { icon: "message", label: "Pídelo por WhatsApp" },
  ],
};

/** Horario de atención por bloques de días. */
export const openingHours: { days: string; hours: string }[] = [
  { days: "Lunes a Jueves", hours: "11:00 a.m. – 10:00 p.m." },
  { days: "Viernes y Sábado", hours: "11:00 a.m. – 12:00 a.m." },
  { days: "Domingo", hours: "12:00 p.m. – 9:00 p.m." },
];

/** Redes sociales del negocio (editables). */
export const socialLinks: { id: string; label: string; url: string }[] = [
  {
    id: "facebook",
    label: "Facebook",
    url: "https://facebook.com/elreydelsabor",
  },
  {
    id: "instagram",
    label: "Instagram",
    url: "https://instagram.com/elreydelsabor",
  },
  { id: "tiktok", label: "TikTok", url: "https://tiktok.com/@elreydelsabor" },
];

/** Categorías del menú (para agrupar y filtrar). */
export const menuCategories = [
  "1/4 Pollo",
  "1/2 Pollo",
  "1 Pollo",
  "Presas Individuales",
  "Combos con Papas y Gaseosa",
  "Acompañamientos",
  "Bebidas",
] as const;

/** Ítems del menú con precios en pesos ($). */
export const menu: {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
}[] = [
  // 1/4 Pollo
  {
    id: 1,
    name: "1/4 Pollo Broaster",
    description:
      "Cuarto de pollo broaster marinado con receta secreta, acompañado de papas y ensalada de la casa.",
    price: "$12.000",
    category: "1/4 Pollo",
  },
  {
    id: 2,
    name: "1/4 Pollo + Papas + Gaseosa",
    description:
      "Cuarto de pollo broaster crujiente, papas fritas y gaseosa 400ml. Combo personal perfecto.",
    price: "$15.000",
    category: "1/4 Pollo",
  },
  // 1/2 Pollo
  {
    id: 3,
    name: "1/2 Pollo Broaster",
    description:
      "Medio pollo broaster dorado y crujiente, marinado con nuestra receta exclusiva del rey.",
    price: "$22.000",
    category: "1/2 Pollo",
  },
  {
    id: 4,
    name: "1/2 Pollo + Papas + Gaseosa",
    description:
      "Medio pollo broaster, papas fritas grandes y gaseosa 400ml. Para compartir con alguien más.",
    price: "$26.000",
    category: "1/2 Pollo",
  },
  // 1 Pollo
  {
    id: 5,
    name: "1 Pollo Entero Broaster",
    description:
      "Pollo entero broaster, crujiente por fuera y jugoso por dentro. Ideal para la familia.",
    price: "$38.000",
    category: "1 Pollo",
  },
  {
    id: 6,
    name: "1 Pollo + Papas Grandes + 2 Gaseosas",
    description:
      "Pollo entero broaster, papas fritas grandes y dos gaseosas 400ml. El combo del rey.",
    price: "$45.000",
    category: "1 Pollo",
  },
  // Presas Individuales
  {
    id: 7,
    name: "Presa Individual",
    description:
      "Una presa de pollo broaster a tu elección: pechuga, muslo, pernil o ala. Crujiente y jugosa.",
    price: "$5.000",
    category: "Presas Individuales",
  },
  {
    id: 8,
    name: "2 Presas + Papas",
    description:
      "Dos presas de pollo broaster a tu elección y papas fritas. Para un antojo rápido.",
    price: "$11.000",
    category: "Presas Individuales",
  },
  // Combos con Papas y Gaseosa
  {
    id: 9,
    name: "Combo Personal (1/4 + Papas + Gaseosa)",
    description:
      "Cuarto de pollo broaster, papas fritas y gaseosa 400ml. El combo perfecto para uno.",
    price: "$15.000",
    category: "Combos con Papas y Gaseosa",
  },
  {
    id: 10,
    name: "Combo Pareja (1/2 Pollo + Papas + 2 Gaseosas)",
    description:
      "Medio pollo broaster, papas fritas grandes y dos gaseosas 400ml. Para compartir en pareja.",
    price: "$30.000",
    category: "Combos con Papas y Gaseosa",
  },
  {
    id: 11,
    name: "Combo Familiar (1 Pollo + Papas Grandes + 4 Gaseosas)",
    description:
      "Pollo entero broaster, papas fritas grandes y cuatro gaseosas 400ml. Para toda la familia.",
    price: "$52.000",
    category: "Combos con Papas y Gaseosa",
  },
  // Acompañamientos
  {
    id: 12,
    name: "Papas Fritas",
    description:
      "Porción de papas crujientes con sal y especias de la casa. Doradas y crujientes.",
    price: "$6.000",
    category: "Acompañamientos",
  },
  {
    id: 13,
    name: "Ensalada de la Casa",
    description:
      "Lechuga, tomate, zanahoria y aderezo especial. Fresca y ligera para acompañar.",
    price: "$5.000",
    category: "Acompañamientos",
  },
  {
    id: 14,
    name: "Arroz (opcional)",
    description:
      "Porción de arroz blanco suelto. Acompañamiento opcional para tu pedido de pollo.",
    price: "$3.000",
    category: "Acompañamientos",
  },
  // Bebidas
  {
    id: 15,
    name: "Gaseosa Individual 400ml",
    description:
      "Bebida gaseosa fría. Sabor a tu elección: cola, naranja o limón.",
    price: "$3.000",
    category: "Bebidas",
  },
  {
    id: 16,
    name: "Agua",
    description:
      "Botella de agua natural fría. Refrescante para acompañar tu pollo broaster.",
    price: "$2.500",
    category: "Bebidas",
  },
  {
    id: 17,
    name: "Jugo Natural",
    description:
      "Jugo de fruta de temporada preparado al momento. Mango, mora, lulo o guanábana.",
    price: "$5.000",
    category: "Bebidas",
  },
];

/** Imágenes de la galería (rutas editables). */
export const gallery: { id: number; url: string; caption: string }[] = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/60616/fried-chicken-crispy-deep-fried-60616.jpeg?auto=compress&cs=tinysrgb&w=900",
    caption: "Pollo broaster crujiente",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=900",
    caption: "Alitas BBQ de la casa",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=900",
    caption: "Papas fritas doradas",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=900",
    caption: "Combo Familiar completo",
  },
  {
    id: 5,
    url: "https://images.pexels.com/photos/16244851/pexels-photo-16244851.jpeg?auto=compress&cs=tinysrgb&w=900",
    caption: "Nuggets crujientes",
  },
  {
    id: 6,
    url: "https://images.pexels.com/photos/3219547/pexels-photo-3219547.jpeg?auto=compress&cs=tinysrgb&w=900",
    caption: "Bebidas frescas",
  },
];

/** Razones para elegirnos (sección "¿Por qué elegirnos?"). */
export const whyChooseUs: {
  id: number;
  title: string;
  description: string;
  icon: string;
}[] = [
  {
    id: 1,
    title: "Crujiente",
    description: "El empanizado perfecto que cruje en cada mordida",
    icon: "flame",
  },
  {
    id: 2,
    title: "Jugoso",
    description: "Pollo siempre jugoso por dentro, nunca seco",
    icon: "droplet",
  },
  {
    id: 3,
    title: "Irresistible",
    description: "El sabor que te hace volver por mas",
    icon: "crown",
  },
];

/** Enlaces de navegación por anclas a las secciones del sitio. */
export const navLinks: { href: string; label: string }[] = [
  { href: "#inicio", label: "Inicio" },
  { href: "#menu", label: "Menú" },
  { href: "#galeria", label: "Galería" },
  { href: "#por-que", label: "Por qué elegirnos" },
  { href: "#contacto", label: "Contacto" },
];

/** Textos de las secciones (encabezados y subtítulos). */
export const sectionCopy = {
  hero: {
    badge: "El #1 en pollo broaster",
    /** Slogan destacado del hero — "Crujiente, Jugoso, Irresistible". */
    slogan: "Crujiente, Jugoso, Irresistible",
    title: "Pollo broaster que te hace rey",
    subtitle:
      "Crujiente por fuera, jugoso por dentro. Hecho con nuestra receta secreta y el mejor pollo fresco del día.",
    primaryCta: "Pedir por WhatsApp",
    secondaryCta: "Ver el menú",
  },
  menu: {
    title: "Nuestro Menú",
    subtitle:
      "Pollo broaster, combos familiares y acompañamientos. Todo preparado al momento.",
  },
  gallery: {
    title: "Galería",
    subtitle: "Un vistazo a lo que prepara el rey del sabor.",
  },
  whyChooseUs: {
    title: "¿Por qué elegirnos?",
    subtitle: "No es solo pollo, es una experiencia de rey.",
  },
  contact: {
    title: "Ubicación y Contacto",
    subtitle:
      "Visítanos o pide por WhatsApp. Estamos para servirte el mejor pollo broaster.",
  },
};

/** Construye el enlace de WhatsApp con mensaje precargado. */
export function buildWhatsAppLink(): string {
  const text = encodeURIComponent(business.whatsappMessage);
  return `https://wa.me/${business.whatsapp}?text=${text}`;
}
