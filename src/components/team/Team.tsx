'use client'

import Image from 'next/image'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import TeamCard from '../cards/TeamCard'

const Team = () => {
  return (
    <section className='grid1'>
      <p className='font-kur text-[40px] text-[#867373] text-center uppercase'>
        Моя КОМАНДА
      </p>
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
        slidesPerView={4}
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
          <TeamCard
            fullname='Александра Дробышева'
            describe='Юрист. Партнёр'
            imageSrc='/team-1.png'
          />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'>
          <TeamCard
            fullname='Красников Сергей'
            describe='Руководитель практики. Партнёр'
            imageSrc='/team-2.png'
          />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'>
          <TeamCard
            fullname='Цымбалов Борис'
            describe='Руководитель Центрально-Черноземного офиса. Партнёр'
            imageSrc='/team-3.png'
          />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'>
          <TeamCard
            fullname='Александра Дробышева'
            describe='Юрист. Партнёр'
            imageSrc='/team-1.png'
          />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'>
          <TeamCard
            fullname='Красников Сергей'
            describe='Руководитель практики. Партнёр'
            imageSrc='/team-2.png'
          />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'>
          <TeamCard
            fullname='Цымбалов Борис'
            describe='Руководитель Центрально-Черноземного офиса. Партнёр'
            imageSrc='/team-3.png'
          />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Team
