import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

import Header from './Header'
import { logout } from 'reducers/userReducer'
import withAuthRedirect from 'common/hoc/withAuthRedirect'

class HeaderContainer extends PureComponent {
    render() {
        return <Header 
                    id={this.props.id} 
                    username={this.props.username} 
                    logout={this.props.logout} 
                    location={this.props.location.pathname}
                />
    }
}

export default compose(
    connect(state => ({...state.user}), {logout}),
    withRouter,
    withAuthRedirect
)(HeaderContainer)