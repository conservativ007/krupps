'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useEffect, useState } from 'react'
import { imagesData } from '@/data/companiesData'

const Companies = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResilze = () => {
      setIsMobile(window.innerWidth < 640)
    }

    window.addEventListener('resize', handleResilze)

    handleResilze()

    return () => {
      window.removeEventListener('resize', handleResilze)
    }
  }, [])

  return (
    <section className=''>
      <p className='mb-10 font-kur text-[40px] text-[#867373] text-center uppercase'>
        МНЕ доверяют
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
            spaceBetween: 2,
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
        {imagesData.map((item, index) => (
          <SwiperSlide key={index} className='flex justify-center items-center'>
            <div className='relative max-h-[200px] h-[200px]'>
              {isMobile ? (
                <Image
                  src={item.imageSrc}
                  alt={`youtube-${index + 1}`}
                  fill
                  className='object-contain'
                  quality={100}
                />
              ) : (
                <Link target='_blank' href={item.link}>
                  <Image
                    src={item.imageSrc}
                    alt={`youtube-${index + 1}`}
                    fill
                    className='object-contain'
                    quality={100}
                  />
                </Link>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Companies
