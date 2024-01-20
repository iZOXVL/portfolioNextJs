import { motion } from 'framer-motion';
import { fadeIn } from '@/components/variants';
import Link from 'next/link';
import { servicesData } from '../../components/data';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// icon
import { FaArrowRight } from 'react-icons/fa'

const Services = () => {
  return (
    <section className="padding-container max-container py-12">
      <motion.div
        variants={fadeIn('right', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="text-center pb-12">
        <h3 className="text-[30px] lg:text-[36px] font-extrabold relative leading-normal  uppercase">Service<span className="text-secondary">s</span>
          <span className="text-[45px] lg:text-[54px] font-extrabold text-white/5 absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase">My Services</span>
        </h3>
        <p className="text-center max-w-md mx-auto text-gray-20 mt-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta asperiores laudantium quas quisquam..</p>
      </motion.div>
      {/* Swiper */}
      <motion.div
      variants={fadeIn('left', 0.4)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='w-full sm:max-w-[95%]'>
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            880: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1100: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className='h-[288px]'>
          {
            servicesData.map((service, i) => (
              <SwiperSlide key={i}>
                <div className="px-8 py-12 bg-tertiary rounded-lg h-max flex flex-col gap-4 relative hover:bg-secondary w-[70%] sm:w-full mx-auto group">
                  <div className='place-self-end text-secondary text-5xl group-hover:text-white'>{service.icon}</div>
                  {/* title */}
                  <h3 className='bold-16 uppercase max-w-[2rem]'>{service.title}</h3>
                  {/* link */}
                  <Link href={'/'} className='font-extrabold text-secondary border-[3px] border-secondary bg-tertiary h-10 w-10 flexCenter rounded-full absolute left-1/2 -bottom-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-10 transition-all duration-500 -rotate-45'><FaArrowRight /></Link>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </motion.div>
    </section>
  )
};

export default Services;
