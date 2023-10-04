import s from './Friend.module.css'

const Nav = (props) => {
    return (
        <div className={s.friend}>
            <img src={props.img} alt={props.name} />
            <span>{props.name}</span>
        </div>
    );
}

export default Nav;