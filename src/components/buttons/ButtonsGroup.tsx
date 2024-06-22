import React from 'react'
import ButtonTelegram from './ButtonTelegram'
import ButtonWhatsUp from './ButtonWhatsUp'

const ButtonsGroup = () => {
  return (
    <div className="grid gap-3 grid-cols-8">
      <ButtonTelegram />
      <ButtonWhatsUp />
      <p className="col-span-6 content-center">
        Пишите мне в мессенджер, давайте знакомиться!
      </p>
    </div>
  )
}

export default ButtonsGroup
