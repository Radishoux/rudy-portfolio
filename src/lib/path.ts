/**
 * Prefix a public asset path with the Next.js basePath.
 * Required for static file links (<a href>) which Next.js does NOT
 * automatically rewrite (unlike <Link> and <Image>).
 */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path}`;
}
