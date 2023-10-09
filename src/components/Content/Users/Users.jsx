import s from './Users.module.css'
import User from "./User/User";

const Users = (props) => {

    let users = props.users.map(u => <User key={u.id} id={u.id} name={u.name} img={u.img} city={u.location.city} country={u.location.country} status={u.status} followed={u.followed} follow={props.follow} unFollow={props.unFollow} />)

    let usersList = [{id: 1, name: 'Alex', status: 'My status', location: {country: 'Belarus', city: 'Polost'}, img: 'https://via.placeholder.com/60', followed: false},
        {id: 2, name: 'Mike', status: 'Dumb status', location: {country: 'Germany', city: 'Berlin'}, img: 'https://via.placeholder.com/60', followed: true},
        {id: 3, name: 'Andy', status: 'Im stupid', location: {country: 'Belarus', city: 'Misnk'}, img: 'https://via.placeholder.com/60', followed: false}];

    return(
        <div className={s.users}>
            { users.length ? users : <button onClick={ () => { props.setUsers(usersList) }} >Download users</button> }
        </div>
    )
}

export default Users