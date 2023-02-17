import React from 'react'
import styles from './Propositions.module.scss'
import propositionsData from '@data/propositionsData.json'
import { propositionsTypes } from '@type/types'
import CustomBtn from '@components/UI/CutstomBtn/CustomBtn'
import { Swiper,SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/pagination'
import { Pagination } from 'swiper'

const Slider = () => {
    const {cards}:propositionsTypes = propositionsData
    return (
        <Swiper
            breakpoints={{
                320: {
                width: 280,
                slidesPerView: 1,
                autoHeight: true,
                modules: [Pagination],
                pagination: true,
                },
                768: {
                width: 350,
                slidesPerView: 1,
                },
                1024: {
                    slidesPerView: 3
                }
            }}
            slidesPerView={3}
            spaceBetween={60}
            pagination={{clickable: true }}
            modules={[Pagination]}
            className={styles.propSlider}
        >
            {cards.map(({img,nameCard,time,price,btnText},index) => (
                <SwiperSlide className={styles.propositions__card} key={index+img}>
                    <div className={styles.propositions__card__head}>
                        <div className={styles.propositions__card__img} >
                            <img src={img} alt={nameCard} />
                        </div>
                        <p>{nameCard}</p>
                    </div>
                    <div className={styles.propositions__card__body}>
                        <p>
                            {time.split(' ').map((word,index) => (
                                <span key={index} className={index === 0 ? 'c-black': ''}> {word} </span>
                            ))}
                        </p>
                        <p>
                            {price.split(' ').map((word,index) => (
                                <span key={index} className={index === 0 ? 'c-black': ''}> {word} </span>
                            ))}
                        </p>
                        <CustomBtn text={btnText} customStyle='btn powderBrdr'/>
                    </div>
                </SwiperSlide>
            ))} 
        </Swiper>
    )
}

export default Slider