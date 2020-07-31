import * as actionTypes from './actionTypes'

export const setNotification = (message, alertType) => {
    return {
        type: actionTypes.SET_NOTIFCATION,
        message,
        alertType
    }
}

export const clearNotification = () => {
    return {
        type: actionTypes.CLEAR_NOTIFICATION 
    }
}