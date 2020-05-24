import React from 'react'
import classNames from 'classnames/bind'

import Card from 'components/Card/Card'

import style from './Message.module.scss'

const classes = classNames.bind(style)

const Message = props => {
    const { message, user } = props
    const className = classes({
        messageItem: true,
        right: message.authorId == user.id,
        left: message.authorId != user.id,
    })
    return (
        <div className={className}>
            <div className={style.layout}>
                <Card primary={props.message.authorId} secondary={props.message.createdAt} />
            </div>
            <div className={style.message}>
                {message.message}
            </div>
        </div>
        
    )
}

export default Message