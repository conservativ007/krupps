'use client'

import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import { articlesData } from '@/data/articleData'
import ArticleCard from '../cards/ArticleCard'

const Article = () => {
  return (
    <section className='grid1'>
      <p className='font-kur text-[40px] text-[#867373] text-center uppercase'>
        ПУБЛИКАЦИИ
      </p>
      <Swiper
        modules={[Navigation]}
        navigation={true}
        spaceBetween={2}
        centeredSlides={true}
        autoHeight={false}
        slidesPerView={5.5}
        loop={true}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1.5,
            spaceBetween: 10,
            loop: true,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
          },
          1023: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1399: {
            slidesPerView: 5.5,
            spaceBetween: 20,
          },
        }}
        // className="swiperFull cursor-default overflow-hidden !py-2"
        className='w-full h-full overflow-hidden'
        speed={800}
      >
        {articlesData.map((item, index) => (
          <SwiperSlide key={index} className='flex justify-center items-center'>
            <ArticleCard
              id={item.id}
              imageSrc={item.imageSrc}
              title={item.title}
              describe={item.describe}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Article
