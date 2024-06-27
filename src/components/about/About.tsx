import Image from 'next/image'

const About = () => {
  return (
    <section>
      <div className='lg:py-10 md:py-5 p-3 bg-[#3D2D2D] text-white text-[18px] grid md:gap-0 gap-5 md:grid-cols-10 grid-cols-1 relative'>
        <div className='md:col-span-6 col-span-10 text-right grid grid-cols-1'>
          <div className='ml-auto relative max-h-[102px] max-w-[500px] md:w-[560px] w-[320px] h-[100px]'>
            <Image
              src='/person-3.png'
              quality={100}
              fill={true}
              className='object-contain'
              alt='Picture of the author'
            />
          </div>
          <div className='lg:text-[16px] text-[14px]'>
            <p>Член Ассоциации Юристов России -</p>
            <p>20 лет непрерывного судебного стажа -</p>
            <p>15 лет управления юридической фирмой -</p>
            <p>
              5 лет работы ведущим юристом в крупной строительной компании -
            </p>
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
              Центральный офис в центре Санкт-Петербурга. Партнеры практически
              во всех регионах России -
            </p>
          </div>
        </div>
        <div className='md:col-span-4 col-span-10 relative'>
          <div className='lg:absolute lg:left-[100px] md:right-0 right-[-40px] lg:top-[-70px] bottom-0 lg:h-[510px] h-[300px] w-[280px] flex items-center justify-center'>
            <Image
              src='/man-2.png'
              quality={100}
              fill={true}
              className='object-contain'
              alt='Picture of the author'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
