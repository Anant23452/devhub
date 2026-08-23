import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   
     <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 dark:bg-slate-950">
  <section className="mx-auto flex max-w-4xl flex-col items-center py-16 text-center md:py-24">
    
    {/* Headline Section */}
    <div className="space-y-4">
      <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
        DevHum
      </h2>
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
        Learn.Build.Connect
      </h1>
      <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400 md:text-xl leading-relaxed">
        A community where developers share knowledge, discover talented creators, 
        and find partners to build the next big thing.
      </p>
    </div>

    {/* Call to Action Buttons */}
    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
      <Link 
        href="/developers" 
        className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg "
      >
        Explore Developers
      </Link>
      <Link 
        href="/blog" 
        className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-all hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
      >
        Read Dev Blog
      </Link>
    </div>

  </section>
</main>

  
  );
}
