import { developers } from "@/data/developers";

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
    <main className="w-full ">
      <h1>{developer.name}</h1>

      <p>@{developer.username}</p>

      <h2>{developer.role}</h2>

      <p>{developer.bio}</p>

      <p>{developer.location}</p>

      <div>
        {developer.skills.map((skill) => (
          <span key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </main>
  );
}