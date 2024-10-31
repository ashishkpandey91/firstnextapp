  "use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Music Instructor",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Vocal Coach",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Instrument Specialist ",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "Music Theory Educator",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Performance Director",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="overflow-x-hidden relative w-full">
      <div className="flex flex-col justify-center py-4  items-center relative">
      <WavyBackground className="w-full">
      <p className="text-2xl w- md:text-4xl lg:text-7xl text-white font-bold text-center md:mt-20">
        Meet Our Instructors</p>
      <p className="text-base md:text-lg mt-4 text-white font-normal text-center">
        Discover the talented professionals who will guide your musical journey
      </p>
      <div className="flex justify-center items-center mt-20">
      <AnimatedTooltip key={people[0].id} items={people} />
      </div>
      </WavyBackground>
      </div>
    </div>
  );
}



  