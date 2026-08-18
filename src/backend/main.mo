import AccessControl "mo:caffeineai-authorization/access-control";
import MixinAuthorization "mo:caffeineai-authorization/MixinAuthorization";
import OQL "mo:caffeineai-oql";
import Expose "mo:caffeineai-oql/Expose";
import Types "types/restaurant";
import RestaurantApi "mixins/restaurant-api";

actor {
  let accessControlState : AccessControl.AccessControlState;
  include MixinAuthorization(accessControlState, null);

  let businessInfo : Types.BusinessInfo;
  let menu : [Types.MenuItem];
  let gallery : [Types.GalleryImage];
  let whyChooseUs : [Types.WhyChooseUsFeature];

  include RestaurantApi(businessInfo, menu, gallery, whyChooseUs);

  // OQL exposure — makes every persisted queryable field readable by the
  // Caffeine Data Intelligence agent. All four are public restaurant catalogue
  // data, so `.public_()` lets any caller (incl. anonymous) read every row.
  //
  // The whole construction is encapsulated in a local function so the
  // intermediate `Builder<T>` / `Decl` bindings are NOT interpreted as stable
  // actor fields by enhanced-migration (M0131/M0250 — `Builder<T>` and `Decl`
  // are not stable types). Only the returned `[OQL.Decl]` flows into `Expose`.
  //
  // Each entity uses `Entity.manual` + `.payload` per field instead of
  // `ArrayEntity.toEntity`, because the latter relies on the compiler's
  // structural `_toRow` derivation for plain records, which fails for these
  // record shapes (M0230). `payload`'s `_toRow` argument is an implicit
  // parameter; passing the matching `*Value._toRow` function explicitly
  // satisfies it without relying on dot-notation inference.
  func buildEntities() : [OQL.Decl] {
    // businessInfo — singleton record exposed via manual mode with a
    // one-element iterator and a synthetic primary key ("name").
    let b0 = OQL.Entity.manual<Types.BusinessInfo>(
      "businessInfo",
      func() = [businessInfo].values(),
      "BusinessInfo",
      "name",
    );
    let b1 = OQL.Entity.payload<Types.BusinessInfo, Text>(
      b0, "name", func(b : Types.BusinessInfo) = b.name, OQL.TextValue._toRow,
    );
    let b2 = OQL.Entity.payload<Types.BusinessInfo, Text>(
      b1, "slogan", func(b : Types.BusinessInfo) = b.slogan, OQL.TextValue._toRow,
    );
    let b3 = OQL.Entity.payload<Types.BusinessInfo, Text>(
      b2, "address", func(b : Types.BusinessInfo) = b.address, OQL.TextValue._toRow,
    );
    let b4 = OQL.Entity.payload<Types.BusinessInfo, Text>(
      b3, "phone", func(b : Types.BusinessInfo) = b.phone, OQL.TextValue._toRow,
    );
    let b5 = OQL.Entity.payload<Types.BusinessInfo, Text>(
      b4, "whatsapp", func(b : Types.BusinessInfo) = b.whatsapp, OQL.TextValue._toRow,
    );
    let bPub = OQL.Entity.public_(b5);
    let businessDecl = OQL.Entity.build(bPub);

    // menu — collection of MenuItem records.
    let m0 = OQL.Entity.manual<Types.MenuItem>(
      "menuItem",
      func() = menu.values(),
      "MenuItem",
      "id",
    );
    let m1 = OQL.Entity.payload<Types.MenuItem, Nat>(
      m0, "id", func(i : Types.MenuItem) = i.id, OQL.NatValue._toRow,
    );
    let m2 = OQL.Entity.payload<Types.MenuItem, Text>(
      m1, "name", func(i : Types.MenuItem) = i.name, OQL.TextValue._toRow,
    );
    let m3 = OQL.Entity.payload<Types.MenuItem, Text>(
      m2, "description", func(i : Types.MenuItem) = i.description, OQL.TextValue._toRow,
    );
    let m4 = OQL.Entity.payload<Types.MenuItem, Text>(
      m3, "price", func(i : Types.MenuItem) = i.price, OQL.TextValue._toRow,
    );
    let m5 = OQL.Entity.payload<Types.MenuItem, Text>(
      m4, "category", func(i : Types.MenuItem) = i.category, OQL.TextValue._toRow,
    );
    let mPub = OQL.Entity.public_(m5);
    let menuDecl = OQL.Entity.build(mPub);

    // gallery — collection of GalleryImage records.
    let g0 = OQL.Entity.manual<Types.GalleryImage>(
      "galleryImage",
      func() = gallery.values(),
      "GalleryImage",
      "id",
    );
    let g1 = OQL.Entity.payload<Types.GalleryImage, Nat>(
      g0, "id", func(i : Types.GalleryImage) = i.id, OQL.NatValue._toRow,
    );
    let g2 = OQL.Entity.payload<Types.GalleryImage, Text>(
      g1, "url", func(i : Types.GalleryImage) = i.url, OQL.TextValue._toRow,
    );
    let g3 = OQL.Entity.payload<Types.GalleryImage, Text>(
      g2, "caption", func(i : Types.GalleryImage) = i.caption, OQL.TextValue._toRow,
    );
    let gPub = OQL.Entity.public_(g3);
    let galleryDecl = OQL.Entity.build(gPub);

    // whyChooseUs — collection of WhyChooseUsFeature records.
    let w0 = OQL.Entity.manual<Types.WhyChooseUsFeature>(
      "whyChooseUsFeature",
      func() = whyChooseUs.values(),
      "WhyChooseUsFeature",
      "id",
    );
    let w1 = OQL.Entity.payload<Types.WhyChooseUsFeature, Nat>(
      w0, "id", func(f : Types.WhyChooseUsFeature) = f.id, OQL.NatValue._toRow,
    );
    let w2 = OQL.Entity.payload<Types.WhyChooseUsFeature, Text>(
      w1, "title", func(f : Types.WhyChooseUsFeature) = f.title, OQL.TextValue._toRow,
    );
    let w3 = OQL.Entity.payload<Types.WhyChooseUsFeature, Text>(
      w2, "description", func(f : Types.WhyChooseUsFeature) = f.description, OQL.TextValue._toRow,
    );
    let w4 = OQL.Entity.payload<Types.WhyChooseUsFeature, Text>(
      w3, "icon", func(f : Types.WhyChooseUsFeature) = f.icon, OQL.TextValue._toRow,
    );
    let wPub = OQL.Entity.public_(w4);
    let whyChooseUsDecl = OQL.Entity.build(wPub);

    [businessDecl, menuDecl, galleryDecl, whyChooseUsDecl];
  };

  include Expose({
    entities = buildEntities();
  });
};
