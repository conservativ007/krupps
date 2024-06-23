import Youtube from '@/components/Youtube/Youtube'
import About from '@/components/about/About'
import Person from '@/components/person/Person'
import Price from '@/components/price/Price'
import Work from '@/components/work/Work'

const PersonPage = () => {
  return (
    <div className="grid grid-cols-1 gap-5">
      <Person />
      <Work />
      <About />
      <Price />
      <Youtube />
    </div>
  )
}

export default PersonPage
