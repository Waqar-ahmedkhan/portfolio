import React from 'react'
import EarthIcon from "../assets/icons/earth.png";
import Mars from "../assets/icons/mars.png";
import Mercury from "../assets/icons/mercury.png";
import HeroOrbit from "@/components/HeroOrbit";
import StarIcon from "../assets/icons/star.svg";
import SpeckleIcon from "../assets/icons/sparkle.svg"
import Image from 'next/image';

function SolarSystem() {
  return (
    <>
{/* Earth */}
  <HeroOrbit size={760} rotate={-45} duration={100}>
  <Image src={EarthIcon} alt="Earth icon" width={90} height={90} className='z-30' />
</HeroOrbit>

{/* Mercury */}
<HeroOrbit size={600} rotate={90} duration={90}>
  <Image src={Mercury} alt="Mercury icon" width={90} height={90}  className='z-30'/>
</HeroOrbit>

{/* Mars */}
<HeroOrbit size={950} rotate={-30} duration={190}>
  <Image src={Mars} alt="Mars icon" width={110} height={110} className='z-30' />
</HeroOrbit>

{/* Stars */}
<HeroOrbit size={650} rotate={-60} duration={500}>
  <StarIcon className="text-red-500 size-15" />
</HeroOrbit>

<HeroOrbit size={350} rotate={-60} duration={500}>
  <StarIcon className="text-indigo-500 size-15" />
</HeroOrbit>

<HeroOrbit size={970} rotate={-60} duration={500}>
  <StarIcon className="text-red-500 size-15" />
</HeroOrbit>

<HeroOrbit size={200} rotate={-60} duration={500}>
  <StarIcon className="text-lime-500 size-15" />
</HeroOrbit>

<HeroOrbit size={540} rotate={-60} duration={500}>
  <StarIcon className="text-white size-15" />
</HeroOrbit>

<HeroOrbit size={430} rotate={150} duration={3000}>
  <StarIcon className="text-emerald-500 size-15" />
</HeroOrbit>

<HeroOrbit size={900} rotate={-45} duration={4000}>
  <StarIcon className="text-orange-500 size-15" />
</HeroOrbit>

<HeroOrbit size={1100} rotate={-90} duration={500}>
  <StarIcon className="text-emerald-500 size-15" />
</HeroOrbit>

<HeroOrbit size={700} rotate={78} duration={1000}>
  <SpeckleIcon className="text-yellow-400 size-10" />
</HeroOrbit>
<HeroOrbit size={400} rotate={-28} duration={1000}>
  <SpeckleIcon className="text-yellow-400 size-15" />
</HeroOrbit>
<HeroOrbit size={1000} rotate={-98} duration={1000}>
  <SpeckleIcon className="text-yellow-400 size-15" />
</HeroOrbit>





<HeroOrbit size={1200} rotate={78} duration={1000}>
  <SpeckleIcon className="text-yellow-400 size-10" />
</HeroOrbit>
<HeroOrbit size={1100} rotate={-28} duration={1000}>
  <SpeckleIcon className="text-yellow-400 size-15" />
</HeroOrbit>
<HeroOrbit size={900} rotate={-98} duration={1000}>
  <SpeckleIcon className="text-yellow-400 size-15" />
</HeroOrbit>



{/* Extra Stars */}
<HeroOrbit size={550} rotate={30} duration={600}>
  <StarIcon className="text-yellow-400 size-15" />
</HeroOrbit>

<HeroOrbit size={750} rotate={100} duration={700}>
  <StarIcon className="text-blue-400 size-15" />
</HeroOrbit>

<HeroOrbit size={300} rotate={45} duration={400}>
  <StarIcon className="text-red-500 size-15" />
</HeroOrbit>
</>
)
}

export default SolarSystem