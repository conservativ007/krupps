'use client'

import Image from 'next/image'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import { Button } from '@/components/ui/button'

const Youtube = () => {
  return (
    <section className='grid1 justify-items-center font-kur text-center uppercase text-[#867373] text-[40px]'>
      <p>Мой Youtube</p>
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
        slidesPerView={2.5}
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
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
        }}
        // className="swiperFull cursor-default overflow-hidden !py-2"
        className='w-full h-full overflow-hidden'
        speed={800}
      >
        {[
          '/youtube-1.png',
          '/youtube-2.png',
          '/youtube-1.png',
          '/youtube-2.png',
          '/youtube-1.png',
          '/youtube-2.png',
        ].map((src, index) => (
          <SwiperSlide key={index} className='flex justify-center items-center'>
            <div className='relative max-h-[380px] h-[380px] aspect-h-9'>
              <Image
                src={src}
                alt={`youtube-${index + 1}`}
                fill
                className='object-cover'
                quality={100}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Button
        className='font-bold font-inter text-white text-[18px] bg-gradient-to-b from-[#FF4F5C] to-[#FA2030] px-6 py-4'
        variant='destructive'
      >
        Подписаться на YouTube канал
      </Button>
    </section>
  )
}

export default Youtube
