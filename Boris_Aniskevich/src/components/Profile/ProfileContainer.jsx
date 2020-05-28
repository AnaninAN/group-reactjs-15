import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import Profile from './Profile'
import { updateProfile } from 'reducers/userReducer'

class ProfileContainer extends PureComponent {
    render() {
        return (
            <Profile user={this.props.user} onSubmit={this.props.updateProfile} />
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps, {updateProfile})(ProfileContainer)