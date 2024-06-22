import CustomButtonsList from '../buttons/HeaderButtonList'
import Image from 'next/image'

const Person = () => {
  return (
    <div className="container">
      <div className="relative w-full text-white">
        <div className="relative max-h-[900px] w-full lg:h-[900px] md:h-[700px] h-[500px]">
          <Image
            src="/person-1.png"
            quality={100}
            fill={true}
            alt="Picture of the author"
            className="object-cover"
          />
        </div>
        <div className="font-kur p-5 grid grid-cols-1 justify-items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[615px] h-[360px] backdrop-blur-sm bg-black/50 rounded-[30px]">
          <p className="text-[40px]">юрист по подрядным спорам</p>
          <div className="relative max-h-[102px] max-w-[500px] w-[560px] h-[115px]">
            <Image
              src="/person-2.png"
              quality={100}
              fill={true}
              alt="Picture of the author"
              className="object-contain"
            />
          </div>
          <p className="h-[0.5px] w-full bg-[#D9D9D9]"></p>
          <p className="text-[40px]">Есть запрос? Напиши мне</p>

          <div className="grid grid-cols-2 gap-10 max-w-[350px]">
            <div className="px-5 grid grid-cols-6 items-center bg-[#F83434] rounded-lg border border-[#FFC5C5]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="col-span-2 icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
              </svg>
              <p className="font-inter col-span-4">Телеграм</p>
            </div>

            <div className="px-5 grid grid-cols-6 items-center bg-[#F83434] rounded-lg border border-[#FFC5C5]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="col-span-2 icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
              </svg>
              <p className="font-inter col-span-4">WhatsApp</p>
            </div>
          </div>
        </div>

        <CustomButtonsList />
      </div>
    </div>
  )
}

export default Person
