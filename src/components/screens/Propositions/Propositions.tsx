import styles from './Propositions.module.scss'
import propositionsData from '@data/propositionsData.json'
import { propositionsTypes } from 'types/types'
import Image from 'next/image'
import CustomBtn from '@components/CutstomBtn/CustomBtn'
const Propositions = () => {
    const {heading, cards}:propositionsTypes = propositionsData
    return (
        <section className={styles.propositions}>
            <div className="container">
                <h2>{heading.text}</h2>
                <p>{heading.subtext}</p>
                <div className={styles.propositions__wrapper}>
                    {cards.map(({img,nameCard,time,price,btnText},index) => (
                        <div className={styles.propositions__card} key={index}>
                            <div className={styles.propositions__card__head}>
                                <div className={styles.propositions__card__img}>
                                    <Image alt='img' src={img} width={60} height={60} />
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Propositions