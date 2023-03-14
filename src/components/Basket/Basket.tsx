import React, {FunctionComponent} from 'react'
import styles from './Basket.module.scss'
import { useAppDispatch, useAppSelector } from '@store/hook'
import { removeFromBasket } from '@store/slices/basketSlice'
interface basketProps {
    id:number,
    nameCard:string,
    price:number
}

const Basket:FunctionComponent = () => {
    const test:basketProps[] = useAppSelector((state) => state.basket.data)
    const dispatch = useAppDispatch()

    const handleDeletElem = (id:number) => {
        dispatch(removeFromBasket(id))
    }
    console.log(test);
    return (
       <>
        <div>Basket</div>
        {test.length > 0 ? test?.map(({id,nameCard,price}) => (
            <div key={id}>
                <div>
                    <span>{nameCard}</span> <span>{price} uah</span>
                </div>
                <span onClick={() => handleDeletElem(id)}>X</span>
            </div>
        )) : ''
        }
        <p>{test?.reduce((acc, rec) => acc + rec.price,0)} uah</p>
       </>
    )
}

export default Basket