import React from 'react'
import WorkHeader from './WorkHeader'
import Services from './Services'
import WorkFooter from './WorkFooter'

const Work = () => {
  return (
    <section className='container'>
      <div
        id='work-section'
        className='font-kur text-[#867373] grid grid-cols-1 md:gap-10 gap-5'
      >
        <WorkHeader />
        <Services />
        <WorkFooter />
      </div>
    </section>
  )
}

export default Work
