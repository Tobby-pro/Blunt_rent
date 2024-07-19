'use client' 
import React from 'react';
import { motion } from 'framer-motion';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import Image from 'next/image';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from "react-icons/fa6";
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="flex justify-center items-center bottom-0">
      <div>
			  <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="purple" />
			  <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="purple" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
			  <Spotlight className="top-28 left-80 h-[80vh] md:-left-32 md:-top-20" fill="blue" />
			  
      </div>

      <div className="h-screen w-screen dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] relative flex items-center justify-center top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
        </div>
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[100vw] md:max-w-4xl justify-center flex flex-col items-center">
            <motion.div 
              className="w-44 lg:w-56"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <Image
                src="/images/bluntrent.svg"
				alt="genz_blue"
				priority
                width={150}
                height={150}
              />
            </motion.div>
            <TextGenerateEffect
              className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              words="Your Rental Search Simplified. Connect Directly with Landlords"
            />
            <TextGenerateEffect
              className="text-center md:tracking-wider mb-4 text-sm"
              words="Find your rental vibe. Our app connects you directly with landlords in your preferred area."
					  />
				<motion.div 
              className="w-44 lg:w-56"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 7 }}
            >
						  <Link href='/search'
						  className = "">
							  
              <MagicButton
                title="Get Started"
                icon={<FaLocationArrow color="blue" />}
                position={'right'}
              />
			</Link>
				</motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;