import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'
import Loader from '@components/UI/Loader/Loader'
import React, { FunctionComponent, ReactNode } from 'react'
import { useAppDispatch } from '@store/hook'
import { useEffect } from 'react'
import { hideLoader } from '@store/slices/loaderSlice'

type Props = {children: ReactNode}
const Layout:FunctionComponent<Props>= ({children}) => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(hideLoader())
    })
    return (
        <div>
            <Loader/>
            <Header/>
            <main className='main'>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout