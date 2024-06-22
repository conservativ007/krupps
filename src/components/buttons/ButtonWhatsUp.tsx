import Image from 'next/image'

const ButtonWhatsUp = () => {
  return (
    <div className="col-span-1 cursor-pointer">
      <Image src="/button-2.png" width={50} height={50} alt="whatsup" />
    </div>
  )
}

export default ButtonWhatsUp
