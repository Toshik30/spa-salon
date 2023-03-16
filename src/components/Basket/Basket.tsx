import React, {FunctionComponent} from 'react'
import styles from './Basket.module.scss'
import { useAppDispatch, useAppSelector } from '@store/hook'
import { removeFromBasket } from '@store/slices/basketSlice'
import Image from 'next/image'
interface basketProps {
    id:number,
    nameCard:string,
    price:number
}

const Basket:FunctionComponent = () => {
    const basketDate:basketProps[] = useAppSelector((state) => state.basket.data)
    const dispatch = useAppDispatch()
    const isOpen = useAppSelector((state) => state.basket.isOpen)
    const handleDeletElem = (id:number) => {
        dispatch(removeFromBasket(id))
    }
    return (
       <div className={isOpen ? styles.basket + ' ' + styles.active : styles.basket}>
            <h2 className={styles.basket__heading}>Basket</h2>
            {basketDate.length > 0 ? basketDate?.map(({id,nameCard,price}) => (
                <div key={id} className={styles.basket__item}>
                    <div className={styles.basket__body}>
                        <span className={styles.nameItem}>{nameCard}</span> <span className={styles.priceItem}>{price} uah</span>
                    </div>
                    <div className={styles.deleteIcon} onClick={() => handleDeletElem(id)}>
                        <Image src={'/img/header/x.svg'} width={28} height={28} alt='delete'/> 
                    </div>
                </div>
            )) : <span>Your basket is empty  &#128546;</span>
            }
            <p className={styles.basket__totalPrice}>Total: {basketDate?.reduce((acc, rec) => acc + rec.price,0)} uah </p>
       </div>
    )
}

export default Basket