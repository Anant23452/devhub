import { developers } from "@/data/developers";
import Link from "next/link";

type DeveloperProfilePageProps = {
  params: Promise<{
    username: string;
  }>;
};

export default async function DeveloperProfilePage({
  params,
}: DeveloperProfilePageProps) {
  const { username } = await params;

  const developer = developers.find(
    (dev) => dev.username === username
  );

  if (!developer) {
    return <h1>Developer not found</h1>;
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased py-16 px-6 sm:px-12 lg:px-24">
  <div className="max-w-5xl mx-auto space-y-16">
    
    {/* Profile Header */}
    <header className="border-b border-neutral-800 pb-12">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          {developer.name}
        </h1>
        <p className="text-base sm:text-lg font-mono text-emerald-400">
          @{developer.username}
        </p>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-neutral-400 text-sm sm:text-base">
        <span className="font-medium text-neutral-200">{developer.role}</span>
        <span aria-hidden="true" className="text-neutral-600">•</span>
        <span className="flex items-center gap-1.5">{developer.location}</span>
      </div>

      <p className="mt-6 text-neutral-300 text-lg leading-relaxed max-w-2xl">
        {developer.bio}
      </p>

      {/* Social / Portfolio Links */}
      <div className="mt-6 flex items-center gap-4">
        <a
          href={developer.github}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-sm font-medium transition-colors border border-neutral-700"
          target="_blank" rel="noreferrer"
        >
          GitHub
        </a>
        <a
          target="_blank"
          href={developer.linkedin}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-sm font-medium transition-colors border border-neutral-700"
          rel="norferror"
        >
          LinkedIn
        </a>
      </div>
    </header>

    {/* Skills & Interests Grid */}
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <h2 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-4">
          Core Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {developer.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-xs sm:text-sm font-medium rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-4">
          Interests & Focus
        </h2>
        <div className="flex flex-wrap gap-2">
          {developer.interests.map((interest) => (
            <span
              key={interest}
              className="px-3 py-1 text-xs sm:text-sm font-medium rounded-md bg-emerald-950/40 border border-emerald-800/40 text-emerald-300"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* Looking For Callout */}
    <section className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 sm:p-8 backdrop-blur-sm">
      <h2 className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">
        Looking For
      </h2>
      <p className="text-neutral-200 text-base leading-relaxed">
        {developer.lookingFor}
      </p>
    </section>

    {/* Featured Projects */}
    <section className="space-y-6">
      <h2 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {developer.projects.map((project) => (
          <div
            key={project.id}
            className="group relative flex flex-col justify-between rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 hover:border-neutral-700 transition-colors"
          >
            <div>
              <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-neutral-800/60">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 text-xs font-mono rounded bg-neutral-800 text-neutral-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

  </div>
</main>
  );
}