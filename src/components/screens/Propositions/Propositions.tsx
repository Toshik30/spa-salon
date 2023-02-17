import styles from './Propositions.module.scss'
import propositionsData from '@data/propositionsData.json'
import { propositionsTypes } from '@type/types'
import { FunctionComponent,useState,useEffect } from 'react'
import Slider from './Slider'


const Propositions:FunctionComponent = () => {
    const [windowWidth, setWindowWidth] = useState(1100)
    const {heading}:propositionsTypes = propositionsData
    useEffect(() => {
        const handleWindowResize = () =>   setWindowWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize)
        return () =>  window.removeEventListener('resize', handleWindowResize)
    })
    return (
        <section className={styles.propositions}>
            <div className="container">
                <h2>{windowWidth > 1024 ? heading.text : heading.tabletText}</h2>
                <p>{windowWidth > 1024 ? heading.subtext : heading.tabletSubtext}</p>
                <div className={styles.propositions__wrapper}>
                    <Slider />
                </div>
            </div>
        </section>
    )
}

export default Propositions