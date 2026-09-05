import { developers } from "@/data/developers";
type DeveloperPage={
    params:Promise<
    {
        username:string;
    }>
};
export default function DeveloperPage({params}:DeveloperPageProps){
    const developer= developers.find(dev=>dev.username===params.username);
    if(!developer){
        return <h1>Developer not found</h1>

    }
    return (
        <main  className=" mx-auto overflow-hidden rounded-xl text p-6 shadow-lg border border-gray-100 transition-all hover:shadow-xl">
            <h1>{developer.username} </h1>
            <p>{developer.name} </p>
            <h2>{developer.bio} </h2>
            {/* <p>{developer.location} </p> */}
            <div>
                {developer.skills.map((skill)=>(
                    <span key ={skill}>{skill} </span>
                ))}
            </div>

        </main>
    )

}