const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type){
        case ADD_POST:
            let today = new Date().toLocaleDateString('en-GB');
            let newPost = {id: 5, header: 'Def header', text: state.newPostText, countLikes: 0, date: today};
            state.PostData.push(newPost);
            state.newPostText = '';
            return state;
        case CHANGE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: CHANGE_NEW_POST_TEXT, text: text})

export default profileReducer