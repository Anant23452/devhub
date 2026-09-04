"use client"
 import {useState,useEffect}from "react";
    import { developers } from "@/data/developers";
export default function ConnectionsPage(){
   const [likedid,setLikedid]= useState<number[]>([]);
   
   useEffect(()=>{
    const savedLikes= localStorage.getItem("likedDeveloper")
    if(savedLikes){
        setLikedid(JSON.parse(savedLikes))

    }
   },[])
   const likedDevelopers = developers.filter((developer)=>likedid.includes(developer.id))



    return (
        <div className="min-h-screen bg-slate-50 px-4 py-16 dark:bg-slate-950 sm:px-6 lg:px-8">
            <h1 className="text-center text-4xl">My connections</h1>
            <div className="mt-8">
                {likedDevelopers.length===0?(
                    <p>NO connection yet</p>
                ):(
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {likedDevelopers.map((developer) => (
                           <article key={developer.id} className="">
                            <h2>{developer.name} </h2>
                            <p>{developer.role} </p>

                            <div>
                                {developer.skills.map((skill)=>(
                                    <span key={skill} className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                           </article>
                        ))}
                    </div>
                )}
            </div>
           
        </div>
    )
}