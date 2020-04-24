import {apiLogin, studentMe, teacherMe} from "./api_service";

let me = null;
let triedOnce = false;
let _isStudent = false;
let _isTeacher = false;
let authenticated = false;
export const isAuthenticated = async () => {
    if (triedOnce) {
        return !!me
    }
    triedOnce = true;
    try {
        me = await studentMe();
        _isStudent = true
        return !!me
    } catch (error) {
    }
    try {
        me = await teacherMe()
        _isTeacher = true
        return !!me;
    } catch (e) {
    }
    return me
}

export const isStudent = () => {
    if(!isAuthenticated()) {
        return false
    }
    return _isStudent
}

export const isTeacher = async () => {
    if(!isAuthenticated()) {
        return false
    }
    return _isTeacher
}

export const authLogin = async({username, password}) => {
    await apiLogin({username, password});
    await refreshAuth()
}

export const refreshAuth = async () => {
    triedOnce = false;
    await isAuthenticated()
}

export default {authLogin, isAuthenticated, refreshAuth}