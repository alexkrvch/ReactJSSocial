import {followUser} from "./usersReducer";
import {followAPI} from "../api/follow-api";
import {ResponseType, ResultCodesEnum} from "../api/api";

jest.mock("../api/follow-api")

const FollowAPIMock = followAPI;

const result: ResponseType = {
    resultCode: ResultCodesEnum.Success,
    messages: [],
    data: {}
}

test('', async () => {
    // @ts-ignore
    FollowAPIMock.follow.mockReturnValue(result);

    const thunk = followUser(2)
    const dispatchMock = jest.fn()

    // @ts-ignore
    await thunk(dispatchMock);

    expect(dispatchMock).toBeCalledTimes(3)
})