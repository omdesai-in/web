export function assetPath(relativePath: string): string {
  const cleanPath = relativePath.replace(/^\/+/, "");
  return `${import.meta.env.BASE_URL}assets/${cleanPath}`;
}
