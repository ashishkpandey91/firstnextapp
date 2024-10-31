"use client";
import React from "react";
import feturedCourseData from "@/data/FeaturedCourse.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import Link from "next/link";
console.log(feturedCourseData);
interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

function FeaturedCourses() {
  const feturedCourses = feturedCourseData.courses.filter(
    (couse: Course) => couse.isFeatured
  );
  return (
    <div className="bg-slate-800 w-full py-8 px-2 mt-10 ">
      <p className="md:text-xl text-lg font-semibold text-center md:my-5 ">
        Featured Courese
      </p>
      <p className="text-lg md:text-4xl font-bold text-center my-5">
        Learn With The Best
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-3 place-items-center w-full items-center justify-center gap-5 ">
        {feturedCourses.map((course: Course) => (
          <div key={course.id} className="">
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 h-[460px] cursor-pointer">
              <Image
                src={course.image}
                alt={course.slug || "Course Image"}
                width={400}
                height={100}
                className="rounded-lg mb-2"
              />
              <h2>{`Instructor: ${course.instructor}`}</h2>
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                {`${course.title}`}
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {`${course.description}`}
              </p>
              <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                <span>See more</span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                  {`${course.price}`}
                </span>
              </button>
            </BackgroundGradient>
          </div>
        ))}
      </div>
     <Link href={"/all-courses"}><p className="mt-7 cursor-pointer mx-auto w-44 px-3 py-2 text-lg bg-gray-400 text-black rounded-md font-bold hover:bg-gray-300 text-center">
        See All Courses
      </p>
      </Link> 
    </div>
  );
}

export default FeaturedCourses;
