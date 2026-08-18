import Image from "next/image";

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-zs-black text-zs-white">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Page Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-zs-green">
            &gt;_ whoami
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Meet the Team
          </h1>

          <p className="mt-4 text-lg leading-8 text-zs-muted">
            The people behind ZeroStack Labs — building, breaking, learning, and
            documenting what happens along the way.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Alex */}
          <article className="rounded-xl border border-zs-green/30 bg-zs-panel p-6 shadow-lg shadow-zs-green/5 sm:p-8">
            <header className="border-b border-zs-green/20 pb-6">
              <div className="flex items-start justify-between gap-6">
                {/* Name / Role */}
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zs-green">
                    &gt; ALEX_PULIDO
                  </p>

                  <h2 className="mt-2 text-3xl font-bold">Alex Pulido</h2>

                  <p className="mt-1 font-semibold text-zs-green">Co-Founder</p>
                </div>

                {/* Headshot */}
                <div className="h-32 w-32 shrink-0 overflow-hidden rounded-full border-2 border-zs-green/50 shadow-lg shadow-zs-green/10">
                  <Image
                    src="/img/team/Alex.jpg"
                    alt="Alex Pulido"
                    width={160}
                    height={160}
                    className="h-full w-full scale-110 object-cover"
                  />
                </div>
              </div>

              <p className="mt-4 leading-7 text-zs-white/80">
                Bio coming soon.
              </p>
            </header>

            <div className="mt-6 space-y-8">
              {/* Education */}
              <section>
                <h3 className="mb-3 text-lg font-bold text-zs-green">
                  Education
                </h3>

                <ul className="space-y-3 text-zs-white/80">
                  <li>
                    <span className="font-semibold text-zs-white">
                      California State University, Chico
                    </span>
                    <br />
                    B.S. Computer Science — In Progress
                  </li>

                  <li>
                    <span className="font-semibold text-zs-white">
                      Butte College
                    </span>
                    <br />
                    A.S. Computer Programming with Honors.
                  </li>
                </ul>
              </section>
              {/* Awards */}
              <section>
                <h3 className="mb-3 text-lg font-bold text-zs-green">Awards</h3>

                <ul className="list-disc space-y-2 pl-5 text-zs-white/80 marker:text-zs-green">
                  <li>Coming soon!</li>
                </ul>
              </section>

              <section>
                <h3 className="mb-3 text-lg font-bold text-zs-green">
                  Highlights
                </h3>

                <p className="text-zs-muted">
                  Projects and accomplishments coming soon.
                </p>
              </section>

              <section>
                <h3 className="mb-3 text-lg font-bold text-zs-green">
                  Focus Areas
                </h3>

                <p className="text-zs-muted">
                  Technical interests coming soon.
                </p>
              </section>
            </div>
          </article>

          {/* Robby */}
          <article className="rounded-xl border border-zs-green/30 bg-zs-panel p-6 shadow-lg shadow-zs-green/5 sm:p-8">
            <header className="border-b border-zs-green/20 pb-6">
              <div className="flex items-start justify-between gap-6">
                {/* Name / Role */}
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zs-green">
                    &gt; Robby_Wideman
                  </p>

                  <h2 className="mt-2 text-3xl font-bold">Robby Wideman</h2>

                  <p className="mt-1 font-semibold text-zs-green">Co-Founder</p>
                </div>

                {/* Headshot */}
                <div className="h-32 w-32 shrink-0 overflow-hidden rounded-full border-2 border-zs-green/50 shadow-lg shadow-zs-green/10">
                  <Image
                    src="/img/team/Robby.jpg"
                    alt="Robby Wideman"
                    width={160}
                    height={160}
                    className="h-full w-full scale-110 object-cover"
                  />
                </div>
              </div>

              <p className="mt-4 leading-7 text-zs-white/80">
                Cybersecurity student, developer, and lifelong tinkerer with a
                background in investigations, leadership, and technical
                problem-solving. Robby&apos;s work at ZeroStack Labs focuses on
                cybersecurity, homelabs, networking, software development, and
                exploring practical applications of emerging technologies.
              </p>
            </header>

            <div className="mt-6 space-y-8">
              {/* Education */}
              <section>
                <h3 className="mb-3 text-lg font-bold text-zs-green">
                  Education
                </h3>

                <ul className="space-y-3 text-zs-white/80">
                  <li>
                    <span className="font-semibold text-zs-white">
                      Western Governors University
                    </span>
                    <br />
                    B.S. Cybersecurity &amp; Information Assurance — In Progress
                  </li>

                  <li>
                    <span className="font-semibold text-zs-white">
                      Butte College
                    </span>
                    <br />
                    A.S. Cybersecurity Practitioner with Honors
                    <br />
                    A.S. Law Enforcement Academy - Basic with Honors
                  </li>
                </ul>
              </section>

              {/* Awards */}
              <section>
                <h3 className="mb-3 text-lg font-bold text-zs-green">Awards</h3>

                <ul className="list-disc space-y-2 pl-5 text-zs-white/80 marker:text-zs-green">
                  <li>
                    National Cyber League Top 500 Player, Fall 2026 Season
                  </li>
                  <li>Coca-Cola Academic Team Scholar - 2026</li>
                  <li>
                    California League of Community Colleges / Phi Theta Kappa
                    All California Team Academic Award Recipient
                  </li>
                </ul>
              </section>

              {/* Highlights */}
              <section>
                <h3 className="mb-3 text-lg font-bold text-zs-green">
                  Highlights
                </h3>

                <ul className="list-disc space-y-2 pl-5 text-zs-white/80 marker:text-zs-green">
                  <li>National Cyber League competitor</li>
                  <li>
                    CodePath cybersecurity, web development, and AI programs
                  </li>
                  <li>
                    Cybersecurity homelab and penetration-testing projects
                  </li>
                  <li>Web and software development projects</li>
                  <li>Technical and organizational leadership experience</li>
                </ul>
              </section>

              {/* Focus Areas */}
              <section>
                <h3 className="mb-3 text-lg font-bold text-zs-green">
                  Focus Areas
                </h3>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Cybersecurity",
                    "Networking",
                    "Homelabs",
                    "AI",
                    "Web Development",
                    "Python",
                    "Linux",
                    "Open Source",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-zs-green/30 bg-zs-green/5 px-3 py-1 text-sm text-zs-green"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
