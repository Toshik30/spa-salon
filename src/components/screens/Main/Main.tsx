import styles from './Main.module.scss'
import mainData from '@data/mainData.json'
import {mainTypes} from '@type/types'
import CustomBtn from '@components/UI/CutstomBtn/CustomBtn'
const Main = () => {
    const {main}:mainTypes = mainData
    console.log()
    return (
        <section className={styles.main}>
            <div className='container'>
                <div className={styles.main__wrapper}>
                    {main.map(({heading,description,btnText},index) => (
                    <div className={styles.main__text} key={index}>
                        <h1>
                           {heading.split(' ').map((word, index) => (
                                <span key={index} className={index === 0 || index === 2 ? 'c-powder' : 'inherit'} > {word} </span>
                           ))}
                        </h1>
                        <p>{description}</p>
                        <CustomBtn customStyle='btn blackBrdr' text={btnText}/>
                    </div>
                    ))}
                    <div className={styles.main__slider}>
                        
                    </div>
                </div>
                <span className={styles.animRound}></span>
                <span className={styles.animRound}></span>
                <span className={styles.animRound}></span>
            </div>
        </section>
    )
}

export default Main