import Link from "next/link";
import { Button } from "./ui/moving-border";
import { Spotlight } from "./ui/Spotlight";
import NavBar from "@/components/NavBar";

function HeroSection() {
  return (
    <div className="relative h-auto md:h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md mx-auto py-10 md:py-0 bg-black">
      <NavBar />
      
      {/* Spotlight Background */}
      <Spotlight
        className="absolute top-1/4 left-0 md:left-20 lg:left-40 -translate-x-0"
        fill="blue"
      /> {/* Blue spotlight aligned to left */}

      {/* Content */}
      <div className="relative z-10 w-full text-center p-4">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
          Master the art of music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into our comprehensive music courses and transform your musical journey today. 
          Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.
        </p>
        <div className="mt-6">
          <Link href="/courses">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border border-neutral-200 dark:border-slate-800"
            >
              Explore courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
