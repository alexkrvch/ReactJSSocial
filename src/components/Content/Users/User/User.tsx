import s from './User.module.css'
import {NavLink} from "react-router-dom";
import React from "react";
import {photosType} from "@/types/types.ts";

type OwnPropsType = {
    id: number,
    photos: photosType,
    name: string,
    followed: boolean,
    status: string | null,
    isFollowing: number[],
    follow: (id:number) => void,
    unFollow: (id:number) => void
}

const User:React.FC<OwnPropsType> = ({id, photos, name, followed, follow, isFollowing, unFollow, status}) => {
    return(
        <div className={s.user}>
            <NavLink to={`/profile/${id}`}>
                <img className={s.img} src={photos.small!=null ? photos.small : 'https://via.placeholder.com/100'}  alt=''/>
            </NavLink>
            <div className={s.info_center}>
                <div className={s.name}>
                    { name }
                </div>
                <div className={s.status}>
                    { status }
                </div>
            </div>
            <div className={s.info_right}>
                { followed ?
                    <button disabled={isFollowing.some(ids => ids === id)} onClick={ () => { unFollow(id) } }>UnFollow</button> :
                    <button disabled={isFollowing.some(ids => ids === id)} onClick={ () => { follow(id) } }>Follow</button> }
            </div>
        </div>
    )
}

export default User