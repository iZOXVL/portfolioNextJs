import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter"
import SocialIcons from "@/components/SocialIcons";
import { fadeIn } from "@/components/variants";

const motionLink = motion(Link);

const Home = () => {
  return (
    <section className="padding-container max-container page flex flex-col gap-4 flexCenter pb-32 py-20 lg:flex-row lg:gap-32">
      {/* Left */}
      <motion.div
      variants={fadeIn('down', 0.4)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className="flex-1 flexCenter flex-col lg:items-start"
      >
        <h2 className="h2">Hi I&apos;m <span className="text-secondary font-extrabold">John Doe</span></h2>
        <h4 className="bold-24">A 
          <span className="pl-2">
            <Typewriter
              words={['Full Stack Developer', 'Youtuber', 'Programmer', 'Teacher']}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={90}
              deleteSpeed={70}
              delaySpeed={1000}
            />
          </span>
        </h4>
        <p className="py-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo assumenda omnis laudantium consequuntur exercitationem. Iure sequi officia consequatur.
        </p>
        {/* social icons */}
        <SocialIcons />
      </motion.div>
      {/* Right */}
      <motion.div
      variants={fadeIn('up', 0.4)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className="flex flex-1 relative"
      >
        <Image src={'/hero-2.png'} alt="heroImg" width={400} height={400} className="w-[277px] h-auto lg:w-full relative" />
        <motion.span className="bg-secondary h-60 w-60 lg:h-[400px] lg:w-[400px] xl:h-[500px] xl:w-[500px] absolute top-4 right-0 rounded-br-none rounded-full -z-10 lg:top-10 lg:right-10"
          animate={{
            backgroundColor: ['#08D9D6', '#252A34', '#FF2E63', '#EAEAEA', '#F9ED69', '#F08A5D', '#B83B5E', '#6A2C70'],
            transition: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}></motion.span>
      </motion.div>
    </section>
  )
};

export default Home;
