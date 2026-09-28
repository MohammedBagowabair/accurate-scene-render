import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Prefix a public-asset path with Vite's base URL (needed for GitHub Pages). */
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL || "/";
  if (/^https?:\/\//i.test(path)) return path;
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${normalized}`;
}
