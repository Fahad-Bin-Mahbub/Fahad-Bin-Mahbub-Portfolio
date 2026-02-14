import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes safely */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a URL with Next's basePath (for GitHub Pages project sites). */
export function withBasePath(path: string) {
  if (process.env.NEXT_PUBLIC_BASE_PATH) {
    return `${process.env.NEXT_PUBLIC_BASE_PATH}${path}`;
  }
  return path;
}

export function getTagColor(tag: string): string {
  const lower = tag.toLowerCase();
  
  // Frameworks & Libraries (Blue/Cyan)
  if (["react", "next.js", "typescript", "javascript", "react native", "redux", "redux toolkit"].some(k => lower.includes(k))) {
    return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
  }
  
  // Backend & Database (Green/Emerald)
  if (["node", "node.js", "express", "mongodb", "postgresql", "mysql", "prisma", "spring boot", "java"].some(k => lower.includes(k))) {
    return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
  }
  
  // Tools & Infrastructure (Orange/Amber)
  if (["aws", "docker", "git", "firebase"].some(k => lower.includes(k))) {
    return "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20";
  }
  
  // Concepts & AI (Purple/Violet)
  if (["ai", "nlp", "iot", "arduino", "security", "jwt", "auth", ""].some(k => lower.includes(k))) {
    return "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20";
  }

  // Default (Gray)
  return "bg-muted text-muted-foreground border-border";
}
