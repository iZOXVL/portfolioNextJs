import React from 'react'
import Link from 'next/link';

// react icons
import {
    RiYoutubeFill,
    RiInstagramFill,
    RiTwitterFill,
    RiLinkedinFill,
    RiDribbbleFill,
    RiGithubFill,
  } from "react-icons/ri";

const SocialIcons = () => {
  return (
     <div className="flex gap-4 lg:gap-6 pr-4">
     <Link href={""} className="bg-[#08D9D6] p-2 text-primary text-lg rounded-full rounded-bl-none hover:bg-white hover:text-secondary hover:-translate-y-1 transition-all duration-500 ">
       <RiYoutubeFill />
     </Link>
     <Link href={""} className="bg-[#F08A5D] p-2 text-primary text-lg rounded-full rounded-bl-none hover:bg-white hover:text-secondary hover:-translate-y-1 transition-all duration-500 ">
       <RiInstagramFill />
     </Link>
     <Link href={""} className="bg-[#FF2E63] p-2 text-primary text-lg rounded-full rounded-bl-none hover:bg-white hover:text-secondary hover:-translate-y-1 transition-all duration-500 ">
       <RiTwitterFill />
     </Link>
     <Link href={""} className="bg-[#EAEAEA] p-2 text-primary text-lg rounded-full rounded-bl-none hover:bg-white hover:text-secondary hover:-translate-y-1 transition-all duration-500 ">
       <RiLinkedinFill />
     </Link>
     <Link href={""} className="bg-[#F9ED69] p-2 text-primary text-lg rounded-full rounded-bl-none hover:bg-white hover:text-secondary hover:-translate-y-1 transition-all duration-500 ">
       <RiDribbbleFill />
     </Link>
     <Link href={""} className="bg-[#5272F2] p-2 text-primary text-lg rounded-full rounded-bl-none hover:bg-white hover:text-secondary hover:-translate-y-1 transition-all duration-500 ">
       <RiGithubFill />
     </Link>
   </div>
  )
}

export default SocialIcons