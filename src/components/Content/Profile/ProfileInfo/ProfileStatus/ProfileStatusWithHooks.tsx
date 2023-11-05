import s from './ProfileStatus.module.css'
import React, {ChangeEvent, useEffect, useState} from "react";

type PropsType = {
    status: string,
    setProfileStatus: (status: string) => void
}

const ProfileStatusWithHooks:React.FC<PropsType> = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activateMode = () => {
        setEditMode(true);
    }

    const deActivateMode = () => {
        setEditMode(false)
        props.setProfileStatus(status)
    }

    const onChangeStatus = (e:ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={s.profile_status}>
            { !editMode ?
                <p onDoubleClick={ activateMode }>{!props.status? 'Empty status' : props.status}</p> :
                <input autoFocus={true} onChange={ onChangeStatus } onBlur={ deActivateMode } value={ status } />}
        </div>
    )
}

export default ProfileStatusWithHooks