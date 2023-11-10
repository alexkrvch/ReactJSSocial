import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import React, {ChangeEvent, useEffect, useState} from "react";
import ProfileReduxForm from "./ProfileDataForm/ProfileDataForm";
import ProfileData from "./ProfileData/ProfileData";
import {profileType} from "@/types/types.ts";

type ProfileFormValuesType = {
    FullName: string,
    lookingForAJob: boolean,
    LookingForAJobDescription: string,
    AboutMe: string,
    'contacts.facebook': string;
    'contacts.website': string;
    'contacts.vk': string;
    'contacts.twitter': string;
    'contacts.instagram': string;
    'contacts.youtube': string;
    'contacts.github': string;
    'contacts.mainLink': string;
}

type MapStatePropsType = {
    profile: profileType,
    status: string,
    owner: boolean,
    userId: number | null,
    profileUpSt: number
}

type MapDispatchPropsType = {
    setProfileStatus: (status: string) => void,
    savePhoto: (photo:File) => void,
    saveProfile: (formData: ProfileFormValuesType, userId: number | null) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType;

const Profile:React.FC<PropsType> = ({ profile: {photos, fullName, lookingForAJob, contacts, lookingForAJobDescription, aboutMe}, status, owner, setProfileStatus, savePhoto, saveProfile, userId, profileUpSt}) => {

    let [editMode, setEditMode] = useState(false);

    const onEditForm = (value:boolean) => {
        setEditMode(value);
    }

    useEffect(() => {
        if(profileUpSt===1) {
            setEditMode(false)
        }
    }, [profileUpSt]);

    const onMainPhotoSel = (e:ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData:ProfileFormValuesType) => {
        saveProfile(formData, userId)
    }

    return (
        <div>
            <div className={s.profile_back}>
                <img src="https://via.placeholder.com/1456x200" alt="" />
            </div>
            { owner && <input type={'file'} onChange={ onMainPhotoSel } /> }
            <div className={s.profile_header}>
                <img src={photos!=null ? photos.large : 'https://via.placeholder.com/150'} alt="" />
                <h2>{fullName}</h2>
                <ProfileStatusWithHooks status={status} setProfileStatus={setProfileStatus} />
            </div>

            { !editMode ?
                <ProfileData userId={userId} photos={photos} onEditForm={onEditForm} owner={owner} fullName={fullName} lookingForAJob={lookingForAJob} contacts={contacts} lookingForAJobDescription={lookingForAJobDescription} aboutMe={aboutMe} /> :
                <ProfileReduxForm userId={userId} photos={photos} onSubmit={onSubmit} onEditForm={onEditForm} owner={owner} fullName={fullName} lookingForAJob={lookingForAJob} contacts={contacts} lookingForAJobDescription={lookingForAJobDescription} aboutMe={aboutMe} />
            }
        </div>
    );
}

export default Profile;
