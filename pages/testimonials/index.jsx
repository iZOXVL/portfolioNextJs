import { testimonialData } from '../../components/data';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
//framer motion
import { fadeIn } from '@/components/variants';
import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <section className="padding-container max-container py-12 flex flex-col flexCenter md:flex-row md:gap-8 lg:gap-20 xl:gap-28 md:py-28 xl:mt-12">
      {/* title */}
      <motion.div
      variants={fadeIn('left', 0.4)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='md:max-w-[35%]'>
        <div className="text-center uppercase pb-12">
          <h3 className="text-[30px] lg:text-[36px] font-extrabold relative leading-normal">Testimonial<span className="text-secondary">s.</span>
            <span className="text-[45px] lg:text-[54px] font-extrabold text-white/5 absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 ">People Says</span>
          </h3>
        </div>
        <p className="text-center max-w-md mx-auto text-gray-20 mb-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta asperiores laudantium quas quisquam..</p>
      </motion.div>
      {/* Swiper */}
      <motion.div
      variants={fadeIn('right', 0.4)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='w-full sm:max-w-[65%] xl:mr-8'>
        <Swiper
          breakpoints={{
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            }
          }}
          pagination={{
            clickable: true
          }}
          modules={[Pagination]}
          className='h-[288px] lg:h-[333px]'>
          {testimonialData.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <div className='relative bg-tertiary p-4 rounded-lg flexCenter flex-col group'>
                {/* user info */}
                <div className='flexCenter gap-4'>
                  <Image src={testimonial.url} alt='userImg' height={77} width={77} className='rounded-full' />
                  <div>
                    <div className='medium-20'>{testimonial.name}</div>
                    <div className='text-gray-50'>{testimonial.position}</div>
                  </div>
                </div>
                <hr className='border-none bg-gray-50 h-[1px] w-[80%] my-4 mx-auto text-center' />
                <p className='text-gray-20 text-center italic'>{testimonial.message}</p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  )
};

export default Testimonials;
