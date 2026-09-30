import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getCwd } from "./getCwd";

export type SaintconMinibadgePost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  author?: string;
  tags?: string[];
  image?: string;
  order?: number;
};

export function getSaintconMinibadgePosts(): SaintconMinibadgePost[] {
  const contentDirectory = path.join(
    getCwd(),
    "src",
    "content",
    "saintcon-2026-minibadge",
  );

  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const files = fs.readdirSync(contentDirectory);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const fullPath = path.join(contentDirectory, file);

      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        description: data.description ?? "",
        author: data.author,
        tags: data.tags ?? [],
        image: data.image,
        order: data.order ?? 999,
      };
    })
    .sort((a, b) => {
      if (a.order !== b.order) {
        return a.order - b.order;
      }

      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}
