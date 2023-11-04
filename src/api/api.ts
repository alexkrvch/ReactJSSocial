import axios, {AxiosInstance} from "axios";

const instance:AxiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '9698416d-3981-4d08-944f-5e79cc4c07cc'
    }
})

export const usersAPI = {
    getUsers(currentPage:number, pageSize:number):Promise<void> {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    }
}

export const followAPI = {
    unFollow(id:number):Promise<void> {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    follow(id:number):Promise<void> {
        return instance.post(`follow/${id}`).then(response => response.data)
    }
}

export const accountAPI = {
    my():Promise<void> {
        return instance.get(`auth/me`).then(response => response.data)
    },
    login(email:string, password:string, rememberMe:boolean = false, captcha:string = ''):Promise<void> {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha}).then(response => response.data)
    },
    logout():Promise<void> {
        return instance.delete(`auth/login`).then(response => response.data);
    }
}

export const securityAPI = {
    getCaptcha():Promise<void> {
        return instance.get(`security/get-captcha-url`).then(response => response.data);
    }
}

export const profileAPI = {
    getProfile(userId:number):Promise<void> {
        return instance.get(`profile/${userId}`).then( response => response.data)
    },
    getStatus(userId:number):Promise<void> {
        return instance.get(`profile/status/${userId}`).then( response => response.data)
    },
    setProfileStatus(status:string):Promise<void> {
        return instance.put(`profile/status`, {
            status: status
        })
    },
    setPhoto(photo:any):Promise<void> {
        const formData:FormData = new FormData();
        formData.append("image", photo);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(data:any):Promise<void> {
        return instance.put(`profile`, {
            ...data
        })
    }
}