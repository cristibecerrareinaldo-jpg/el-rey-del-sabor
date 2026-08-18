import Types "../types/restaurant";

module {
  public type BusinessInfo = Types.BusinessInfo;
  public type MenuItem = Types.MenuItem;
  public type GalleryImage = Types.GalleryImage;
  public type WhyChooseUsFeature = Types.WhyChooseUsFeature;

  /// Devuelve la información central del negocio.
  public func getBusinessInfo(businessInfo : BusinessInfo) : BusinessInfo {
    businessInfo;
  };

  /// Devuelve todos los items del menú (sin agrupar; el frontend los agrupa por categoría).
  public func getMenu(menu : [MenuItem]) : [MenuItem] {
    menu;
  };

  /// Devuelve la galería de imágenes.
  public func getGallery(gallery : [GalleryImage]) : [GalleryImage] {
    gallery;
  };

  /// Devuelve las razones para elegir el restaurante.
  public func getWhyChooseUs(features : [WhyChooseUsFeature]) : [WhyChooseUsFeature] {
    features;
  };
};
