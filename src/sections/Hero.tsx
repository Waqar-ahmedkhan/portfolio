import Image from "next/image";
import memoji from "../assets/images/memoji-computer.png"
 export const HeroSection = () => {
  return <>
  <div className="py-32 flex justify-center ">
     <div className="flex flex-col">
      <Image src={memoji} height={200} width={200}  alt="its profile image" className=""/>
      <div>
         <li className=""> the person avaiable here </li>
      </div>
     </div>
  </div>
  </>
};
