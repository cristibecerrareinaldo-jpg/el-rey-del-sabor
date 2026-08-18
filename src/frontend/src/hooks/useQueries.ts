import { useActor, useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useQuery } from "@tanstack/react-query";
import type {
  BusinessInfo,
  GalleryImage,
  MenuItem,
  WhyChooseUsFeature,
} from "../backend";
import { createActor } from "../backend";

/** Información del negocio (nombre, dirección, teléfono, WhatsApp, horario, redes). */
export function useGetBusinessInfo() {
  const { actor, isFetching } = useActor(createActor);

  return useQuery<BusinessInfo>({
    queryKey: ["businessInfo"],
    queryFn: async () => {
      if (!actor) throw new Error("Actor not available");
      return actor.getBusinessInfo();
    },
    enabled: !!actor && !isFetching,
  });
}

/** Menú del restaurante (ítems con precio y categoría). */
export function useGetMenu() {
  const { actor, isFetching } = useActor(createActor);

  return useQuery<MenuItem[]>({
    queryKey: ["menu"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getMenu();
    },
    enabled: !!actor && !isFetching,
  });
}

/** Galería de imágenes del restaurante. */
export function useGetGallery() {
  const { actor, isFetching } = useActor(createActor);

  return useQuery<GalleryImage[]>({
    queryKey: ["gallery"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getGallery();
    },
    enabled: !!actor && !isFetching,
  });
}

/** Razones para elegirnos (sección "¿Por qué elegirnos?"). */
export function useGetWhyChooseUs() {
  const { actor, isFetching } = useActor(createActor);

  return useQuery<WhyChooseUsFeature[]>({
    queryKey: ["whyChooseUs"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getWhyChooseUs();
    },
    enabled: !!actor && !isFetching,
  });
}

/** ¿El usuario autenticado es administrador? */
export function useIsCallerAdmin() {
  const { actor, isFetching } = useActor(createActor);
  const { identity } = useInternetIdentity();

  return useQuery<boolean>({
    queryKey: ["isCallerAdmin", identity?.getPrincipal().toString()],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isCallerAdmin();
    },
    enabled: !!actor && !isFetching && !!identity,
  });
}
