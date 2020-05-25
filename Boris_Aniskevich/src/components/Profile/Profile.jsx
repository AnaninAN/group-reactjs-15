import React from 'react'

import style from './Profile.module.scss'
import Avatar from 'common/avatar.svg'

const Profile = props => {
    return (
        <div className={style.main}>
           <div className={style.header}>
               <div className={style.span}>Profile</div>
           </div> 
           <div className={style.body}>
               <div className={style.head}>
                <div className={style.figure}>
                        <Avatar width={100} height={100}/>
                    </div>
                    <div className={style.h5}>{props.username}</div>
                    <div className={style.small}>{props.id}</div>
               </div>
               <div className={style.content}>
                   <div className={style.p}>
                   Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups.
                   </div>
               </div>
           </div>
        </div>  
    )
}

export default Profile