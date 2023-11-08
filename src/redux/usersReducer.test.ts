import usersReducer, {actions, initialStateType} from "./usersReducer";

let state:initialStateType;

beforeEach(() => {
    state = {
        UsersList: [{
            id: 0, name: 'Alex', followed: false, status: 'status 0', photos: {large: null, small: null}
        },{
            id: 1, name: 'MK', followed: true, status: 'status 1', photos: {large: null, small: null}
        },{
            id: 2, name: 'Admin', followed: false, status: 'status 2', photos: {large: null, small: null}
        }],
        pageSize: 100,
        totalCount: 0,
        currentPage: 1,
        isFetching: false,
        partSize: 20,
        followingInProgress: []
    };
})

test("Follow user", () => {
    const newState = usersReducer(state, actions.followUnfollow(1, false))
    expect(newState.UsersList[1].followed).toBeFalsy();
    expect(newState.UsersList[0].followed).toBeFalsy();
})

test("Unfollow user", () => {
    const newState = usersReducer(state, actions.followUnfollow(2, true))
    expect(newState.UsersList[2].followed).toBeTruthy();
    expect(newState.UsersList[0].followed).toBeFalsy();
})