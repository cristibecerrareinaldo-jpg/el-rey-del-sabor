module {
  /// Franja de horario semanal (ej. "Lunes a Viernes" / "9:00 am - 9:00 pm").
  public type DayHours = {
    days : Text;
    hours : Text;
  };

  /// Información central del negocio editable desde la migración semilla.
  public type BusinessInfo = {
    name : Text;
    slogan : Text;
    address : Text;
    phone : Text;
    whatsapp : Text;
    openingHours : [DayHours];
    socialLinks : [SocialLink];
  };

  /// Red social del negocio (Facebook, Instagram, etc.).
  public type SocialLink = {
    id : Text;
    linkLabel : Text;
    url : Text;
  };

  /// Categoría del menú (1/4 pollo, 1/2 pollo, combos, presas, etc.).
  public type MenuCategory = Text;

  /// Item individual del menú broaster.
  public type MenuItem = {
    id : Nat;
    name : Text;
    description : Text;
    price : Text;
    category : MenuCategory;
  };

  /// Imagen de la galería (placeholder editable).
  public type GalleryImage = {
    id : Nat;
    url : Text;
    caption : Text;
  };

  /// Razón para elegir el restaurante (sección "Por qué elegirnos").
  public type WhyChooseUsFeature = {
    id : Nat;
    title : Text;
    description : Text;
    icon : Text;
  };
};
