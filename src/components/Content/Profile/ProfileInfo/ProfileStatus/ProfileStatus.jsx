import s from './ProfileStatus.module.css'
import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    onChangeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActivateChangeEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.setProfileStatus(this.state.status)
    }

    render() {
        return (
            <div className={s.profile_status}>
                { !this.state.editMode ?
                    <p onDoubleClick={ this.activateEditMode }>{!this.props.status? 'Empty status' : this.props.status}</p> :
                    <input autoFocus={true} onChange={ this.onChangeStatus } onBlur={ this.deActivateChangeEditMode } value={this.state.status} />}
            </div>
        )
    }
}

export default ProfileStatus