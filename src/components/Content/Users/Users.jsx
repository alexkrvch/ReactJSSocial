import s from './Users.module.css'
import User from "./User/User";
import axios from "axios";
import React from "react";


class Users extends React.Component {

    getUsers = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users?page=650').then( data => {
            this.props.setUsers(data.data.items)
        })
    }


    render = () => {
        let users = this.props.users.map(u => <User key={u.id} id={u.id} name={u.name} photos={u.photos} status={u.status} followed={u.followed} follow={this.props.follow} unFollow={this.props.unFollow} />)
        return(
        <div className={s.users}>
            {users.length ? users : <button onClick={this.getUsers}>Get users</button>}
        </div>
        )
    }
}

export default Users