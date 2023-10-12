import './App.css';
import NavContainer from "./components/Nav/NavContainer";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="App-content">
                    <HeaderContainer />
                    <div className="App-centerPage">
                        <NavContainer />
                        <Content />
                    </div>
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
