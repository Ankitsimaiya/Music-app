'use client'

import Link from "next/link";
import courseData from "../data/music_courses.json"
import { BackgroundGradient } from "./ui/background-gradient";

interface Course  {
    id: number,
        title: string,
        slug: string,
        description:string,
        price: number,
        instructor: string,
        isFeatured: boolean,
}


function FeaturedCourses() {
   const featuredCourses=   courseData.courses.filter((courses:Course) => courses.isFeatured)
  return (
    <>
      <div className="py-12 bg-gray-900">
        <div >
            <div className="text-center " >
                <h2 className="text-base text-teal-600 font-sembold tracking-wide uppercase" > Features Courses</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold-tight text-white sm:text-4xl " >Learn With the Best </p>
            </div>
        </div>
        <div className="mt-10 mx-5">
             <div className="grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 gap-8 justify-center" >
                {featuredCourses.map((courses:Course)=> (
                    <div key={courses.id} className="flex justify-center" >
                        <BackgroundGradient className="flex flex-col  rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm " >
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow" >
                                <p className="text-xl text-slate-200 m-2 " >{courses.title} </p>
                                <p className="text-slate-500 my-2" >{courses.description}</p>
                                <Link  href={`/courses/${courses.slug}`} >
                                    Learn More
                                </Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                 
                ))}
             </div>
        </div>
        <div className="mt-20 text-center  ">
            <Link className="p-2 bg-slate-400 text-black rounded-md " href={'/courses'} >View All Courses</Link>
        </div>
      </div>
    </>
  );
}

export default FeaturedCourses;
