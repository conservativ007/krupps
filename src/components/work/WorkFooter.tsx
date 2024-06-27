import React from 'react'

const WorkFooter = () => {
  return (
    <div className='grid sm:grid-cols-2 grid-cols-1 text-center'>
      <div>
        <p className='lg:text-[35px] md:text-[25px] text-[22px]'>
          Претензионная работа
        </p>
        <p className='md:text-[45px] text-[40px]'>от 10.000 ₽</p>
      </div>
      <div>
        <p className='lg:text-[35px] md:text-[25px] text-[22px]'>
          Судебное сопровождение
        </p>
        <p className='md:text-[45px] text-[40px]'>от 50.000 ₽</p>
      </div>
    </div>
  )
}

export default WorkFooter
