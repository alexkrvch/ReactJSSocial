import React, {useEffect} from "react";
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {
    getProfile,
    getProfileStatus,
    savePhoto,
    saveProfile,
    setProfileStatus
} from "../../../redux/profileReducer";
import {AppStateType} from "@/redux/redux-store.ts";
import {profileType} from "@/types/types.ts";
import {useNavigate, useParams} from "react-router-dom";

type ProfilePageType = {

}

const ProfilePage:React.FC<ProfilePageType> = (props) => {
    const profile = useSelector((state:AppStateType) => state.ProfilePage.profile)
    const userId = useSelector((state:AppStateType) => state.Auth.userId)
    const isAuth = useSelector((state:AppStateType) => state.Auth.isAuth)
    const status = useSelector((state:AppStateType) => state.ProfilePage.status)
    const profileUpSt = useSelector((state:AppStateType) => state.ProfilePage.profileUpdateStatus)

    const navigate = useNavigate();
    const params = useParams();

    const dispatch = useDispatch();

    let userIdOwn: typeof userId

    const refreshProfile = () => {
        userIdOwn = !params.userId ? userId : params.userId
        if(userIdOwn){
            dispatch(getProfile(userIdOwn))
            dispatch(getProfileStatus(userIdOwn))
        }else{
            navigate('/login');
        }
    }

    const getProfileUser = (userId:number) => {
        dispatch(getProfile(userId))
    }

    const getProfileStatusUser = (userId:number) => {
        dispatch(getProfileStatus(userId))
    }

    const setProfileStatusUser = (status:string) => {
        dispatch(setProfileStatus(status))
    }

    const saveProfileUser = (profile:profileType, userId:number) => {
        debugger
        dispatch(saveProfile(profile, userId))
    }

    const savePhotoUser = (photo:File) => {
        dispatch(savePhoto(photo))
    }

    useEffect(() => {
        refreshProfile()
    }, [params.userId, userId])

    return(
        <div>
            <Profile getProfileStatus={getProfileStatusUser} setProfileStatus={setProfileStatusUser} getProfile={getProfileUser} userId={userId} profile={profile} isAuth={isAuth} profileUpSt={profileUpSt} status={status}  owner={!params.userId} savePhoto={savePhotoUser} saveProfile={saveProfileUser} />
        </div>
    )
}


export default ProfilePage