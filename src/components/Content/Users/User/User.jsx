import s from './User.module.css'

const User = (props) => {
    return(
        <div className={s.user}>
            <img className={s.img} src={props.img} />
            <div className={s.info_center}>
                <div className={s.name}>
                    { props.name }
                </div>
                <div className={s.status}>
                    { props.status }
                </div>
                <div className={s.loctaion}>
                    Country: { props.country } City: {props.city}
                </div>
            </div>
            <div className={s.info_right}>
                { props.followed ? <button onClick={ () => { props.unFollow(props.id) } }>UnFollow</button> : <button onClick={ () => { props.follow(props.id) } }>Follow</button> }
            </div>
        </div>
    )
}

export default User