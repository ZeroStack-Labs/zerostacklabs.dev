import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-20 text-center">
        <div className="mb-6 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-medium tracking-wide text-green-400">
          Site under active development
        </div>

        <div className="relative w-full max-w-4xl py-8">
          <div className="absolute inset-x-20 top-1/2 h-32 -translate-y-1/2 rounded-full bg-green-400/30 blur-3xl" />

          <Image
            src="/img/logo/slimBanner.png"
            alt="ZeroStack Labs - Build. Break. Learn. Repeat."
            width={1546}
            height={423}
            priority
            className="relative z-10 h-auto w-full"
          />
        </div>

        <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
          ZeroStack Labs is an independent technology lab built around
          curiosity, experimentation, collaboration, and continuous learning.
        </p>

        <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
          We explore cybersecurity, artificial intelligence, software and web
          development, networking, homelabs, open-source technologies, and
          whatever other technical rabbit holes catch our attention.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="https://github.com/ZeroStack-Labs"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-green-500 bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400"
          >
            Visit GitHub
          </Link>

          <Link
            href="https://www.youtube.com/@zerostack_labs"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-zinc-700 px-6 py-3 font-semibold text-white transition hover:border-green-500 hover:text-green-400"
          >
            Visit YouTube
          </Link>
        </div>

        <div className="mt-14 max-w-xl border-t border-zinc-800 pt-8">
          <h2 className="text-xl font-bold text-green-400">
            The lab is still being built.
          </h2>

          <p className="mt-3 text-sm leading-6 text-zinc-500 sm:text-base">
            We&apos;re actively developing the ZeroStack Labs website and
            organizing our projects, content, and resources. Check back soon as
            we continue building out the lab.
          </p>
        </div>

        <footer className="mt-16 text-sm text-zinc-600">
          © 2026 ZeroStack Labs
        </footer>
      </section>
    </main>
  );
}
