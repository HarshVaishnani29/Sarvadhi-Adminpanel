import { SIGNUP_SUCCESS, SIGNUP_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, LOGOUT_FAIL } from "../Constant/ActionType";

const initialState = {
    isLoading: false,
    User: null,
    error: null
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                User: action.payload,
                error: null
            }
            break;

        case SIGNUP_FAIL :
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
            break;

        case LOGOUT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                User: null
            }
            break;

        case LOGOUT_FAIL :
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
            break;

        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                User: action.payload,
                error: null
            }
            break;

        case LOGIN_FAIL :
            return {
                ...state,
                isLoading: false,
                User: null,
                error: action.payload
            }
            break;

        default:
            return state
            break;
    }
}

export default authReducer