import React, { FunctionComponent, useState } from 'react'
import styles from './Header.module.scss'
import headerData from '@data/headerData.json'
import { headerTypes } from '@type/types'
import Link from 'next/link'
import Image from 'next/image'
const NavModile:FunctionComponent = () => {
    const {header}:headerTypes = headerData 
    const [showMenu, setShowMenu] = useState(false)
    const handleShowMenu = () => {
      setShowMenu(!showMenu)
    }
    return (
        <div className={styles.mobileNav}>
            <div 
                className={!showMenu ? styles.mobileNav__burger : styles.mobileNav__burger + ' ' + styles.active} 
                onClick={handleShowMenu}
            >
                <span></span><span></span><span></span>
            </div>
            <div className={!showMenu ? styles.mobileNav__menu : styles.mobileNav__menu + ' ' + styles.active}>
                {header.map(({href,text,icon}) => (
                    <li key={text} className={styles.mobileNav__menu__item}>
                        <Image src={icon} alt={text} width={32} height={32} />
                        <Link href={href}>{text}</Link>
                    </li>
                ))}
            </div>
        </div>
    )
}

export default NavModile