export type Developer = {
  id: number;
  name: string;
  username: string;
  role: string;
  bio: string;
  location: string;
  skills: string[];

  github: string;
  linkedin: string;

  interests: string[];

  lookingFor: string;

  projects: {
    id: number;
    title: string;
    description: string;
    tech: string[];
  }[];
};