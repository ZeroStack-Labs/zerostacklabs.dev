import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zs-black text-zs-white">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-20 text-center">
        <div className="mb-6 rounded-full border border-zs-green/30 bg-zs-green/10 px-4 py-2 text-sm font-medium tracking-wide text-zs-green">
          Site under active development
        </div>

        <div className="relative w-full max-w-4xl py-8">
          <div className="absolute inset-x-20 top-1/2 h-32 -translate-y-1/2 rounded-full bg-zs-green/90 blur-3xl" />

          <Image
            src="/img/logo/newBanner.png"
            alt="ZeroStack Labs - Build. Break. Learn. Repeat."
            width={1546}
            height={423}
            priority
            className="relative z-10 h-auto w-full"
          />
        </div>

        <p className="mt-8 max-w-2xl text-base leading-7 text-zs-white sm:text-lg">
          ZeroStack Labs is an independent technology lab built around
          curiosity, experimentation, collaboration, and continuous learning.
        </p>

        <p className="mt-4 max-w-2xl text-base leading-7 text-zs-muted sm:text-lg">
          We explore cybersecurity, artificial intelligence, software and web
          development, networking, homelabs, open-source technologies, and
          whatever other technical rabbit holes catch our attention.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="https://github.com/ZeroStack-Labs"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-zs-green bg-zs-green px-6 py-3 font-semibold text-zs-black transition-transform duration-300 hover:scale-110 hover:bg-zs-green-dim"
          >
            Visit GitHub
          </Link>

          <Link
            href="https://www.youtube.com/@zerostacklabs10"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-zs-muted px-6 py-3 font-semibold text-zs-white transition duration-300 hover:scale-110 hover:border-zs-green hover:text-zs-green"
          >
            Visit YouTube
          </Link>
        </div>

        <div className="mt-14 max-w-xl border-t border-zs-panel pt-8">
          <h2 className="text-xl font-bold text-zs-green">
            The lab is still being built.
          </h2>

          <p className="mt-3 text-sm leading-6 text-zs-muted sm:text-base">
            We&apos;re actively developing the ZeroStack Labs website and
            organizing our projects, content, and resources. Check back soon as
            we continue building out the lab.
          </p>
        </div>
      </section>
    </main>
  );
}
