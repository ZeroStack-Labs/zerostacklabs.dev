import { getSaintconMinibadgePosts } from "@/lib/getSaintconMinibadgePosts";
import Image from "next/image";
import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";

export default function SaintconMinibadgePage() {
  const posts = getSaintconMinibadgePosts();

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Hero */}
      <section className="border-b border-[#2563FF]/35 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="max-w-4xl">
            <p
              className="font-mono text-sm uppercase tracking-[0.25em] mb-3 text-[#2563FF]"
              style={{
                textShadow: "0 0 5px rgba(37,99,255,0.35)",
              }}
            >
              ZeroStack Labs // Hardware // Open Source Project
            </p>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              SAINTCON 2026{" "}
              <span
                className="text-[#2563FF]"
                style={{
                  textShadow:
                    "0 0 4px rgba(37,99,255,0.55), 0 0 10px rgba(37,99,255,0.25)",
                }}
              >
                MiniBadge
              </span>
            </h1>

            <p className="mt-6 text-lg text-zinc-300 leading-relaxed max-w-3xl">
              The SAINTCON 2026 MiniBadge is a ZeroStack Labs hardware project
              exploring electronics design, PCB development, embedded
              programming, fabrication, and the inevitable process of turning an
              idea into something that actually lights up. Literally.
            </p>
            <br></br>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/ZeroStack-Labs/saintcon-2026-minibadge"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:scale-105 text-xl"
              >
                <FaGithubSquare className="text-blue-600" />
                Project Repo.
              </a>
            </div>
            <p className="mt-4 font-mono text-sm text-zinc-500">
              Design // Build // Program // Iterate
            </p>
          </div>
        </div>
      </section>

      {/* Project Updates */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-end justify-between border-b border-zinc-800 pb-4 mb-8">
          <div>
            <p
              className="font-mono text-xs uppercase tracking-[0.2em] text-[#2563FF]"
              style={{
                textShadow: "0 0 4px rgba(37,99,255,0.3)",
              }}
            >
              Development Log
            </p>

            <h2 className="text-3xl font-bold mt-1">Project Updates</h2>
          </div>

          <p className="hidden sm:block font-mono text-xs text-zinc-500">
            {posts.length} {posts.length === 1 ? "entry" : "entries"}
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/saintcon-2026-minibadge/posts/${post.slug}`}
                className="
                  group
                  bg-zinc-900
                  border border-zinc-800
                  rounded-lg
                  overflow-hidden
                  transition-all duration-300
                  hover:border-[#2563FF]/80
                  hover:-translate-y-1
                  hover:shadow-[0_0_16px_rgba(37,99,255,0.14)]
                "
              >
                {post.image && (
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 to-transparent" />
                  </div>
                )}

                <div className="p-5">
                  <h3
                    className="
                      text-xl
                      font-bold
                      text-zinc-100
                      transition-colors
                      group-hover:text-[#2563FF]
                    "
                  >
                    {post.title}
                  </h3>

                  <p className="text-zinc-400 mt-2 leading-relaxed">
                    {post.description}
                  </p>

                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="
                            font-mono
                            text-xs
                            border border-[#2563FF]/40
                            text-[#60A5FA]
                            px-2
                            py-1
                            rounded
                          "
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-5 pt-4 border-t border-zinc-800">
                    <span
                      className="
                        font-mono
                        text-xs
                        text-zinc-500
                        transition-colors
                        group-hover:text-[#2563FF]
                      "
                    >
                      Read entry →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-zinc-700 rounded-lg p-10 text-center">
            <p className="font-mono text-zinc-500">
              No SAINTCON 2026 MiniBadge entries published yet.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
