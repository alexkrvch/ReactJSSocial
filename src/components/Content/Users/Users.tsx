import User from "./User/User";
import s from "./Users.module.css";
import React from "react";
import Pagination from "../../Common/Pagination/Paginator";
import {userType} from "@/redux/types.ts";

type PropsType = {
    currentPage: number,
    onChangePage: (p:number) => void,
    totalCount: number,
    pageSize: number,
    users: userType[],
    follow: (id:number) => void,
    unFollow: (id:number) => void,
    isFollowing: number[],
    partSize?: number
}

const Users: React.FC<PropsType> = ({currentPage, onChangePage, totalCount, pageSize, users, follow, unFollow, isFollowing, partSize = 20}) => {
    let usersMap:React.JSX.Element[] = users.map(u => <User
        key={u.id} id={u.id} name={u.name} photos={u.photos} status={u.status}
        followed={u.followed} follow={follow} unFollow={unFollow} isFollowing={isFollowing} />)
    return(
        <div className={s.users}>
            <Pagination currentPage={currentPage} totalCount={totalCount} pageSize={pageSize} onChangePage={onChangePage} partSize={partSize} />
            {usersMap.length ? usersMap : 'Empty list'}
        </div>
    )
}

export default Users