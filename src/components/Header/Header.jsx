import logo from "../../logo.svg";
import s from './Header.module.css'

const Header = (props) => {
    return (
        <header className={s.header_page}>
            <img alt="" className={s.logo} src={logo} />
            WebArcticFox React
            <div className={s.auth_section}>
                { !props.isAuth ? 'Login' : props.login}
            </div>
        </header>
    );
}

export default Header;