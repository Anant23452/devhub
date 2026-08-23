type Developer = {
  id: number;
  name: string;
  username: string;
  role: string;
  bio: string;
  skills: string[];
};
type DeveloperCardProps={
    developer:Developer
}
export default function DeveloperCard({
    developer,
}:DeveloperCardProps){
    return(
        <article>

            
        </article>
    )
}
