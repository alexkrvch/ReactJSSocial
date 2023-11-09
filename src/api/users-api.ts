import {GetItemsType, instance} from "../api/api";

export const usersAPI = {
    getUsers(currentPage:number, pageSize:number, term: string = '') {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}&term=${term}`).then(response => response.data);
    }
}