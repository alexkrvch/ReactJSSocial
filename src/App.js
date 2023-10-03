import './App.css';
import Header from './components/Header';
import Nav from "./components/Nav";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="App">
            <div className="App-content">
                <Header />
                <div className="App-centerPage">
                    <Nav />
                    <Content />
                </div>
                <Footer />
            </div>
        </div>
    );
}


export default App;
