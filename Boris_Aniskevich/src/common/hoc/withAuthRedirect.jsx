import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const withAuthRedirect = Component => {
    const ComponentWithRedirect = props => {
        if (!props.isAuth) return <Redirect to='/auth' />
        return <Component {...props} />
    }
    return connect(state => ({...state.user.isAuth}))(ComponentWithRedirect)
}

export default withAuthRedirect