import React, { FunctionComponent } from 'react'
import styles from './PhoneForm.module.scss'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types'

type Inputs = {
    phone: string,
}
const PhoneForm:FunctionComponent = () => {
    const { register, handleSubmit, formState: {errors}} = useForm<Inputs>({mode: 'onBlur'})
    const onSubmit: SubmitHandler<Inputs> = data => {
       console.log(data)
    }
    return (
       <>
        <form className={styles.PhoneForm} onSubmit={handleSubmit(onSubmit)}>
            <input 
                type="text" 
                className={styles.PhoneForm__phone} 
                defaultValue='+380'
                maxLength={13}
                {...register('phone',  { required: 'Phone number is required', pattern: { value: /^(\+38)?0\d{9}$/, message: 'Invalid phone number' }})}
            />
            <input type="submit" value='Get a discount' className={styles.PhoneForm__submit} />
        </form>
        {errors.phone && <span className={styles.PhoneForm__error} style={{color: 'red'}}>{errors.phone.message}</span>}
       </>
    )
}

export default PhoneForm