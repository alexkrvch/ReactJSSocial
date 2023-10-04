import './App.css';
import Header from './components/Header/Header';
import Nav from "./components/Nav/Nav";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="App-content">
                    <Header />
                    <div className="App-centerPage">
                        <Nav />
                        <Content DialogData={props.DialogData} MessageData={props.MessageData} PostData={props.PostData} />
                    </div>
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
