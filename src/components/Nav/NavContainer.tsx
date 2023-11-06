import {connect} from "react-redux";
import Nav from "./Nav";
import {AppStateType} from "@/redux/redux-store.ts";
import {FriendType, NavType} from "@/types/types.ts";

type MapStatePropsType = {
    friends: FriendType[],
    menu: NavType[]
}

let mapStateToProps = (state:AppStateType):MapStatePropsType => {
    return {
        friends: state.Navbar.Friends,
        menu: state.Menu.navItems
    }
}


export default connect(mapStateToProps, {})(Nav);