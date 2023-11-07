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
import React from 'react';
import {AppStateType} from "@/redux/redux-store.ts";

type MapStatePropsType = {
    initialized:boolean
}

type MapDispatchPropsType = {
    initializeApp: () => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

class App extends Component<PropsType> {
    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert('some error');
    }

    componentDidMount():void {
        this.props.initializeApp()
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount():void {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    render():JSX.Element {
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


const mapStateToProps = (state:AppStateType) => ({
    initialized: state.App.initialized
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {initializeApp})
)(App);
