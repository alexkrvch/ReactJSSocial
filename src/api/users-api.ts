import {GetItemsType, instance} from "../api/api";

export const usersAPI = {
    getUsers(currentPage:number, pageSize:number, term: string = '', friend: null | boolean = null ) {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '': `&friend=${friend}`)).then(response => response.data);
    }
}