import {instance, ResponseType} from "../api/api";

export const followAPI = {
    unFollow(id:number) {
        return instance.delete<ResponseType>(`follow/${id}`).then(response => response.data)
    },
    follow(id:number) {
        return instance.post<ResponseType>(`follow/${id}`).then(response => response.data)
    }
}