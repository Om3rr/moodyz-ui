import React from 'react';
import {Redirect} from "react-router";
import * as R from 'recompose'
import {isAuthenticated, isStudent, isTeacher} from "../services/AuthService";

const WaitPage = ({onSuccess, onFailure, loading, isSuccess}) => {
    if(loading) {
        return (<div className={"spinner"}/>)
    }
    return (<Redirect to={isSuccess ? onSuccess : onFailure}/>)
}


const enhance = R.compose(
    R.withState("loading", "setLoading", true),
    R.withState("isSuccess", "setSuccess", false),
    R.lifecycle({
        async componentDidMount() {
            const {accessLevel, setLoading, setSuccess} = this.props;
            await isAuthenticated();
            if(accessLevel === 'student' && isStudent()) {
                setSuccess(true)
            }
            if(accessLevel === 'teacher' && isTeacher()) {
                setSuccess(true)
            }
            setLoading(false)
        }
    })
);

export default enhance(WaitPage)