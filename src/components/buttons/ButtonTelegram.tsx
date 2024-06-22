import Image from 'next/image'

const ButtonTelegram = () => {
  return (
    <div className="col-span-1 cursor-pointer">
      <Image src="/button-1.png" width={50} height={50} alt="telegram" />
    </div>
  )
}

export default ButtonTelegram
