import * as React from "react";
import {useRef} from "react";
import Profile from "./Profile";
import {rename} from "../../store/reducers/profileReducer";
import {connect} from "react-redux";

const ProfileContainer = ({userName, renameUser}) => {
    const textFieldRef = useRef(null);

    const rename = (name) => {
        if (!/\S/g.test(name)) return false;
        renameUser(userName, name);
        return true;
    };

    return (
        <Profile
            textFieldRef={textFieldRef}
            rename={rename}
            userName={userName}
        />
    );
}

const mapStateToProps = (state) => {
    return {
        userName: state.profile.name,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        renameUser: (state, action) => {
            dispatch(rename(action))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
