import styles from './AboutUs.module.scss'
import aboutusData from '@data/aboutusData.json'
import { aboutUsTypes } from 'types/types'
import Image from 'next/image'
const AboutUs = () => {
    const {head, aboutus, list} : aboutUsTypes = aboutusData
   
    return (
        <section className={styles.AboutUs}>
            <div className="container">
            <h2>{head}</h2>
                <div className={styles.AboutUs__wrapper}>
                    <div className={styles.AboutUs__wrapper__img}>
                        <div className={styles.AboutUs__wrapper__img__play}></div>
                    </div>
                    <div className={styles.AboutUs__wrapper__ctn}>
                        {aboutus.map(({heading,text}, index) => (
                            <div className={styles.AboutUs__wrapper__text} key={index}>
                                <h3>{heading}</h3>
                                <p>{text}</p>
                            </div>
                        ))}
                        <div className={styles.AboutUs__wrapper__list} >
                        {list.map(({img,tagline, description}, index) => (
                            <div className={styles.AboutUs__wrapper__list__item} key={index}>
                                <Image src={img} width={35} height={35} alt='img'/>
                                <div>
                                    <strong>{tagline}</strong>
                                    <p>{description}</p>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs