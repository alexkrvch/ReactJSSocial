import User from "./User/User";
import s from "./Users.module.css";
import React from "react";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);

    let pages = [];
    for (let i=1; i<=pagesCount; i++) {
        pages.push(i);
    }

    let users = props.users.map(u => <User key={u.id} id={u.id} name={u.name} photos={u.photos} status={u.status} followed={u.followed} follow={props.follow} unFollow={props.unFollow} isFollowing={props.isFollowing} />)
    return(
        <div className={s.users}>

            <div className={s.navigation}>
                { pages.map(p => <span onClick={ () => {props.onChangePage(p)}} className={ p === props.currentPage ? s.selNavigation : ''}>{p}</span>) }
            </div>

            {users.length ? users : 'Empty list'}
        </div>
    )
}

export default Users