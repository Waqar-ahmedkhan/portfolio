import Image from "next/image";
import memoji from "../assets/images/memoji-computer.png"
 export const HeroSection = () => {
  return <>
  <div className="py-32 flex justify-center ">
     <div className="flex flex-col">
      <Image src={memoji} height={200} width={200}  alt="its profile image" className=""/>
  

    
      <div className="py-1 px-2  flex flex-row justify-evenly align-middle items-center gap-2 bg-gray-700 text-white border rounded-full">
         <div className="h-3 w-3 rounded-full bg-green-500"></div>
         <div className="">
            im avaible to delivery your work

         </div>
      </div>
     </div>
  </div>
  </>
};
