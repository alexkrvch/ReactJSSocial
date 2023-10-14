import {connect} from "react-redux";
import Nav from "./Nav";

let mapStateToProps = (state) => {
    return {
        friends: state.Navbar.Friends,
        menu: state.Menu.navItems
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav)


export default NavContainer;