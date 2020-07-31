import * as actionTypes from '../actions/actionTypes'
import updateObject from '../../util/updateObject'

const initialState = {
    message: '',
    type: null
}

const setNotification = ( state, action ) => {
    return updateObject( state, { message: action.message, type: action.alertType })
}

const clearNotification = ( state, action ) => {
    return updateObject( state, { message: '', type: null })
}

const reducer = ( state = initialState, action ) => {
    switch(action.type) {
        case actionTypes.SET_NOTIFCATION: return setNotification(state, action)
        case actionTypes.CLEAR_NOTIFICATION: return clearNotification(state, action)
        default: return state
    }
}

export default reducer