"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="border-b-2 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden h-96">
      <h1 className="text-center mb-14 text-lg md:text-4xl font-bold">
        Here Our Harmony: Voices of Success
      </h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Harmony is not a distant melody but a rhythm we create every day, where our success meets our purpose.",
    name: "Ava Summers",
    title: "Author, 'The Melody of Success'",
  },
  {
    quote:
      "True success lies in the strength to rise after each fall, to sing our unique song in a world full of echoes.",
    name: "Liam Hart",
    title: "Motivational Speaker, 'Echoes of Triumph'",
  },
  {
    quote:
      "Each dream we chase becomes part of the symphony of life, a note of resilience and courage.",
    name: "Maya Lynn",
    title: "Visionary, 'Symphony of Dreams'",
  },
  {
    quote:
      "When we align our purpose with passion, harmony flows like a river toward the sea of success.",
    name: "Oliver Gray",
    title: "Life Coach, 'Journey to Harmony'",
  },
  {
    quote:
      "In every challenge, there is a chance to tune our skills and bring forth the harmony within.",
    name: "Sophia Chen",
    title: "Entrepreneur, 'Creating Inner Harmony'",
  },
];
