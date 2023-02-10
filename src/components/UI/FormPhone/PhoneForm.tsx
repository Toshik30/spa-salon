import React, { FunctionComponent } from 'react'
import styles from './PhoneForm.module.scss'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types'
type Inputs = {
    phone: string,
}
const PhoneForm:FunctionComponent = () => {
    const { register, handleSubmit, formState: {errors}} = useForm<Inputs>({mode: 'onBlur'})
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data)
    return (
       <>
        <form className={styles.PhoneForm} onSubmit={handleSubmit(onSubmit)}>
            <input 
                type="text" 
                className={styles.PhoneForm__phone} 
                defaultValue='+380'
                {...register('phone',  { required: true})}
            />
            <input type="submit" value='Get a discount' className={styles.PhoneForm__submit} />
        </form>
        {errors.phone && <span style={{color: 'red'}}>Incorrect phone number</span>}
       </>
    )
}

export default PhoneForm