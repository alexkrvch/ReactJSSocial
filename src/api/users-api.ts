import {GetItemsType, instance} from "../api/api";

export const usersAPI = {
    getUsers(currentPage:number, pageSize:number) {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    }
}