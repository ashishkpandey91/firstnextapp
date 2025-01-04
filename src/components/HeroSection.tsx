import React from "react";

function HeroSection() {
  return (
    <div className="w-full flex flex-col justify-center items-center h-[500px] md:mt-8 md:h-screen">
      <h1 className=" text-2xl md:text-5xl font-bold mt-12 md:mt-0">
        Master the art of music
      </h1>
      <p className="text-center px-4 md:px-40 py-3 md:text-lg text-base ">
        Unlock your musical potential and embark on a journey to master the art
        of music. This comprehensive guide explores the fundamental techniques,
        theories, and practices that form the backbone of musical expertise.{" "}
      </p>
      <button className=" my-4 px-5 py-3 text-xl bg-gray-400 text-black rounded-md font-bold hover:bg-gray-300">
        Explore Courses
      </button>
    </div>
  );
}

export default HeroSection;
