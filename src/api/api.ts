import axios, {AxiosInstance, AxiosResponse} from "axios";
import {profileType, userType} from "@/types/types.ts";
import User from "@/components/Content/Users/User/User.js";

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

export const instance:AxiosInstance = axios.create(configAxios)

export type ResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D,
    messages: string[],
    resultCode: RC
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}


export type GetItemsType = {
    items: userType[],
    totalCount: number,
    error: string | null
}







