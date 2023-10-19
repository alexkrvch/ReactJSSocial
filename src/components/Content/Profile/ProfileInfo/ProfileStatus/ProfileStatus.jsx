import s from './ProfileStatus.module.css'
import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false
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
    }

    render() {
        return (
            <div className={s.profile_status}>
                { !this.state.editMode ?
                    <p onDoubleClick={ this.activateEditMode }>{this.props.status}</p> :
                    <input autoFocus={true} onBlur={ this.deActivateChangeEditMode } value={this.props.status} />}
            </div>
        )
    }
}

export default ProfileStatus