import {actions, followUser, unFollowUser} from "./usersReducer";
import {followAPI} from "../api/follow-api";
import {ResponseType, ResultCodesEnum} from "../api/api";

jest.mock("../api/follow-api")

const FollowAPIMock = followAPI as jest.Mocked<typeof followAPI>;

const result: ResponseType = {
    resultCode: ResultCodesEnum.Success,
    messages: [],
    data: {}
}

const resultFail: ResponseType = {
    resultCode: 1,
    messages: [],
    data: {}
}

const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(() => {
    dispatchMock.mockClear()
    getStateMock.mockClear()
})

test('Confirm follow user', async () => {
    FollowAPIMock.follow.mockReturnValue(Promise.resolve(result));
    const thunk = followUser(2)
    await thunk(dispatchMock, getStateMock, null);

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.startFollowing(2))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followUnfollow(2, true))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.stopFollowing(2))
})

test('Fail follow user', async () => {
    FollowAPIMock.follow.mockReturnValue(Promise.resolve(resultFail));
    const thunk = followUser(2)
    await thunk(dispatchMock, getStateMock, null);

    expect(dispatchMock).toBeCalledTimes(2)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.startFollowing(2))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.stopFollowing(2))
})

test('Confirm unfollow user', async () => {
    FollowAPIMock.unFollow.mockReturnValue(Promise.resolve(result));
    const thunk = unFollowUser(2)
    await thunk(dispatchMock, getStateMock, null);

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.startFollowing(2))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followUnfollow(2, false))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.stopFollowing(2))
})

test('Fail unfollow user', async () => {
    FollowAPIMock.unFollow.mockReturnValue(Promise.resolve(resultFail));
    const thunk = unFollowUser(2)
    await thunk(dispatchMock, getStateMock, null);

    expect(dispatchMock).toBeCalledTimes(2)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.startFollowing(2))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.stopFollowing(2))
})