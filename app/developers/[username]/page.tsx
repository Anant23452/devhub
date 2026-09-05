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
    <main className="w-full h-screen  p-20 ">
   <section className="section-1">
       <h1 className="text-5xl font-bold">{developer.name}</h1>

      <p className="text-lg text-gray-600">@{developer.username}</p>

      <h2 className="text-2xl ">{developer.role}</h2>

      <p>{developer.bio}</p>

      <p>{developer.location}</p>
   </section>

      <section className="section-2">
        {developer.skills.map((skill) => (
          <span key={skill}>
            {skill}
          </span>
        ))}
      </section>


      <section className="section-3">
        {developer.interests.map((interest)=>(
          <span key={interest}>{interest}</span>
        ))}
      </section>

      <section className="section-4">
        <h2>Looking for</h2>
        <p>{developer.lookingFor} </p>

      </section>

      <section className="section-5">
        <h2>Projects</h2>
        {developer.projects.map((project)=>(
          <div key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description} </p>
            <div>
              {project.tech.map((tech)=>(
                <span key={tech}>{tech}</span>
              ))}
            </div>


          </div>
        ))}
      </section>
      <section className="section-6">
        <h1>
          Link
        </h1>
        <Link href={developer.github}>Github</Link>
        <Link href= {developer.linkedin}
      </section>
    </main>
  );
}