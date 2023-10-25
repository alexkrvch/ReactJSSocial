import User from "./User/User";
import s from "./Users.module.css";
import React from "react";
import Pagination from "../../Common/Pagination/Paginator";

const Users = ({currentPage, onChangePage, totalCount, pageSize, users, follow, unFollow, isFollowing, partSize}) => {
    let usersMap = users.map(u => <User
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