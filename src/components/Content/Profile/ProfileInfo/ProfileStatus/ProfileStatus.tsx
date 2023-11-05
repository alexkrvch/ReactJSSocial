import s from './ProfileStatus.module.css'
import React, {ChangeEvent} from "react";

type PropsType = {
    status: string,
    setProfileStatus: (status: string) => void
}

type StateType = {
    editMode: boolean,
    status: string
}

class ProfileStatus extends React.Component<PropsType, StateType> {

    state:StateType = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps:PropsType, prevState:StateType) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    onChangeStatus = (e:ChangeEvent<HTMLInputElement>) => {
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