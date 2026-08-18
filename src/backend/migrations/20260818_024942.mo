// Migración: rebrand de hair-studio (Maple & Main) a restaurante de pollo
// broaster (El Rey del Sabor). Elimina los campos de hair-studio (services,
// team, testimonials, bookingRequests, nextRequestId) y agrega los campos del
// dominio restaurante (menu, whyChooseUs). También reemplaza BusinessInfo con
// la nueva forma (slogan, whatsapp, socialLinks) en lugar de tagline/email.
//
// OldActor refleja la firma estable del archivo anterior de la cadena
// (20250101_000000_Init.mo). NewActor refleja los campos estables declarados
// en main.mo tras el rework.
import Map "mo:core/Map";
import AccessControl "mo:caffeineai-authorization/access-control";

module {
  type DayHours = {
    days : Text;
    hours : Text;
  };

  type SocialLink = {
    id : Text;
    linkLabel : Text;
    url : Text;
  };

  type BusinessInfo = {
    name : Text;
    slogan : Text;
    address : Text;
    phone : Text;
    whatsapp : Text;
    openingHours : [DayHours];
    socialLinks : [SocialLink];
  };

  type MenuItem = {
    id : Nat;
    name : Text;
    description : Text;
    price : Text;
    category : Text;
  };

  type GalleryImage = {
    id : Nat;
    url : Text;
    caption : Text;
  };

  type WhyChooseUsFeature = {
    id : Nat;
    title : Text;
    description : Text;
    icon : Text;
  };

  // Tipos concretos de los campos de hair-studio que se descartan en esta
  // migración. Se declaran con su forma real (no Any) para que el compilador
  // vea que la migración los consume explícitamente y los omite de NewActor
  // de forma intencional (M0216 prohíbe promocionar un tipo concreto a Any
  // porque "pierde datos" implícitamente).
  type Service = {
    id : Nat;
    name : Text;
    description : Text;
    price : Text;
    duration : Text;
  };

  type TeamMember = {
    id : Nat;
    name : Text;
    role : Text;
    bio : Text;
    photo : Text;
  };

  type Testimonial = {
    id : Nat;
    author : Text;
    quote : Text;
  };

  type BookingRequest = {
    id : Nat;
    name : Text;
    contact : Text;
    service : Text;
    preferredTime : Text;
    message : Text;
    createdAt : Int;
    handled : Bool;
  };

  // Firma estable anterior (Maple & Main hair studio). Los campos retirados
  // (services, team, testimonials, bookingRequests, nextRequestId) se consumen
  // en OldActor y se omiten de NewActor — descarte intencional.
  type OldActor = {
    accessControlState : AccessControl.AccessControlState;
    businessInfo : {
      name : Text;
      tagline : Text;
      phone : Text;
      email : Text;
      address : Text;
      openingHours : [DayHours];
    };
    services : [Service];
    team : [TeamMember];
    testimonials : [Testimonial];
    gallery : [GalleryImage];
    bookingRequests : Map.Map<Nat, BookingRequest>;
    nextRequestId : Nat;
  };

  type NewActor = {
    accessControlState : AccessControl.AccessControlState;
    businessInfo : BusinessInfo;
    menu : [MenuItem];
    gallery : [GalleryImage];
    whyChooseUs : [WhyChooseUsFeature];
  };

  public func migration(old : OldActor) : NewActor {
    {
      accessControlState = old.accessControlState;
      businessInfo = {
        name = "El Rey del Sabor";
        slogan = "Crujiente, Jugoso, Irresistible";
        address = "Av. Principal #123, Centro, Ciudad";
        phone = "+57 300 000 0000";
        whatsapp = "+573000000000";
        openingHours = [
          { days = "Lunes a Jueves"; hours = "11:00 am - 10:00 pm" },
          { days = "Viernes a Sábado"; hours = "11:00 am - 11:30 pm" },
          { days = "Domingo"; hours = "12:00 pm - 9:00 pm" },
        ];
        socialLinks = [
          { id = "facebook"; linkLabel = "Facebook"; url = "https://facebook.com/elreydelsabor" },
          { id = "instagram"; linkLabel = "Instagram"; url = "https://instagram.com/elreydelsabor" },
        ];
      };
      menu = [
        // 1/4 pollo
        {
          id = 0;
          name = "1/4 Pollo Broaster";
          description = "Cuarto de pollo crujiente con papas y ensalada.";
          price = "$12.000";
          category = "1/4 pollo";
        },
        {
          id = 1;
          name = "1/4 Pollo + Gaseosa";
          description = "Cuarto de pollo con papas, ensalada y gaseosa personal.";
          price = "$15.000";
          category = "1/4 pollo";
        },
        // 1/2 pollo
        {
          id = 2;
          name = "1/2 Pollo Broaster";
          description = "Media porción de pollo crujiente con papas y ensalada.";
          price = "$22.000";
          category = "1/2 pollo";
        },
        {
          id = 3;
          name = "1/2 Pollo + Gaseosa";
          description = "Media porción de pollo con papas, ensalada y gaseosa 1.5L.";
          price = "$27.000";
          category = "1/2 pollo";
        },
        // 1 pollo
        {
          id = 4;
          name = "1 Pollo Broaster";
          description = "Pollo entero crujiente con papas grandes y ensalada familiar.";
          price = "$42.000";
          category = "1 pollo";
        },
        {
          id = 5;
          name = "1 Pollo + Gaseosa 2L";
          description = "Pollo entero con papas, ensalada familiar y gaseosa 2L.";
          price = "$49.000";
          category = "1 pollo";
        },
        // Presas individuales
        {
          id = 6;
          name = "Presa de Pecho";
          description = "Pecho de pollo broaster crujiente, ideal para una sola persona.";
          price = "$6.000";
          category = "Presas individuales";
        },
        {
          id = 7;
          name = "Presa de Muslo";
          description = "Muslo de pollo broaster jugoso por unidad.";
          price = "$6.000";
          category = "Presas individuales";
        },
        {
          id = 8;
          name = "Presa de Ala";
          description = "Ala de pollo broaster crujiente, perfecta para picar.";
          price = "$4.000";
          category = "Presas individuales";
        },
        // Combos con papas y gaseosa
        {
          id = 9;
          name = "Combo Personal";
          description = "1 presa, papas pequeñas, ensalada y gaseosa personal.";
          price = "$14.000";
          category = "Combos con papas y gaseosa";
        },
        {
          id = 10;
          name = "Combo Pareja";
          description = "2 presas, papas medianas, ensalada y gaseosa 1.5L.";
          price = "$28.000";
          category = "Combos con papas y gaseosa";
        },
        {
          id = 11;
          name = "Combo Familiar";
          description = "4 presas, papas grandes, ensalada familiar y gaseosa 2L.";
          price = "$52.000";
          category = "Combos con papas y gaseosa";
        },
      ];
      gallery = [
        {
          id = 0;
          url = "https://images.unsplash.com/photo-1626645738196-c2a7c9a432ee?auto=format&fit=crop&w=1200&q=80";
          caption = "Pollo broaster crujiente recién hecho";
        },
        {
          id = 1;
          url = "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=1200&q=80";
          caption = "Papas doradas acompañando el pollo";
        },
        {
          id = 2;
          url = "https://images.unsplash.com/photo-1513185041617-4ab6fee2f958?auto=format&fit=crop&w=1200&q=80";
          caption = "Combo familiar listo para servir";
        },
        {
          id = 3;
          url = "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=1200&q=80";
          caption = "Cuarto de pollo con ensalada";
        },
        {
          id = 4;
          url = "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1200&q=80";
          caption = "Presas individuales crujientes";
        },
        {
          id = 5;
          url = "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=1200&q=80";
          caption = "Nuestro local El Rey del Sabor";
        },
      ];
      whyChooseUs = [
        {
          id = 0;
          title = "Crujiente";
          description = "Nuestra receta secreta de empanizado logra ese crujido dorado perfecto en cada mordida.";
          icon = "flame";
        },
        {
          id = 1;
          title = "Jugoso";
          description = "Pollo fresco marinado horas para mantener la jugosidad por dentro, siempre tierno.";
          icon = "droplet";
        },
        {
          id = 2;
          title = "Irresistible";
          description = "Sazón que enamora. Una vez lo pruebas, El Rey del Sabor se vuelve tu lugar favorito.";
          icon = "crown";
        },
      ];
    };
  };
};
