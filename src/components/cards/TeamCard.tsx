'use client'
import Image from 'next/image'

interface ITeamCard {
  fullname: string
  describe: string
  imageSrc: string
  variant?: string
}

export default function TeamCard({
  fullname,
  imageSrc,
  variant,
  describe,
}: ITeamCard) {
  return (
    <div className='flex flex-col'>
      <div
        className={`rounded-[20px] relative overflow-hidden ${
          variant === 'compact' && 'h-[480px]'
        }`}
      >
        {variant === 'compact' ? (
          <Image
            src={imageSrc}
            alt='team'
            fill
            quality={100}
            className='object-cover'
          />
        ) : (
          <Image
            src={imageSrc}
            alt='team'
            width={459}
            height={689}
            quality={100}
            className='w-full h-full rounded-[20px] max-w-none'
          />
        )}

        <div>
          <p className='font-header text-white text-lg lg:text-[25px] text-center absolute left-0 bottom-10 w-full z-10 min-h-[75px] flex items-center justify-center'>
            {fullname}
          </p>
          <p className='font-header text-white text-[16px] text-center absolute left-0 bottom-0 w-full z-10 min-h-[75px] flex items-center justify-center'>
            {describe}
          </p>
        </div>

        {/* {variant === 'compact' && (
            <div className='font-header text-lg lg:text-[25px] text-center absolute left-0 bottom-0 w-full z-10 min-h-[75px] flex items-center justify-center bg-gradient-to-t from-black/70'>
              {fullname}
            </div>
          )} */}
      </div>

      {/* {variant === 'compact' ? (
          ''
        ) : (
          <div className='max-lg:px-4'>
            <div className='font-header text-lg lg:text-[25px] mb-2 lg:mb-5'>
              {fullname}
            </div>
          </div>
        )} */}
    </div>
  )
}
