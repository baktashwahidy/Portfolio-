import { getProjectBySlug as findProject, projects } from "@/data/projects";

export function getPublishedProjects() {
  return projects;
}

export function getFeaturedProjects() {
  return projects.slice(0, 4);
}

export function getProjectBySlug(slug: string) {
  return findProject(slug);
}

export function getNextProject(slug: string) {
  const currentIndex = projects.findIndex((project) => project.slug === slug);
  if (currentIndex < 0) return projects[0];
  return projects[(currentIndex + 1) % projects.length];
}
