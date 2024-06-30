import React from 'react'
import ButtonTelegram from './ButtonTelegram'
import ButtonWhatsUp from './ButtonWhatsUp'

interface IButtonsGroup {
  text?: string
}

const ButtonsGroup = ({ text }: IButtonsGroup) => {
  return (
    <div className='flex space-x-5'>
      <ButtonTelegram />
      <ButtonWhatsUp />
      <p className=' content-center'>{text && text}</p>
    </div>
  )
}

export default ButtonsGroup
