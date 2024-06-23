'use client'

import Image from 'next/image'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

const Youtube = () => {
  return (
    <section className='mb-20'>
      <Swiper
        modules={[Navigation]}
        // navigation={{
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        //   disabledClass: 'swiper-button-disabled',
        // }}
        navigation={true}
        spaceBetween={2}
        centeredSlides={true}
        autoHeight={false}
        slidesPerView={3}
        loop={true}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1.1,
            spaceBetween: 2,
            loop: true,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1.4,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 1.9,
          },
          1023: {
            slidesPerView: 2.3,
            spaceBetween: 10,
          },
          1399: {
            slidesPerView: 3.8,
            spaceBetween: 20,
          },
        }}
        // className="swiperFull cursor-default overflow-hidden !py-2"
        className='w-full h-full overflow-hidden'
        speed={800}
      >
        <SwiperSlide className='flex justify-center items-center'>
          <div className='relative h-[250px] w-[450px]'>
            <Image
              src='/youtube-1.png'
              alt='youtube'
              fill
              className='object-cover'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'>
          <div className='relative h-[250px] w-[450px]'>
            <Image
              src='/youtube-2.png'
              alt='youtube'
              fill
              className='object-cover'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'>
          <div className='relative h-[250px] w-[450px]'>
            <Image
              src='/youtube-1.png'
              alt='youtube'
              fill
              className='object-cover'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'>
          <div className='relative h-[250px] w-[450px]'>
            <Image
              src='/youtube-2.png'
              alt='youtube'
              fill
              className='object-cover'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'>
          <div className='relative h-[250px] w-[450px]'>
            <Image
              src='/youtube-1.png'
              alt='youtube'
              fill
              className='object-cover'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'>
          <div className='relative h-[250px] w-[450px]'>
            <Image
              src='/youtube-2.png'
              alt='youtube'
              fill
              className='object-cover'
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Youtube
