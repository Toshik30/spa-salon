import styles from './Header.module.scss'
import headerData from '@data/headerData.json'
import { headerTypes } from '@type/types'
import { FunctionComponent, useEffect, useState } from 'react'
import NavDesktop from './NavDesktop'
import Image from 'next/image'
import Link from 'next/link'
import NavModile from './NavModile'
import Basket from '@components/Basket/Basket'
import { useAppSelector, useAppDispatch } from '@store/hook'
import { basketMenu } from '@store/slices/basketSlice'
import Login from '@components/UI/Login/Login'
import { setLoginData, login, logout } from '@store/slices/authSlice'

const Header: FunctionComponent = () => {

  const {logo, menu}:headerTypes = headerData
  const [isScroll, setIsScroll] = useState(0)
  const isOpen = useAppSelector((state) => state.basket.isOpen)
  const data = useAppSelector((state) => state.basket.data)
  const isLogin = useAppSelector(state => state.login.isLogin)
  const showLoginForm = useAppSelector(state => state.login.isOpen)
  const dispatch = useAppDispatch()

  useEffect(() => {
    window.addEventListener('scroll', () => setIsScroll(window.scrollY))
  },[])
  const hansleShowBasket = () => {
    dispatch(basketMenu(!isOpen))
  }

  const handleLoginForm = () => {

  }
  return (
    <header className={`${styles.header} ${isScroll > 100 ? styles.active : ''}`}>
        <div className="container">
            <div className={styles.header__wrapper}>
                <div className={styles.header__logo}>
                  <Link href='/'>{logo}</Link>
                </div>
                <NavDesktop/>
                <div className={styles.header__menu}>
                  <a className={styles.header__menu__basket} onClick={hansleShowBasket}>
                    {data.length > 0 ? <span className={styles.quntity}>{data.length}</span> : null}
                    <Image src={menu.iconBasket} alt='basket' width={32} height={32}/>
                  </a>
                  {isLogin ? 
                  <>
                    <Image src={menu.iconUser} className={styles.userIcon} alt='user icon' width={32} height={32}/> 
                    <span onClick={() => dispatch(logout())}>Log Out</span>
                  </> : 
                  <span onClick={() => dispatch(login())}>Log In</span>}
                  <Login/>
                </div>
                <Basket/>
                <NavModile/>
            </div>
        </div>
    </header>
  )
}

export default Header