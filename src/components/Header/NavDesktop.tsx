import React, { FunctionComponent } from 'react'
import styles from './Header.module.scss'
import headerData from '@data/headerData.json'
import { headerTypes } from '@type/types'
import Link from 'next/link'
const NavDesktop: FunctionComponent = () => {
    const {header}:headerTypes = headerData
    return (
        <div className={styles.header__nav}>
            <ul>
                {header.slice(1,5).map(({href,text}, index) => (
                <li key={index}>
                    <Link href={href}>{text}</Link>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default NavDesktop