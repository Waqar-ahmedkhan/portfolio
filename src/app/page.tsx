
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import TiltedScrollingTape from "@/sections/Tape";

export default function Home() {
  return (
    <div>
      <Header/>     
     <HeroSection/> 
     <ProjectsSection/>  
     <TiltedScrollingTape/>

    </div>
  );
}
