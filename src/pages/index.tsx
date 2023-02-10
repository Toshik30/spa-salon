import FormAplication from '@components/UI/FormAplication/FormAplication'
import AboutUs from '@components/screens/AboutUs/AboutUs'
import Advertisement from '@components/screens/Advertisement/Advertisement'
import Main from '@components/screens/Main/Main'
import Propositions from '@components/screens/Propositions/Propositions'
import { NextPage } from 'next'
import Categories from './Categories/Categories'
import Services from './Services/Services'
import { useAppDispatch } from '@store/hook'
import { useEffect } from 'react'
import { hideLoader } from '@store/slices/loaderSlice'
import Loader from '@components/UI/Loader/Loader'

const Home: NextPage = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(hideLoader())
  })
  return (
    <div>
      <Loader/>
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

