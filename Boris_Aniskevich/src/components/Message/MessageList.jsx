import React from 'react'

import Message from './Message'
import SendMessageForm from './SendMessageForm'

import style from './Message.module.scss'
import Card from 'components/Card/Card'

const MessageList = props => {
    return (
        <div className={style.messageList}>
            <div className={style.header}>
                <Card primary={props.chat.name} secondary='some helpful info' />
            </div>
            <div className={style.messagesLayout}>
                <div className={style.messagesWrapper}>
                {
                    props.messages.map(message => {
                        return <Message 
                                    key={message._id} 
                                    message={message} 
                                    user={props.user} 
                                    chat={props.chat}
                                />
                    })
                }
                </div>
            </div>
            <div className={style.footer}>
                <SendMessageForm onSubmit={props.sendMessage}/>
            </div>
        </div>
    )
}

export default MessageList