import React, { FunctionComponent } from 'react'
import { useAppSelector } from '@store/hook';
import styles from './Loader.module.scss'
const Loader:FunctionComponent = () => {
    const isLoading = useAppSelector(state => state.loader.isLoading);
    
    return (
        <div className={styles.wrapper} data-loading={isLoading}>
            <div className={styles.row}>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
            </div>
        </div>
    )
}

export default Loader