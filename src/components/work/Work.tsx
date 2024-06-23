import React from 'react'
import WorkHeader from './WorkHeader'
import Services from './Services'
import WorkFooter from './WorkFooter'

const Work = () => {
  return (
    <section className="container">
      <div className="font-kur text-[#867373] grid grid-cols-1 gap-10">
        <WorkHeader />
        <Services />
        <WorkFooter />
      </div>
    </section>
  )
}

export default Work
