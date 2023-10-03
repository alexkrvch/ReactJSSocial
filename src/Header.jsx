import logo from "./logo.svg";

const Header = () => {
    return (
        <header>
            <nav>
                <img alt="" className="logo" src={logo} />
                WebArcticFox React
            </nav>
        </header>
    );
}

export default Header;