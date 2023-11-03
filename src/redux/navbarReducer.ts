
type initialStateType = {
    Friends:{
        id: number;
        name: string;
        img: string;
    }[]
}

let initialState:initialStateType = {
    Friends: [
        {id: 1, name: 'Alex', img: 'https://via.placeholder.com/60'},
        {id: 2, name: 'Mike', img: 'https://via.placeholder.com/60'},
        {id: 3, name: 'Andy', img: 'https://via.placeholder.com/60'}
    ],
}

const navbarReducer = (state:initialStateType = initialState, action:any):initialStateType => {

    switch (action.type){
        default:
            return state
    }

}

export default navbarReducer