import Projects from "@/components/Projects";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";

export default function Home() {
  return (
    <div>
      <Header/>     
     <HeroSection/> 
     <Projects/>                          
    </div>
  );
}
