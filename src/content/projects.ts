import data from "./projects.json";

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

export const projects = data as Project[];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
