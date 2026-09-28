import data from "./projects.json";
import { assetUrl } from "@/lib/utils";

export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  cover: string;
  excerpt: string;
  intro: string;
  scope: string[];
  story: string[];
  gallery: string[];
};

function withAssetUrls(project: Project): Project {
  return {
    ...project,
    cover: assetUrl(project.cover),
    gallery: project.gallery.map(assetUrl),
  };
}

export const projects = (data as Project[]).map(withAssetUrls);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
