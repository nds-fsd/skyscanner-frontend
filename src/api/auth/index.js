import {deleteStorageObject, getStorageObject, setStorageObject} from "../storage";

export const getUserToken = () => {
    const session = getStorageObject("token");
    if(session){
        return session.token
    }
    return undefined;
}

export const getSessionUser = () => {
    const session = getStorageObject("token");
    if(session){
        return session.user
    }
    return undefined;
}

export const setUserSession = (sessionData) =>{
    setStorageObject("token", sessionData);
}

export const removeSession = () => {
    deleteStorageObject("token");
}