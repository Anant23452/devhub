import DeveloperCard from "@/components/DeveloperCard";
import { developers } from "@/data/developers";

export default function DevelopersPage() {
  return (
   <main className="min-h-screen bg-slate-50 px-4 py-16 dark:bg-slate-950 sm:px-6 lg:px-8">
  {/* Header Section */}
  <header className="mx-auto max-w-3xl text-center mb-16">
    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
      Discover Developers
    </h1>
    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
      Find skilled developers, explore their diverse tech stacks, 
      and connect with the right people to bring your next project to life.
    </p>
  </header>

  {/* Developers Grid Section */}
  <section className="mx-auto max-w-7xl">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {developers.map((developer) => (
        <div key={developer.id} className="h-full">
          <DeveloperCard developer={developer} />
        </div>
      ))}
    </div>
  </section>
</main>

  );
}