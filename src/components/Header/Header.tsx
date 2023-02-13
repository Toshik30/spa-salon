import styles from './Header.module.scss'
import headerData from '@data/headerData.json'
import { headerTypes } from '@type/types'
import { FunctionComponent, useEffect, useState } from 'react'
import NavDesktop from './NavDesktop'
import Image from 'next/image'
import Link from 'next/link'

const Header: FunctionComponent = () => {
  const {logo, menu}:headerTypes = headerData
  const [isScroll, setIsScroll] = useState(0)
  useEffect(() => {
    window.addEventListener('scroll', () => setIsScroll(window.scrollY))
  },[])
  
  return (
    <header className={`${styles.header} ${isScroll > 100 ? styles.active : ''}`}>
        <div className="container">
            <div className={styles.header__wrapper}>
                <div className={styles.header__logo}>
                  <Link href='/'>{logo}</Link>
                </div>
                <NavDesktop/>
                <div className={styles.header__menu}>
                  <a href="" className={styles.header__menu__basket}>
                    <Image src={menu.iconBasket} alt='basket' width={32} height={32}/>
                  </a>
                  <Image src={menu.iconUser} alt='user icon' width={32} height={32}/>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header