import logo from "../../logo.svg";
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header_page}>
            <nav>
                <img alt="" className={s.logo} src={logo} />
                WebArcticFox React
            </nav>
        </header>
    );
}

export default Header;