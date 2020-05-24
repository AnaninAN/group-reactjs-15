import React from 'react'
import { Link } from 'react-router-dom'

import style from './Card.module.scss'

const Card = props => {
    return (
        <div className={style.card}>
            <div className={style.avatarWrapper}>
                <div className={style.image}>
                    U
                </div>
            </div>
            <div className={style.bodyWrapper}>
            {props.link 
                ? <Link to={props.link}>
                    <div className={style.description}>
                        <h5 className={style.h5}>{props.primary}</h5>
                        <p>{props.secondary}</p>
                    </div>
                </Link>
                : <div className={style.description}>
                    <h5 className={style.h5}>{props.primary}</h5>
                    <p>{props.secondary}</p>
                </div>
            }
                <div className={style.actions}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Card