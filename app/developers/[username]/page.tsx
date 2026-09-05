import { developers } from "@/data/developers";
type DeveloperPage={
    params:{
        username:string;
    };
};
export default function DeveloperPage({params}:DeveloperPageProps){
    const developer= developers.find(dev=>dev.username===params.username);

}