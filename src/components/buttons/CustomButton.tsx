import { motion } from 'framer-motion'

interface ICustomButton {
  text: string
  customStyle?: any
  variant: number
  isMobile: boolean
}

const CustomButton = ({
  customStyle,
  text,
  variant,
  isMobile,
}: ICustomButton) => {
  // const className = isMobile ? 'grid' : 'absolute'

  return (
    <motion.div
      style={customStyle}
      className={`md:text-[16px] text-[13px] custom-button${variant} absolute custom-button bg-black/50 rounded-[30px] border border-[#EFFF39] md:py-2 py-1 md:px-5 px-2 backdrop-blur-sm inline-block cursor-pointer`}
    >
      {text}
    </motion.div>
  )
}

export default CustomButton
