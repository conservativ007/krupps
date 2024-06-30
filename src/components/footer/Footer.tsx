import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
      <div className='flex justify-between text-[#867373] text-[14px]'>
        <div>
          <p>Работаем по будням с 10:00 до 18:00 по Московскому времени.</p>
          <p>Прием запросов в мессенджер ведется круглосуточно.</p>
          <p>Их обработка осуществляется в наше рабочее время</p>
        </div>
        <div className='text-center'>
          <p>Юридическая фирма Красников и партнеры. © 2011</p>
          <p>ИНН 7814488622</p>
          <p>Политика конфиденциальности. Сайт создан в Paxcore</p>
        </div>
        <div className='text-right'>
          <p>Санкт-Петербург, улица ГражданскаяЮ дом 11</p>
          <p>contrlaw@gmail.com</p>
          <p>8(812)3123440</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
