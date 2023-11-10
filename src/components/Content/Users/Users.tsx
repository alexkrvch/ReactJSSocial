import User from "./User/User";
import s from "./Users.module.css";
import React, {useEffect} from "react";
import Pagination from "../../Common/Pagination/Paginator";
import UsersForm from "./UsersForm/UsersForm";
import {FilterType, followUser, requestUsers, unFollowUser} from "../../../redux/usersReducer";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFilter, getIsFetching,
    getIsFollowing,
    getPageSize,
    getPartSize,
    getTotalCount,
    getUsers
} from "../../../redux/usersSelectors";
import Preloader from "../../Common/Preloader/Preloader";
import {useNavigate, useSearchParams} from "react-router-dom";

type PropsType = {}

export const Users: React.FC<PropsType> = () => {

    const isFetching = useSelector(getIsFetching)
    const totalCount = useSelector(getTotalCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const partSize = useSelector(getPartSize)
    const users = useSelector(getUsers)
    const isFollowing = useSelector(getIsFollowing)
    const filter = useSelector(getFilter)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [location] = useSearchParams()

    useEffect(() => {
        navigate({
            pathname: '/users',
            search: `?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`
        })
    }, [filter, currentPage]);



    const onChangePage = (p: number) => {
        dispatch(requestUsers(p, pageSize, filter))
    }

    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter))
    }

    const follow = (id: number): void => {
        dispatch(followUser(id))
    }

    const unFollow = (id: number): void => {
        dispatch(unFollowUser(id))
    }

    useEffect(() => {

        let currentLocation = {
            term: location.get('term'),
            friend: location.get('friend'),
            page: location.get('page')
        }

        let actPage:number = currentPage


        let actualFilter:FilterType = filter;
        if(!!currentLocation.term){actualFilter.term = currentLocation.term as string}
        if(!!currentLocation.page){actPage = parseInt(currentLocation.page) as number}
        if(!!currentLocation.friend){actualFilter.friend = currentLocation.friend === 'true' ? true : currentLocation.friend === 'false' ? false : null}


        dispatch(requestUsers(actPage, pageSize, actualFilter))
    }, [])

    let usersMap: React.JSX.Element[] = users.map(u => <User
        key={u.id} id={u.id} name={u.name} photos={u.photos} status={u.status}
        followed={u.followed} follow={follow} unFollow={unFollow} isFollowing={isFollowing}/>)

    if(isFetching){
        return <Preloader />
    }

    return (
        <div className={s.users}>
            <UsersForm onFilterChanged={onFilterChanged}/>
            <Pagination currentPage={currentPage} totalCount={totalCount} pageSize={pageSize}
                        onChangePage={onChangePage} partSize={partSize}/>
            {usersMap.length ? usersMap : 'Empty list'}
        </div>
    )
}