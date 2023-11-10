import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../../Common/Preloader/Preloader";
import {ProfileFormValuesType, profileType} from "@/types/types.ts";
import React from "react";


type MapStatePropsType = {
    profile: profileType | null,
    userId: number | null,
    isAuth: boolean,
    status: string,
    profileUpSt: number,
    owner: boolean
}

type MapDispatchPropsType = {
    getProfile: (userId:number) => void,
    getProfileStatus: (userId:number) => void,
    setProfileStatus: (status: string) => void,
    savePhoto: (photo: File) => void,
    saveProfile: (profile: ProfileFormValuesType, userId: number | null) => void
}


type PropsType = MapStatePropsType & MapDispatchPropsType

const Profile:React.FC<PropsType> = (props) => {
    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} savePhoto={props.savePhoto} setProfileStatus={props.setProfileStatus} owner={props.owner} saveProfile={props.saveProfile} userId={props.userId} profileUpSt={props.profileUpSt} />

            { props.owner ? <MyPostsContainer /> : ''}
        </div>
    );
}

export default Profile;
