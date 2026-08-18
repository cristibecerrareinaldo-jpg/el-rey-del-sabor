import Types "../types/restaurant";
import RestaurantLib "../lib/restaurant";

mixin (
  businessInfo : Types.BusinessInfo,
  menu : [Types.MenuItem],
  gallery : [Types.GalleryImage],
  whyChooseUs : [Types.WhyChooseUsFeature],
) {
  /// Información central del restaurante (nombre, slogan, contacto, horario, redes).
  public query func getBusinessInfo() : async Types.BusinessInfo {
    RestaurantLib.getBusinessInfo(businessInfo);
  };

  /// Menú completo del restaurante (todos los items, agrupables por categoría en el frontend).
  public query func getMenu() : async [Types.MenuItem] {
    RestaurantLib.getMenu(menu);
  };

  /// Galería de fotos (placeholders editables).
  public query func getGallery() : async [Types.GalleryImage] {
    RestaurantLib.getGallery(gallery);
  };

  /// Sección "Por qué elegirnos".
  public query func getWhyChooseUs() : async [Types.WhyChooseUsFeature] {
    RestaurantLib.getWhyChooseUs(whyChooseUs);
  };
};
