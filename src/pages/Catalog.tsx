import React, { FunctionComponent, useState, useEffect } from 'react'
import styles from '../components/Services/Services.module.scss'
import servicesData from '@data/servicesData.json'
import catalogData from '@data/catalogData.json'
import { servicesTypes,catalogTypes } from '@type/types'
import Link from 'next/link'
import ServicesItem from '@components/Services/ServicesItem'

const Catalog: FunctionComponent = () => {
    const {list, goCatalog}:servicesTypes = servicesData
    const {catalogHeading, catalogRoutsName, filters}:catalogTypes = catalogData
    const [filteredList, setFilteredList] = useState(list)
 
    const [sorting, setSorting] = useState('Sort By')
    const [until, setUntil] = useState('Until 12')
    const [showSort, setShowSort] = useState(false)
    const [showUntil, setShowUntil] = useState(false)
    
    const handleSort = (event: any) => {
        const target = event.target as HTMLDivElement
        setSorting(target.outerText)
        setFilteredList(list.sort((a,b) => sorting === 'Most expensive' ? parseInt(a.price) - parseInt(b.price) : parseInt(b.price) - parseInt(a.price)))
    }

    const handleSortMenu = () => {
        setShowSort(!showSort)
    }
    const handleUntilMenu = () => setShowUntil(!showUntil)
    const handleSelectChange = (event:any) => {
        const target = event.target as HTMLDivElement
        setUntil(target.outerText)
        const toUntil:RegExpMatchArray | any  = target.outerText.match(/\d+/)
        setFilteredList(list.slice(0, parseInt(toUntil[0])))
    }
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
                            <div className={styles.__filter__sort}>
                                <div className={styles.sorting} onClick={handleSortMenu}>
                                    {sorting}
                                    <div className={!showSort ? styles.list : `${styles.list} ${styles.active}`}>
                                        <div className={styles.list__item} onClick={(e) => handleSort(e)}>Most expensive</div>
                                        <div className={styles.list__item} onClick={(e) => handleSort(e)}>The cheapest</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.catalog__filter__until}>
                                <div className={styles.untilSelect} onClick={handleUntilMenu}>
                                    {until}
                                    <div className={!showUntil ? styles.list : `${styles.list} ${styles.active}`}>
                                        <div className={styles.list__item} onClick={(e) => handleSelectChange(e)}>Until 3</div>
                                        <div className={styles.list__item} onClick={(e) => handleSelectChange(e)}>Until 6</div>
                                        <div className={styles.list__item} onClick={(e) => handleSelectChange(e)}>Until 12</div>
                                    </div>
                                </div>
                            </div>
                            <span className={`btn ${styles.catalogBtn}`}>{filters.filterBtn}</span>
                        </div>
                    </div>
                </div>
                <div className={`${styles.services__wrapper} ${styles.catalogPage}`} > 
                    {filteredList.map(({img,price,itemName,text,goDetails}, index) => (
                        <ServicesItem price={price} itemName={itemName} text={text} goDetails={goDetails} key={index} img={img}/>
                    ))}
                    <Link href={goCatalog.src} className={styles.toCatalogBtn}>{goCatalog.btnText}</Link>
                </div>
            </div>
        </section>
    )
}

export default Catalog