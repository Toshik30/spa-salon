import FormAplication from '@components/FormAplication/FormAplication'
import AboutUs from '@components/screens/AboutUs/AboutUs'
import Advertisement from '@components/screens/Advertisement/Advertisement'
import Main from '@components/screens/Main/Main'
import Propositions from '@components/screens/Propositions/Propositions'
import { NextPage } from 'next'
import Categories from './Categories/Categories'
import Services from './Services/Services'


const Home: NextPage = () => {
  return (
    <div>
      <Main/>
      <Categories/>
      <AboutUs/>
      <Propositions/>
      <Advertisement/>
      <Services/>
      <FormAplication/>
    </div>
  )
}

export default Home

