import Image from 'next/image'
import React, { FunctionComponent } from 'react'
import styles from './FormAplication.module.scss'
import aplicationFormData from '@data/aplicationFormData.json'
import { aplicationFormTypes, servicesTypes } from '@type/types'
import CustomBtn from '@components/UI/CutstomBtn/CustomBtn'
import { useForm, SubmitHandler } from "react-hook-form"
import servicesData from '@data/servicesData.json'

type FormData = {
    name: string
    surname: string
    phoneNumber: string
    services: string
}
const FormAplication: FunctionComponent = () => {
    const { heading,text,img,textBtn}:aplicationFormTypes = aplicationFormData
    const {list}:servicesTypes = servicesData
    const { register, handleSubmit,reset, formState: { errors, isValid } } = useForm<FormData>({mode: 'onBlur'});

    const servicesList = list.map((item) => item.itemName)
    const uniqListServices = servicesList.filter((el, index) => servicesList.indexOf(el) === index)
    const onSubmit: SubmitHandler<FormData> = (data: {}) => {
        reset()
        return data
    }
    return (
        <section className={styles.form}>
            <div className="container">
                <div className={styles.form__wrapper}>
                    <div className={styles.form__wrapper__img}>
                        <Image alt='image' src={img} height={395} width={600}/>
                    </div>
                    <div className={styles.form__wrapper__ctn}>
                        <h3>{heading}</h3>
                        <p>{text}</p>
                        <form onSubmit={handleSubmit(onSubmit)} className={styles.form__wrapper__form}>
                            <input {...register("name", { required: true })} placeholder='Name'   aria-invalid={errors.name ? "true" : "false"} />
                            <input {...register("surname", { required: true })} placeholder='Surname' />
                            <select {...register("services", { required: true })}>
                               {uniqListServices.map((option,index) => (
                                <option key={index}>{option}</option>
                               ))} 
                            </select>
                            <input {...register("phoneNumber", { required: true })} placeholder='Phone number' />
                            <CustomBtn customStyle='btn' text={textBtn} />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FormAplication