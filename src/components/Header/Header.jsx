import logo from "../../logo.svg";
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header_page}>
            <img alt="" className={s.logo} src={logo} />
            WebArcticFox React
        </header>
    );
}

export default Header;