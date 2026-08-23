import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   
      <main className="flex  w-full h-screen  flex-col justify-center items-center  bg-white dark:bg-black sm:items-start">
        <section className="flex  my-5 bg-blue-500 h-screen items-center flex-col justify-center">
          <h2>DevHum</h2>
        <h1>Learn.Build.Connect</h1>

        <p>
          A community where developers share knowledge,
          discover talented developers, and find people
          to build with.
        </p>
        <Link href="/developers" >Explore Developers</Link>
        <Link href="/blog" >Read Dev Blog</Link>
        </section>
       
      </main>
  
  );
}
