import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import { Spotlight } from "@/components/ui/Spotlight";
import {InfiniteMovingCardsDemo} from "@/components/TestMonial"
import {AnimatedTooltipPreview} from "@/components/MeetIntroctor"

export default function Home() {
  return (
    <main className="min-h-screen bg-black antialiased bg-grid-white/[0.02] flex flex-col items-center justify-center overflow-x-hidden">
      <div className="w-full md:w-2/4  rounded-md md:h-screen">
        <Spotlight
          className="-top-10 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <HeroSection />
      </div>
        <FeaturedCourses />
        <div className="w-full border-y-0-2">
        <InfiniteMovingCardsDemo/>
        </div>
        <div className="w-full max-w-full overflow-x-hidden">
          <AnimatedTooltipPreview />
        </div>
 
      
    </main>
  );
}
