import React from 'react'
import ButtonTelegram from './ButtonTelegram'
import ButtonWhatsUp from './ButtonWhatsUp'

interface IButtonsGroup {
  text?: string
}

const ButtonsGroup = ({ text }: IButtonsGroup) => {
  return (
    <div className='grid gap-3 grid-cols-8'>
      <ButtonTelegram />
      <ButtonWhatsUp />
      <p className='col-span-6 content-center'>{text && text}</p>
    </div>
  )
}

export default ButtonsGroup
