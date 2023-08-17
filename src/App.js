import './App.css';
import Header from './Header';
import Nav from "./Nav";
import Content from "./Content";
import Footer from "./Footer";

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


export default App;
