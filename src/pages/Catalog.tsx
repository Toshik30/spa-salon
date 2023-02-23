import React, { FunctionComponent } from 'react'
import styles from '../components/Services/Services.module.scss'
import servicesData from '@data/servicesData.json'
import catalogData from '@data/catalogData.json'
import { servicesTypes,catalogTypes } from '@type/types'
import Link from 'next/link'
import ServicesItem from '@components/Services/ServicesItem'

const Catalog: FunctionComponent = () => {
    const {list, goCatalog}:servicesTypes = servicesData
    const {catalogHeading, catalogRoutsName, filters}:catalogTypes = catalogData
    
    return (
        <section className={styles.services}>
            <div className="container">
                <div className={styles.catalog}>
                    <p style={{fontSize: '14px', marginBottom: '40px'}}>{catalogRoutsName.split(/\s|\s/).map((word,index) => (
                        <span key={index} className={index < 6 ? styles.opacity5 : ''}>{word} </span>
                    ))}</p>
                    <div className={styles.catalog__wrapper}>
                        <h2>{catalogHeading}</h2>
                        <div className={styles.catalog__filter}>
                            <div className={styles.__filter__sortBy}>
                                <input placeholder='Sort By'/>
                            </div>
                            <div className={styles.catalog__filter__until}>
                                <input placeholder='Until 16'/>
                            </div>
                            <span className={`btn ${styles.catalogBtn}`}>{filters.filterBtn}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.services__wrapper}> 
                    {list.map(({img,price,itemName,text,goDetails}, index) => (
                        <ServicesItem price={price} itemName={itemName} text={text} goDetails={goDetails} key={index} img={img}/>
                    ))}
                    <Link href={goCatalog.src} className={styles.toCatalogBtn}>{goCatalog.btnText}</Link>
                </div>
            </div>
        </section>
    )
}

export default Catalog