import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import {useEffect, useState} from "react";
import ProfileReduxForm from "./ProfileDataForm/ProfileDataForm";
import ProfileData from "./ProfileData/ProfileData";


const Profile = ({ profile: {photos, fullName, lookingForAJob, contacts, lookingForAJobDescription, aboutMe}, status, owner, setProfileStatus, savePhoto, saveProfile, userId, profileUpSt}) => {

    let [editMode, setEditMode] = useState(false);

    const onEditForm = (value) => {
        setEditMode(value);
    }

    useEffect(() => {
        if(profileUpSt===1) {
            setEditMode(false)
        }
    }, [profileUpSt]);

    const onMainPhotoSel = (e) => {
        if( e.target.files.length ) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData, userId)
    }

    return (
        <div>
            <div className={s.profile_back}>
                <img src="https://via.placeholder.com/1456x200" alt="" />
            </div>
            { owner && <input type={'file'} onChange={ onMainPhotoSel } /> }
            <div className={s.profile_header}>
                <img src={photos.large!=null ? photos.large : 'https://via.placeholder.com/150'} alt="" />
                <h2>{fullName}</h2>
                <ProfileStatusWithHooks status={status} setProfileStatus={setProfileStatus} />
            </div>

            { !editMode ?
                <ProfileData onEditForm={onEditForm} owner={owner} fullName={fullName} lookingForAJob={lookingForAJob} contacts={contacts} lookingForAJobDescription={lookingForAJobDescription} aboutMe={aboutMe} /> :
                <ProfileReduxForm onSubmit={onSubmit} onEditForm={onEditForm} owner={owner} fullName={fullName} lookingForAJob={lookingForAJob} contacts={contacts} lookingForAJobDescription={lookingForAJobDescription} aboutMe={aboutMe} />
            }
        </div>
    );
}

export default Profile;
