import React from 'react'
import styles from './Services.module.scss'
import Image from 'next/image'
import { url } from 'inspector'

type Props = {
    img:string,
    price: string | number, 
    itemName: string, 
    text: string,
    goDetails:string
}
const ServicesItem = ({text,itemName,price,goDetails,img}:Props) => {
    return (
        <div className={styles.services__wrapper__item} >
            <div className={styles.servicesImg} style={{background:`url(${img}) center center no-repeat`}}></div>
            <span className={styles.price}>{price}uah</span>
            <h3>{itemName}</h3>
            <p>{text}</p>
            <span className={styles.goDetails}>{goDetails}</span>
        </div>
    ) 
}

export default ServicesItem