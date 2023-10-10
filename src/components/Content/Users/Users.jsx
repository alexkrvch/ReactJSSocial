import s from './Users.module.css'
import User from "./User/User";
import axios from "axios";

const Users = (props) => {

    let users = props.users.map(u => <User key={u.id} id={u.id} name={u.name} photos={u.photos} status={u.status} followed={u.followed} follow={props.follow} unFollow={props.unFollow} />)

    const getUsers = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users?page=650').then( data => {
            props.setUsers(data.data.items)
        })
    }

    return(
        <div className={s.users}>
            { users.length ? users : <button onClick={ getUsers } >Download users</button> }
        </div>
    )
}

export default Users