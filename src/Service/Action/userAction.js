// userActions.js
import { Api } from '../../Component/Api/index';
import * as actionTypes from '../Constant/ActionType';

export const createUser = (data) => {
    return {
        type: actionTypes.CREATE_USER,
        payload: data
    }
}

export const createUserAsync = (data) => {
    return async (dispatch) => {
        const result = await Api.post("/Users", data);
        dispatch(fetchUsersAsync());
    }
}

export const getUsers = (data) => {
    return {
        type: actionTypes.GET_USERS,
        payload: data
    }
}

export const fetchUsersAsync = () => {
    return async (dispatch) => {
        const res = await Api.get("/Users");
        dispatch(getUsers(res.data));
    }
}

export const getUser = (data) => {
    return {
        type: actionTypes.GET_USER,
        payload: data
    }
}

export const fetchUserAsync = (id) => {
    return async (dispatch) => {
        const res = await Api.get(`/Users/${id}`);
        dispatch(getUser(res.data));
    }
}

export const updateUser = (data) => {
    return {
        type: actionTypes.UPDATE_USER,
        payload: data
    }
}

export const updateUserAsync = (data) => {
    return async (dispatch) => {
        const res = await Api.put(`/Users/${data.id}`, data);
        dispatch(fetchUsersAsync(res.data));
    }
}

export const deleteUser = () => {
    return {
        type: actionTypes.DELETE_USER
    }
}
export const isloading = () => {
  return {
      type: actionTypes.IS_LOADING
  }
}

export const deleteUserAsync = (id) => {
    return async (dispatch) => {
        dispatch(isloading());
        const res = await Api.delete(`/Users/${id}`);
        dispatch(fetchUsersAsync());
    }
}

export const addUserSuccess = () => {
    return {
        type: actionTypes.ADD_USER_SUCCESS
    }
}

export const addUserAsync = (data) => {
    return async (dispatch) => {
        Api.post("/Users", data).then(() => {
            dispatch(addUserSuccess());
        }).then(() => {
            dispatch(fetchUsersAsync());
        }).catch((err) => {
            console.log("error", err);
        });
    }
}

export const getUserSuccess = (data) => {
    return {
        type: actionTypes.GET_USER_SUCCESS,
        payload: data
    }
}

export const getUsersAsync = () => {
    return dispatch => {
        Api.get("/Users").then((res) => {
            const data = res.data;
            dispatch(getUserSuccess(data));
        }).catch((err) => {
            console.log("error", err);
        });
    }
}
