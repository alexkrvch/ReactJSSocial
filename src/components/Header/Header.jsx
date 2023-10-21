import logo from "../../logo.svg";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header_page}>
            <img alt="" className={s.logo} src={logo} />
            WebArcticFox React
            <div className={s.auth_section}>
                { !props.isAuth ? <NavLink to={`/login`}>Login</NavLink> : <div>{props.login} <button onClick={props.logout}>Log Out</button></div>}
            </div>
        </header>
    );
}

export default Header;