"use client"

import { developers } from "@/data/developers";

type Developer = {
  id: number;
  name: string;
  username: string;
  role: string;
  bio: string;
  skills: string[];
};
type DeveloperCardProps = {
  developer: Developer;
  onLike: () => void;
  onPass: () => void;
};
export default function DeveloperCard({
    developer,
    onLike,
    onPass
}:DeveloperCardProps){
    
    return(
      <article className=" mx-auto overflow-hidden rounded-xl text p-6 shadow-lg border border-gray-100 transition-all hover:shadow-xl">
  {/* Name and Username Section */}
  <header className="mb-4">
    <h2 className="text-2xl font-bold text-white-900 leading-tight">
      {developer.name}
    </h2>
    <p className="text-sm font-medium text-white-600">
      @{developer.username}
    </p>
  </header>

  {/* Role and Bio Section */}
  <div className="space-y-3">
    <h3 className="text-lg font-semibold text-gray-300">
      {developer.role}
    </h3>
    <p className="text-base text-gray-400 leading-relaxed italic">
      {developer.bio}
    </p>
  </div>

  {/* Skills Tags Section */}
  <div className="mt-6 flex flex-wrap gap-2">
    {developer.skills.map((skill) => (
      <span 
        key={skill}
        className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
      >
        {skill}
      </span>
    ))}
  </div>

  <div className="tinder-feature flex  mt-4 p-3 justify-evenly ">
    <button className="" onClick={onPass}>❌Pass</button>
    <button className="" onClick={onLike}>❤️Like</button>
  </div>
 
</article>

    )
}
