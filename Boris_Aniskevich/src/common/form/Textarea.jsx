import React from 'react'
import classNames from 'classnames/bind'

import style from './Form.module.scss'

const classes = classNames.bind(style)

const Textarea = ({input, label, meta: { touched, error }}) => {
    const className = classes({
        textarea: true,
        error: touched && error,
    })

    return (
        <>
            <textarea {...input} placeholder={label} className={className}/>
            {touched && error && <div><span>{error}</span></div>}
        </>
    )
}

export default Textarea