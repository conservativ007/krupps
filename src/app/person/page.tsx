import Youtube from '@/components/Youtube/Youtube'
import About from '@/components/about/About'
import Article from '@/components/article/Article'
import Companies from '@/components/companies/Companies'
import Footer from '@/components/footer/Footer'
import Person from '@/components/person/Person'
import Price from '@/components/price/Price'
import Team from '@/components/team/Team'
import Work from '@/components/work/Work'

const PersonPage = () => {
  return (
    <div className='grid grid-cols-1 gap-10 mb-10'>
      <Person />
      <Work />
      <About />
      <Price />
      <Youtube />
      <Team />
      <Companies />
      <Article />
      <Footer />
    </div>
  )
}

export default PersonPage
