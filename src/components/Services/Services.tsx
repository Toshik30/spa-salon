import React, { FunctionComponent, useState, useEffect } from 'react'
import styles from './Services.module.scss'
import servicesData from '@data/servicesData.json'
import { servicesTypes } from '@type/types'
import Link from 'next/link'
import ServicesItem from './ServicesItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/pagination'
import { Pagination } from 'swiper'
const Services: FunctionComponent = () => {
    const {heading, list, goCatalog}:servicesTypes = servicesData

    const [windowWidth, setWindowWidth] = useState(1100)
    useEffect(() => {
        const handleWindowResize = () =>   setWindowWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize)
        return () =>  window.removeEventListener('resize', handleWindowResize)
    })
    return (
        <section className={styles.services} id='Services'>
            <div className="container">
                <h2>{heading}</h2>
                <div className={styles.services__wrapper}>
                    {windowWidth > 1000 ? 
                        list.slice(0,6).map(({img,price,itemName,text,goDetails}, index) => (
                            <ServicesItem price={price} itemName={itemName} text={text} goDetails={goDetails} key={index} img={img}/>
                        )) :
                        <Swiper
                            breakpoints={{
                               300: {
                                slidesPerView: 1,
                                width:220
                               },
                               600: {
                                slidesPerView: 2
                               },
                               920: {
                                slidesPerView: 2
                               }
                            }}
                            slidesPerView={2}
                            spaceBetween={50}
                            pagination={true}
                            modules={[Pagination]}
                            autoHeight={true}
                        >
                        {list.slice(0,6).map(({img,price,itemName,text,goDetails}, index) => (
                            <SwiperSlide key={index}>
                                <ServicesItem price={price} itemName={itemName} text={text} goDetails={goDetails} key={index} img={img}/>
                            </SwiperSlide>
                        ))}
                        </Swiper>
                    }
                    
                    <Link href={goCatalog.src} className={styles.toCatalogBtn}>{goCatalog.btnText}</Link>
                </div>
            </div>
        </section>
    )
}

export default Services