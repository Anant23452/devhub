'use client'
import { useState } from "react";

import DeveloperCard from "@/components/DeveloperCard";
import { developers } from "@/data/developers";

export default function DevelopersPage() {
  const [currIndex,setCurrIndex]= useState(0);
  const currDeveloper = developers[currIndex];
  //for saved and build connnection 
  const[likeDeveloper,setLikedDeveloper]= useState<number[]>([]);
  const handleLike = ()=>{
    setLikedDeveloper((prev)=>[
      ...prev,
      currDeveloper.id,
    ])
    setCurrIndex((prev)=>prev+1)

  }
  const handlePass = ()=>{
    setCurrIndex((prev)=>prev+1)
  }
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 dark:bg-slate-950 sm:px-6 lg:px-8">
      {/* Header Section */}
      <header className="mx-auto max-w-3xl text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Discover Developers
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Find skilled developers, explore their diverse tech stacks, and
          connect with the right people to bring your next project to life.
        </p>
      </header>

        {
          currDeveloper?(
            <DeveloperCard
            developer={currDeveloper}
            onLike={handleLike}
            onPass={handlePass}

            
            />
          ):(
            <p>NO more Developer Exist</p>
          )
        }
        <p>Liked Developer :{likeDeveloper.length} </p>
    </main>
  );
}
