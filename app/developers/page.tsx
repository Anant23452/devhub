import DeveloperCard from "@/components/DeveloperCard";
import { developers } from "@/data/developers";

export default function DevelopersPage() {
  return (
    <main>
      <h1>Discover Developers</h1>

      <p>
        Find developers, explore their skills,
        and discover people to build with.
      </p>

      <section>
        {developers.map((developer) => (
          <DeveloperCard
            key={developer.id}
            developer={developer}
          />
        ))}
      </section>
    </main>
  );
}