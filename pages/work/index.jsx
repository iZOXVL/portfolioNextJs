import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '@/components/variants';
import { workData } from '../../components/data';
import { FaExternalLinkAlt } from 'react-icons/fa'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Work = () => {
  return (
    <section className="padding-container max-container py-12 flex flex-col flexCenter md:flex-row md:gap-8 lg:gap-20 xl:gap-28">
      {/* title */}
      <motion.div
      variants={fadeIn('down', 0.4)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='md:max-w-[40%]'>
        <div className="text-center uppercase pb-12">
          <h3 className="text-[30px] lg:text-[36px] font-extrabold relative leading-normal">Portfoli<span className="text-secondary">o.</span>
            <span className="text-[45px] lg:text-[54px] font-extrabold text-white/5 absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 ">My Work</span>
          </h3>
        </div>
        <p className="text-center max-w-md mx-auto text-gray-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta asperiores laudantium quas quisquam..</p>
      </motion.div>
      {/* Swiper */}
      <motion.div
      variants={fadeIn('up', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
       className='w-full sm:max-w-[50%]'>
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            }
          }}
          pagination={{
            clickable: true
          }}
          modules={[Pagination]}
          className='h-[344px] sm:h-[300px] md:h-[377px] mt-4 sm:mt-16'>
          {workData.slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className='flex flex-col items-center gap-y-4'>
                {slide.images.map((image, i) => (
                  <div className='flexCenter'>
                    <div className='relative overflow-hidden group rounded-lg cursor-pointer'>
                      <div className='min-w-full'>
                        <Image src={image.url} alt='workImg' width={250} height={150} />
                      </div>
                      <div className='absolute inset-0 bg-gradient-to-l from-[#19074e] to-[#fe0000] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      {/* title */}
                      <Link href={'/'} className='absolute top-[100%] left-1/2 text-2xl -translate-x-1/2 -translate-y-1/2 group-hover:top-1/2 transition-all duration-500 opacity-0 group-hover:opacity-100'><FaExternalLinkAlt /></Link>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  )
};

export default Work;
