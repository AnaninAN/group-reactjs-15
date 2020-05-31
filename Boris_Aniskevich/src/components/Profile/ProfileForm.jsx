import React from 'react'
import { Field, reduxForm } from 'redux-form'

import Input from 'common/form/Input'
import Textarea from 'common/form/Textarea'

import style from './Profile.module.scss'

const ProfileForm = props => {
    return (
        <div className={style.formContainer}>
        <form onSubmit={props.handleSubmit} className={style.form}>
            <Field 
                name='email'
                component={Input}
                type='email'
                label='Email'
                validate={[]}
            />
            <Field 
                name='info'
                component={Textarea}
                label='Info'
                validate={[]}
            />
            <span>{props.error && <strong>{props.error}</strong>}</span>
            <button type='submit' className={style.button}>Submit</button>
        </form>
        </div>
    )
}

export default reduxForm({form: 'profile'})(ProfileForm)