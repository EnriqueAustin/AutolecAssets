const autolecImages = import.meta.glob("../assets/autolec/*", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const galleryImages = import.meta.glob("../assets/gallery/*", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

function byName(collection: Record<string, string>, fileName: string) {
  const entry = Object.entries(collection).find(([path]) => path.endsWith(`/${fileName}`));

  if (!entry) {
    throw new Error(`Missing asset: ${fileName}`);
  }

  return entry[1];
}

export const autolecAsset = (fileName: string) => byName(autolecImages, fileName);
export const galleryAsset = (fileName: string) => byName(galleryImages, fileName);
