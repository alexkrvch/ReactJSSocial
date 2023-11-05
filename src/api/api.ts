import axios, {AxiosInstance, AxiosResponse} from "axios";
import {profileType} from "@/redux/types.ts";

type axiosType = {
    withCredentials: true;
    baseURL: string;
    headers: {
        "API-KEY": string;
    };
}

let configAxios: axiosType = {
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '9698416d-3981-4d08-944f-5e79cc4c07cc'
    }
}

const instance:AxiosInstance = axios.create(configAxios)


export const usersAPI = {
    getUsers(currentPage:number, pageSize:number):Promise<any> {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    }
}

export const followAPI = {
    unFollow(id:number):Promise<any> {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    follow(id:number):Promise<any> {
        return instance.post(`follow/${id}`).then(response => response.data)
    }
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}
export enum ResultCodeForCaptcha {
    Captcha = 10
}


type MyType = {
    data: {
        id: number;
        login: string;
        email: string
    }
    messages: string[];
    fieldsErrors: any[];
    resultCode: ResultCodesEnum
}

type LoginType = {
    data: {
        id: number;
    }
    messages: string[];
    resultCode: ResultCodesEnum | ResultCodeForCaptcha
}



export const accountAPI = {
    my() {
        return instance.get<MyType>(`auth/me`).then(response => response.data)
    },
    login(email:string, password:string, rememberMe:boolean = false, captcha:string = '') {
        return instance.post<LoginType>(`auth/login`, {email, password, rememberMe, captcha}).then(response => response.data)
    },
    logout():Promise<any> {
        return instance.delete(`auth/login`).then(response => response.data);
    }
}


export const securityAPI = {
    getCaptcha():Promise<any> {
        return instance.get(`security/get-captcha-url`).then(response => response.data);
    }
}

export const profileAPI = {
    getProfile(userId:number):Promise<any> {
        return instance.get(`profile/${userId}`).then( response => response.data)
    },
    getStatus(userId:number):Promise<any> {
        return instance.get(`profile/status/${userId}`).then( response => response.data)
    },
    setProfileStatus(status:string):Promise<any> {
        return instance.put(`profile/status`, {
            status: status
        })
    },
    setPhoto(photo:any):Promise<any> {
        const formData:FormData = new FormData();
        formData.append("image", photo);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(data: profileType):Promise<any> {
        return instance.put(`profile`, {
            ...data
        })
    }
}