import axios from "axios";
import {setUserProfile} from "../redux/profileReducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '9698416d-3981-4d08-944f-5e79cc4c07cc'
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    }
}

export const followAPI = {
    unFollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`).then(response => response.data)
    }
}

export const accountAPI = {
    my() {
        return instance.get(`auth/me`).then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then( response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then( response => response.data)
    },
    setProfileStatus(status) {
        return instance.put(`profile/status`, {
            status: status
        })
    }
}