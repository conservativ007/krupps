'use client'
import React, { useEffect, useState } from 'react'
import {
  buttonsData2,
  buttonsData1,
  buttonsData3,
  buttonsData4,
  IButtonsData,
} from '../../data/buttonsData'
import CustomButton from './CustomButton'

const CustomButtonsList = () => {
  const [buttonsData, setButtonsData] = useState<IButtonsData[]>([])
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1280) {
        setButtonsData(buttonsData1)
      } else if (window.innerWidth > 1024) {
        setButtonsData(buttonsData2)
      } else if (window.innerWidth > 767) {
        setButtonsData(buttonsData3)
      } else {
        setButtonsData(buttonsData4)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setIsMobile(false)
      } else {
        setIsMobile(true)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {buttonsData.map((data, index) => (
        <CustomButton
          key={index}
          variant={isMobile ? 0 : (index % 4) + 1}
          text={data.text}
          customStyle={data.style}
          isMobile={isMobile}
        />
      ))}
    </>
  )
}

export default CustomButtonsList
