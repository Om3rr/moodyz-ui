import React, {Component} from 'react';
import {
    Redirect, Route
} from "react-router-dom";
import AuthService, {isTeacher, isStudent} from "../services/AuthService";

export const PrivateRoute = ({component, ...rest}) => (
    <Route {...rest} render={(props) => (
        AuthService.isAuthenticated() === true
            ? <Component {...props} />
            : <Redirect to='/login'/>
    )}/>
);

export const TeacherRoute = ({component, ...rest}) => (
    <Route {...rest} render={(props) => (
        isTeacher() ? <Component {...props} />
            : <Redirect to='/login'/>
    )}/>
)

export const StudentRoute = ({component, ...rest}) => (
    <Route {...rest} render={(props) => (
        isStudent() ? <Component {...props} />
            : <Redirect to='/login'/>
    )}/>
)

export default PrivateRoute