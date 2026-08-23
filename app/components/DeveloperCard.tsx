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
            <h2>{developer.name}</h2>
            <p>@{developer.username} </p>
            <h3>{developer.role} </h3>
            <p>{developer.bio} </p>
            <div className="">
                {developer.skills.map(skill)=>(
                    <span key={skill} className="key">
                        {skill}
                        

                    </span>
                )}
            </div>

        </article>
    )
}
