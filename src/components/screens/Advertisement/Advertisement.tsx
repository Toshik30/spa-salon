import Image from 'next/image'
import styles from './Advertisement.module.scss'
import advertisementData from '@data/advertisementData.json'
import { advertisementTypes } from 'types/types'
import PhoneForm from '@components/FormPhone/PhoneForm'

const Advertisement = () => {
    const {img, advertisement} : advertisementTypes = advertisementData
    return (
        <section className={styles.advertisement}>
            <div className="container">
                <div className={styles.advertisement__wrapper}>
                    <div className={styles.advertisement__wrapper__img}>
                        <Image src={img} alt='wooman' width={394} height={350}/>
                        <span className={styles.animRaund}></span>
                        <span className={styles.animRaund}></span>
                        <span className={styles.animRaund}></span>
                        <span className={styles.animRaund}></span>
                    </div>
                    <div className={styles.advertisement__wrapper__ctn}>
                        <h1>
                            {advertisement.heading.split(' ').map((word,index) => (
                                <span key={index} className={index === 3 || index === 4 ? 'c-powder' : ''}> {word} </span>
                            ))
                            }
                        </h1>
                        <p>{advertisement.description}</p>
                        <PhoneForm/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advertisement