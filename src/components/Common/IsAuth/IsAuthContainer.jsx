import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        isAuth: state.Auth.isAuth
    }
}

const IsAuthContainer = connect(mapStateToProps, {})(Messages)

export default IsAuthContainer
