import Image from 'next/image'

const About = () => {
  return (
    <div className="container">
      <div className="mt-[100px] py-10 bg-[#3D2D2D] text-white text-[18px] grid grid-cols-10 relative">
        <div className="col-span-6 text-right grid grid-cols-1">
          <div className="ml-auto relative max-h-[102px] max-w-[500px] w-[560px] h-[115px]">
            <Image
              src="/person-3.png"
              quality={100}
              fill={true}
              className="object-contain"
              alt="Picture of the author"
            />
          </div>
          <p>Член Ассоциации Юристов России -</p>
          <p>20 лет непрерывного судебного стажа -</p>
          <p>15 лет управления юридической фирмой -</p>
          <p>5 лет работы ведущим юристом в крупной строительной компании -</p>
          <p>
            Постоянное юридическое сопровождение строительных проектов у
            действующих клиентов
          </p>
          <p>
            В команде высококлассные адвокаты, процессуалисты и специалисты по
            договорному праву
          </p>
          <p>Мои клиенты всегда в курсе того, что происходит с их делом -</p>
          <p>
            Центральный офис в центре Санкт-Петербурга. Партнеры практически во
            всех регионах России -
          </p>
        </div>
        <div className="col-span-4 relative">
          <div className="absolute left-[100px] top-[-70px] h-[510px] w-[280px] flex items-center justify-center">
            <Image
              src="/man-2.png"
              quality={100}
              fill={true}
              className="object-contain"
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
