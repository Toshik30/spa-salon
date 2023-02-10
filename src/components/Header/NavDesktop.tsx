import React, { FunctionComponent } from 'react'
import styles from './Header.module.scss'
import headerData from '@data/headerData.json'
import { headerTypes } from '@type/types'
const NavDesktop: FunctionComponent = () => {
    const {header}:headerTypes = headerData
    return (
        <div className={styles.header__nav}>
            <ul>
                {header.map(({href,text}, index) => (
                <li key={index}>
                    <a href={href}>{text}</a>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default NavDesktop