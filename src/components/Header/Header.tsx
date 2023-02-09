import styles from './Header.module.scss'
import headerData from '@data/headerData.json'
import { headerTypes } from 'types/types'
import { FunctionComponent, useEffect, useState } from 'react'

const Header: FunctionComponent = () => {
  const {header, logo}:headerTypes = headerData
  const [isScroll, setIsScroll] = useState(0)
  useEffect(() => {
    window.addEventListener('scroll', () => setIsScroll(window.scrollY)) 
  },[])
  return (
    <header className={`${styles.header} ${isScroll > 100 ? styles.active : ''}`}>
        <div className="container">
            <div className={styles.header__wrapper}>
                <div className={styles.header__logo}>
                  <span>{logo}</span>
                </div>
                <div className={styles.header__nav}>
                  <ul>
                    {header.map(({href,text}, index) => (
                      <li key={index}>
                        <a href={href}>{text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.header__menu}>
                    <span>{logo}</span>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header