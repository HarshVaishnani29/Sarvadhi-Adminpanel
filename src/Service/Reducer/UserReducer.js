import * as actionTypes from '../Constant/ActionType';

const initialState = {
    users: [],
    user: {},
    isLoading: false,
    isEdit: false,
    addSuccess: false
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_USER:
            return state;

        case actionTypes.GET_USERS:
            return {
                ...state,
                users: action.payload,
                isLoading: false,
                isEdit: false,
                addSuccess: false,
                user: {}
            };

        case actionTypes.GET_USER:
            return {
                ...state,
                user: action.payload,
                addSuccess: false,
                isEdit: true
            };

        case actionTypes.UPDATE_USER:
            return {
                ...state,
                addSuccess: false,
                isEdit: false
            };

        case actionTypes.IS_LOADING:
            return {
                ...state,
                addSuccess: false,
                isLoading: true
            };

        case actionTypes.DELETE_USER:
            return {
                ...state,
                addSuccess: false,
                isLoading: false
            };

        case actionTypes.ADD_USER_SUCCESS:
            return {
                ...state,
                addSuccess: true
            };

        case actionTypes.GET_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isEdit: false,
                addSuccess: false,
                users: action.payload
            };

        default:
            return state;
    }
};

export default userReducer;
