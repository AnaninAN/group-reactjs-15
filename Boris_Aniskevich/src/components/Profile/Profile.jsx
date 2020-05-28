import React, { useState } from 'react'

import style from './Profile.module.scss'
import Avatar from 'common/avatar.svg'
import Preloader from 'components/Preloader/Preloader'
import ProfileForm from './ProfileForm'

const Profile = props => {
    if (props.user.isLoading) return <Preloader />
    
    const [editMode, toggleEditMode] = useState(false)
    
    const submitForm = formData => {
        props.onSubmit(formData)
        toggleEditMode(false)
    }
    
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
                    <div className={style.h5}>{props.user.username}</div>
                    <div className={style.small}>{props.user.status}</div>
                </div>
                {!editMode 
                    ? <ProfileData user={props.user} toggleEditMode={() => toggleEditMode(true)} />
                    : <ProfileForm onSubmit={submitForm} initialValues={props.user} />
                }
            </div>
        </div>  
    )
}

const ProfileData = props => {
    return (
        <div className={style.content}>
            <div className={style.p}>
                <b>Email: </b>
                {props.user.email}
            </div>
            <div className={style.p}>
                <b>Info: </b>
                {props.user.info}
            </div>
            <button onClick={props.toggleEditMode}>Edit</button>
        </div>
    )
}

export default Profile