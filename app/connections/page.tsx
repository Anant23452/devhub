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


    return (
        <div className="min-h-screen bg-slate-50 px-4 py-16 dark:bg-slate-950 sm:px-6 lg:px-8">
            <h1 className="text-center text-4xl">My connections</h1>
           
        </div>
    )
}