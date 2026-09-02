import type { ImageMetadata } from 'astro';

const imageFiles = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/*.{jpeg,jpg,png}',
  { eager: true }
);

const imageMap = new Map<string, ImageMetadata>();
for (const path in imageFiles) {
  const filename = path.split('/').pop()!;
  imageMap.set(filename, imageFiles[path].default);
}

export function getImage(filename: string): ImageMetadata {
  const img = imageMap.get(filename);
  if (!img) {
    throw new Error(`Image not found in src/assets/images: ${filename}`);
  }
  return img;
}

export function hasImage(filename: string): boolean {
  return imageMap.has(filename);
}
