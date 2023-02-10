import styles from './Footer.module.scss'
import  footerData from '@data/footerData.json'
import Image from 'next/image'
import { footerTypes } from '@type/types'
import Link from 'next/link'
const Footer = () => {
  const {footer, media}:footerTypes = footerData
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__wrapper}>
          <div className={styles.footer__contacts}>
            {footer.map(({heading, img, title}, index) => (
              <div key={index}>
                  <div className={styles.footer__item}>
                    <Image src={img} alt={title} width={35} height={35} />
                    <span>{heading}</span>
                  </div>
              </div>
            ))}
            <div className={styles.footer__contacts__media}>
              {media.map(({img,title, href}, index) => (
                <div key={index} className={styles.footer__contacts__media__item}>
                  <Link href={href} target='_blank'>
                    <Image src={img} alt={title} width={35} height={35} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.footer__img}>
            
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer