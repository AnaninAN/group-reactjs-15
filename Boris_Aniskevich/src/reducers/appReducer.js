import { getUserData } from 'reducers/userReducer'

const SET_INITIALIZED = 'SET_INITIALIZED'

const initialState = {
    isInitialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_INITIALIZED':
            return {...state, isInitialized: action.payload}
        default: return state
    }
}

const setInitialized = (payload) => ({type: 'SET_INITIALIZED', payload})

export const initialize = () => dispatch => {
    dispatch(getUserData()).then(() => {
        dispatch(setInitialized(true))
    })
}

export default appReducer