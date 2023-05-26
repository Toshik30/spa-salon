import styles from './Login.module.scss'
import React, {FunctionComponent, useState} from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '@store/hook'
import { closeLoginForm, setLoginData } from '@store/slices/authSlice'
import Image from 'next/image'

type LoginForm = {
    email: string,
    password: string,
    file: any
}
const Login:FunctionComponent = () => {
    const [selectFile, setSelectFile] = useState(null)
    const dispatch = useAppDispatch()
    const showLoginForm = useAppSelector(state => state.login.isOpen)
    const {register,handleSubmit, reset, control, formState:{errors, isValid}} = useForm<LoginForm>({mode: 'onBlur'})

    const onSubmit:SubmitHandler<LoginForm> = (data:{}) => {
        dispatch(setLoginData(data))
        reset()
    }
    const handleFileChange = (e:any) => {
        setSelectFile(e.target.files[0])
    }
    return (
        <div className={showLoginForm ? styles.loginPopup + ' ' + styles.active : styles.loginPopup}>
            <div className={styles.loginPopup__content}>
                <h2>Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email"
                            id="email"
                            placeholder='email@email.com' 
                            {...register("email", {
                                required: true,
                                pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                               
                            })}
                          
                        />
                        {errors.email && errors.email.type === "required" && (
                            <p>This field is required</p>
                        )}
                        {errors.email && errors.email.type === "pattern" && (
                            <p>Please enter a valid email address</p>
                        )}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            id="password"  
                            {...register("password", { required: true })} 
                            placeholder='password'  
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <input 
                            type="file"
                            id='file'
                            {...register("file")}
                            onChange={handleFileChange}
                        />
                        {selectFile && (
                            <img src={URL.createObjectURL(selectFile)} alt='selected'/>
                        )}
                    </div>
                    <button type="submit"  className={styles.submitButton}>Login</button>
                </form>
                <span className={styles.closeButton} onClick={() => dispatch(closeLoginForm())}>&#x2715;</span>
            </div>
        </div>
    )
}

export default Login