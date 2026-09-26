import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/content/project-foothold");

export function getAllProjectFootholdPosts() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const filenames = fs
    .readdirSync(postsDirectory)
    .filter((filename) => filename.endsWith(".md"));

  const posts = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, filename);

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title ?? slug,
      description: data.description ?? "",
      date: data.date ?? "",
      updated: data.updated ?? null,
      image: data.image ?? null,
      tags: data.tags ?? [],
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
