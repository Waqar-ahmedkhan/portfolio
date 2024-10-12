
import About from "@/sections/About";
import Footer from "@/sections/Footer";
import { Header }  from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import TiltedScrollingTape from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";

export default function Home() {
  return (
    <div>
      <Header/>     
     <HeroSection/> 
     <ProjectsSection/>  
   <TiltedScrollingTape/>
   
   <TestimonialsSection/>
   <About/>
   <Footer/>

    </div>
  );
}
