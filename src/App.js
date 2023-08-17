import './App.css';
import logo from './logo.svg';

const App = () => {
    return (
        <div className="App">
            <div className="App-content">
                <Header />
                <Nav />
                <Content />
                <Footer />
            </div>
        </div>
    );
}

const Header = () => {
    return (
        <header className="App-header">
            <img srcSet={logo} alt="" />
        </header>
    );
}

const Nav = () => {
    return (
        <nav className="App-nav">
            Text nav
        </nav>
    );
}

const Content = () => {
    return (
        <div className="App-pagecontent">
            Content
        </div>
    )
}

const Footer = () => {
    return (
        <footer className="App-footer">
            Footer
        </footer>
    );
}

export default App;
