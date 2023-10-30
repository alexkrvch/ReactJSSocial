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

// test tsx


let user = {name: 'Admin', age: 28, links: {
        'vk': '2222',
        'youtube': '22222'
    }}


let admin: string = 'admin'

admin = 'my';

let isMy: boolean | null = true;

isMy = false


let array: string[] = ['afg','444rwar4','gwagaw'];


let array2: Array<number> = [24,1,6];


array.map(n => {
    n.toUpperCase()
})

array.forEach(n => {
    //alert(n.toUpperCase())
})


let sex: 'male' | 'female';

sex = 'male';

type AddressType = {
    street: string,
    country: string,
    home?: number
}

type UserType = {
    sayHello: (message: string) => void
    name: string,
    age: number,
    address: AddressType | null
}


let myUser: UserType = {
    sayHello: (message:string) => {
        alert(message);
    },
    name: 'Alex',
    age: 40,
    address: {
        street: 'Khutskogo',
        country: 'Belarus',
        home: 23
    }
}

// myUser.sayHello('Hi')




const summ: (a:number, b: number) => number = (a:number = 0, b:number = 45) => {
    return a + b
}


alert(summ(4, 42));






let initialState = {
    name: null as string | null,
    age: null as number | null,
    isSamurai: null as boolean | null,
    address: [] as Array<AddressType>,
    counter: null as number | null,
}


export type InitialStateType = typeof initialState

let state2: InitialStateType = {
    name: 'alex',
    age: 20,
    address: [{
        home: 20,
        country: 'Belarus',
        street: 'kh'
    }],
    counter: 40,
    isSamurai: true
}


let userMy = {
    sayHello(message: string) {alert(`you ${message}`)},
    name: 'Alex',
    age: 32,
    address: null
}


let GET_TASKS = "App/GetTASKS";

type GetTasksActionType = {
    id: number,
    type: typeof GET_TASKS
}

let action: GetTasksActionType = {
    type: GET_TASKS,
    id: 12
}



// /test tsx


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
