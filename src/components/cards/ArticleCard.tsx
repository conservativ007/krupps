import Image from 'next/image'
import Link from 'next/link'

export interface ITeamCard {
  id?: number
  imageSrc: string
  title: string
  describe: string
}

const ArticleCard = ({ id, imageSrc, title, describe }: ITeamCard) => {
  return (
    <div className='grid1'>
      <div className='relative max-h-[200px] lg:h-[140px] h-[130px]'>
        {/* <div className='relative max-h-[200px] h-[200px]'> */}
        <Image
          src={imageSrc}
          alt='article'
          fill={true}
          className='object-cover rounded-t-[30px]'
          quality={100}
        />
      </div>
      <p className='text-[#867373] text-[14px] font-bold'>{title}</p>
      <p className='text-[#867373] text-[14px] line-clamp'>{describe}</p>
      <Link href={`/articles/${id}`}>
        <p className='text-[#FF404F] uppercase text-center cursor-pointer'>
          читать
        </p>
      </Link>
    </div>
  )
}

export default ArticleCard
