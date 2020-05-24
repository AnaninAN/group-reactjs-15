import React from 'react'

import Card from 'components/Card/Card'

import style from './Chat.module.scss'

const Chat = props => {
    const deleteChat = event => {
        props.deleteChat(event.target.value)
    }
    return (
        <div className={style.layout}>
            <Card 
                primary={props.chat.name}
                secondary='Lorem ipsum ....'
                link={`/chat/${props.chat._id}`}
            >
                <button onClick={deleteChat} value={props.chat._id} className={style.button}>x</button>
            </Card>
        </div>
    )
}

export default Chat