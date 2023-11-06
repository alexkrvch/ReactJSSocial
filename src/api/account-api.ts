import {instance, ResponseType, ResultCodesEnum} from "../api/api";

type MyDataType = {
    id: number;
    login: string;
    email: string
}

type LoginDataType = {
    id: number;
}

export enum ResultCodeForCaptcha {
    Captcha = 10
}

export const accountAPI = {
    my() {
        return instance.get<ResponseType<MyDataType>>(`auth/me`).then(response => response.data)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string = '') {
        return instance.post<ResponseType<LoginDataType, ResultCodesEnum | ResultCodeForCaptcha>>(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        }).then(response => response.data)
    },
    logout(): Promise<any> {
        return instance.delete(`auth/login`).then(response => response.data);
    }
}