import styles from './Categories.module.scss'
import categoriesSlider from '@data/categoriesSlider.json'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import { categoriesSlideTypes } from 'types/types';


const Categories = () => {
    const {slider}: categoriesSlideTypes = categoriesSlider
    return (
        <section className={styles.categories}>
            <div className="container">
                <div className={styles.categories__wrapper}>
                    <h2> Categories</h2>
                </div>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    pagination={{clickable: true }}
                    autoplay={{ delay: 2500 }}
                    loop={true}
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    className={styles.categoriesSlider}
                >
                    {slider.map(({text, src, title}, index) => (
                        <SwiperSlide 
                            style={{background:`url(${src}) center center no-repeat`, backgroundSize: 'cover', width:'490 !important',height:250}} key={index } className={styles.categoriesSlider__slide} >
                            <h3>{text}</h3>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            
        </section>
    )
}

export default Categories