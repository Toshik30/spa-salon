import React, { FunctionComponent } from 'react'
import styles from './Services.module.scss'
import servicesData from '@data/servicesData.json'
import { servicesTypes } from 'types/types'
import Image from 'next/image'
import Link from 'next/link'
const Services: FunctionComponent = () => {
    const {heading, list, goCatalog}:servicesTypes = servicesData
    return (
        <section className={styles.services} id='Services'>
            <div className="container">
                <h2>{heading}</h2>
                <div className={styles.services__wrapper}>
                    {list.slice(0,6).map(({img,price,itemName,text,goDetails}, index) => (
                        <div className={styles.services__wrapper__item} key={index}>
                            <Image src={img} alt={itemName} width={350} height={190}/>
                            <span className={styles.price}>{price}</span>
                            <h3>{itemName}</h3>
                            <p>{text}</p>
                            <span className={styles.goDetails}>{goDetails}</span>
                        </div>
                    ))}
                    <Link href={goCatalog.src} className={styles.toCatalogBtn}>{goCatalog.btnText}</Link>
                </div>
            </div>
        </section>
    )
}

export default Services