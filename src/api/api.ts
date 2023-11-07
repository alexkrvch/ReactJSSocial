import axios, {AxiosInstance, CreateAxiosDefaults} from "axios";
import {userType} from "@/types/types";

interface ConfigAxiosType extends CreateAxiosDefaults<any> {
    withCredentials: boolean;
    baseURL: string;
    headers: {
        "API-KEY": string;
        "Content-Type"?: string
    };
    string: string
}

let configAxios: ConfigAxiosType = {
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '9698416d-3981-4d08-944f-5e79cc4c07cc'
    },
    string: "",
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