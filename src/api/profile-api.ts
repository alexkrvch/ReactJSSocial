import {photosType, profileType} from "@/types/types";
import { AxiosRequestConfig } from 'axios';
import {instance, ResponseType} from "../api/api";

const config: AxiosRequestConfig = {
    headers: {
        "Content-Type": 'ultipart/form-data'
    },
    string: ''
};


type photosTypes = {photos: photosType;}

export const profileAPI = {
    getProfile(userId:number){
        return instance.get<profileType>(`profile/${userId}`).then( response => response.data)
    },
    getStatus(userId:number) {
        return instance.get<string>(`profile/status/${userId}`).then( response => response.data)
    },
    setProfileStatus(status:string) {
        return instance.put<ResponseType>(`profile/status`, {
            status: status
        }).then(res => res.data)
    },
    setPhoto(photo:File) {
        const formData:FormData = new FormData();
        formData.append("image", photo);
        return instance.put<ResponseType<photosTypes>>(`profile/photo`, formData, config).then(res => res.data)
    },
    saveProfile(data: profileType) {
        return instance.put<ResponseType>(`profile`, {
            ...data
        }).then( res => res.data)
    }
}