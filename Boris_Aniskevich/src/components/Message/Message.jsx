import React from 'react'
import classNames from 'classnames/bind'

import Card from 'components/Card/Card'

import style from './Message.module.scss'
import chatReducer from '../../reducers/chatReducer'

const classes = classNames.bind(style)

const Message = props => {
    const { message, user, chat } = props
    const className = classes({
        messageItem: true,
        right: message.authorId === user._id,
        left: message.authorId !== user._id,
    })
    const timestamp = new Date(message.createdAt).toLocaleString()
    const username = message.authorId == user._id ? user.username : chat.name
    return (
        <div className={className}>
            <div className={style.layout}>
                <Card primary={username} secondary={timestamp} />
            </div>
            <div className={style.message}>
                {message.message}
            </div>
        </div>
        
    )
}

export default Message