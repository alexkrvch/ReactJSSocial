import './App.css';
import NavContainer from "./components/Nav/NavContainer";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/Common/Preloader/Preloader";

class App extends Component {
    catchAllUnhandledErrors = (error) => {
        alert('some error');
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader />
        }
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div className="App">
                    <div className="App-content">
                        <HeaderContainer/>
                        <div className="App-centerPage">
                            <NavContainer/>
                            <Content/>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}


const mapStateToProps = (state) => ({
    initialized: state.App.initialized
})

export default compose(
    connect(mapStateToProps, {initializeApp})
)(App);
