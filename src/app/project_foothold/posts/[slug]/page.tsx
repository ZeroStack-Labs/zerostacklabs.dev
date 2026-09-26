/* eslint-env node */

import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";
import { getCwd } from "@/lib/getCwd";
import { formatDateLong } from "@/lib/formatDate";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  const postsDir = path.join(getCwd(), "src/content/project-foothold");

  const filenames = fs
    .readdirSync(postsDir)
    .filter((filename) => filename.endsWith(".md"));

  const slugs = filenames.map((filename) => filename.replace(/\.md$/, ""));

  return slugs.map((slug) => ({ slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const filePath = path.join(
    getCwd(),
    "src/content/project-foothold",
    `${slug}.md`,
  );

  if (!fs.existsSync(filePath)) {
    return notFound();
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContents);

  const processedContent = await remark()
    .use(remarkGfm)
    .use(html, { sanitize: false })
    .process(content);

  const contentHtml = processedContent.toString();

  const wordCount = content.trim().split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <article className="max-w-5xl mx-auto px-6 py-12">
        {/* Back Link */}
        <Link
          href="/project_foothold"
          className="inline-flex items-center font-mono text-sm text-zinc-500 hover:text-orange-500 transition-colors mb-8"
        >
          ← Project Foothold
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-500 mb-3">
            Project Foothold // Development Log
          </p>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {data.title}
          </h1>

          <div className="flex flex-wrap gap-x-3 gap-y-2 mt-5 font-mono text-xs text-zinc-500">
            <span>Published {formatDateLong(data.date)}</span>

            <span className="text-orange-500">/</span>

            <span>{readingTime} min read</span>

            {data?.updated && (
              <>
                <span className="text-orange-500">/</span>

                <span>Updated {formatDateLong(data.updated)}</span>
              </>
            )}
          </div>

          {data.tags && (
            <div className="flex flex-wrap gap-2 mt-5">
              {data.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="font-mono text-xs border border-orange-500/40 text-orange-400 px-2 py-1 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Hero Image */}
        {data?.image && (
          <div className="border border-zinc-800 rounded-lg overflow-hidden mb-10">
            <Image
              src={data.image}
              alt={data.title}
              width={1200}
              height={675}
              className="w-full max-h-[600px] object-cover"
              priority
            />
          </div>
        )}

        {/* Article */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 md:p-10">
          <div
            className="
              prose
              prose-invert
              prose-lg
              max-w-none

              prose-headings:text-zs-orange
              prose-headings:font-bold

              prose-h2:border-b
              prose-h2:border-zinc-800
              prose-h2:pb-2
              prose-h2:mt-10

              prose-p:text-zinc-300
              prose-p:leading-relaxed

              prose-strong:text-zinc-100

              prose-code:text-orange-300
              prose-code:bg-zinc-950
              prose-code:px-1
              prose-code:py-0.5
              prose-code:rounded

              prose-pre:bg-zinc-950
              prose-pre:border
              prose-pre:border-zinc-800

              prose-li:text-zinc-300

              prose-blockquote:border-orange-500
              prose-blockquote:text-zinc-400
            "
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>

        {/* Footer */}
        <footer className="mt-10 pt-6 border-t border-zinc-800">
          <Link
            href="/project_foothold"
            className="font-mono text-sm text-zinc-500 hover:text-orange-500 transition-colors"
          >
            ← Back to Project Foothold
          </Link>
        </footer>
      </article>
    </main>
  );
}
