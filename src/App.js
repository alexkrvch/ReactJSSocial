import './App.css';
import Header from './components/Header/Header';
import Nav from "./components/Nav/Nav";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

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
