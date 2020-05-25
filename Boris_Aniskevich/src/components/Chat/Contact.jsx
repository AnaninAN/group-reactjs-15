import React from 'react'

import Card from 'components/Card/Card'

import style from './Chat.module.scss'

const Contact = props => {
    const createChat = event => {
        props.createChat(event.target.value)
    }
    return (
        <div className={style.layout}>
            <Card 
                primary={props.contact.username}
                secondary='Contact status'
            >
                <button onClick={createChat} value={props.contact._id} className={style.button}>+</button>
            </Card>
        </div>
    )
}

export default Contact