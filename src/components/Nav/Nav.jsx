import s from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={s.sidebar_nav}>
            <div className={s.sidebar}>
                <ul className={s.sidebar_menu}>
                    <li className={`${s.menu_item} ${s.menu_active}`}><a href="#">Home</a></li>
                    <li className={s.menu_item}><a href="#">Profile</a></li>
                    <li className={s.menu_item}><a href="#">Friends</a></li>
                    <li className={s.menu_item}><a href="#">Settings</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;