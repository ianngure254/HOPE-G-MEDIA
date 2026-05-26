/**
 * Returns a placeholder image URL for a given size.
 * Replace with real asset paths once images are uploaded.
 */
export function getPlaceholder(width: number, height: number, seed?: string): string {
  const s = seed ?? 'default'
  return `https://picsum.photos/seed/${s}/${width}/${height}`
}

/**
 * Generates srcset string for responsive images (future WebP support).
 */
export function buildSrcSet(baseUrl: string, widths: number[]): string {
  return widths.map((w) => `${baseUrl} ${w}w`).join(', ')
}
