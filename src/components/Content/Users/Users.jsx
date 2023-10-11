import s from './Users.module.css'
import User from "./User/User";
import axios from "axios";
import React from "react";


class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then( data => {
            this.props.setUsers(data.data)
        })
    }

    onChangePage = (p) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then( data => {
            this.props.setUsers(data.data)
        })
        this.props.setCurrentPage(p)
    }



    render = () => {

        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);

        let pages = [];
        for (let i=1; i<=pagesCount; i++) {
            pages.push(i);
        }

        let users = this.props.users.map(u => <User key={u.id} id={u.id} name={u.name} photos={u.photos} status={u.status} followed={u.followed} follow={this.props.follow} unFollow={this.props.unFollow} />)
        return(
        <div className={s.users}>

            <div className={s.navigation}>
                { pages.map(p => <span onClick={ () => {this.onChangePage(p)}} className={ p === this.props.currentPage ? s.selNavigation : ''}>{p}</span>) }
            </div>

            {users.length ? users : 'Empty list'}
        </div>
        )
    }
}

export default Users