import profileReducer, {actions} from "./profileReducer";
import {profileType} from "../types/types";

let state = {
    PostData: [
        {id: 1, header: 'First post', text: 'Nullam euismod,1 diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.', countLikes: 3, date: '09 September 2023'},
        {id: 2, header: 'Second post', text: 'Nullam euismod,2 diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.', countLikes: 5, date: '02 September 2023'},
        {id: 3, header: 'Next post', text: 'Nullam euismod,3 diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.', countLikes: 12, date: '28 August 2023'},
        {id: 4, header: 'New post', text: 'Nullam euismod,4 diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.', countLikes: 2, date: '21 August 2023'},
    ],
    profile: null as profileType | null,
    profileId: 1,
    status: '',
    profileUpdateStatus: 0
}

it('new post should be added', () => {
    // 1. test data
    let action = actions.addPost('Hi test');

    // 2. action
    let newState = profileReducer(state,action);

    // 3. expectation
    expect(newState.PostData.length).toBe(5)
})


it(`test text in the new post text`, () => {
    // 1. test data
    let action = actions.addPost('Hi test');

    // 2. action
    let newState = profileReducer(state,action);

    // 3. expectation
    expect(newState.PostData[4].text).toBe('Hi test')
})

it('delete post', () => {
    // 1. test data
    let action = actions.deletePost(1);

    // 2. action
    let newState = profileReducer(state,action);

    // 3. expectation
    expect(newState.PostData.length).toBe(3)
})

it('after delete post dont change after incorrect ID', () => {
    // 1. test data
    let action = actions.deletePost(200);

    // 2. action
    let newState = profileReducer(state,action);

    // 3. expectation
    expect(newState.PostData.length).toBe(4)
})