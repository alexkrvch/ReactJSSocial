import {instance} from "../api/api";

export const securityAPI = {
    getCaptcha():Promise<any> {
        return instance.get(`security/get-captcha-url`).then(response => response.data);
    }
}