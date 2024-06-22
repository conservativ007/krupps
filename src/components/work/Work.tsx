import React from 'react'
import WorkHeader from './WorkHeader'
import Services from './Services'
import WorkFooter from './WorkFooter'

const Work = () => {
  return (
    <div className="container">
      <div className="max-w-[80%] w-[90%] m-auto font-kur text-[#867373] grid grid-cols-1 gap-10">
        <WorkHeader />
        <Services />
        <WorkFooter />
      </div>
    </div>
  )
}

export default Work
