import { Api } from '../../Component/Api/index'
import { CREATE_PRODUCT, GET_PRODUCTS, GET_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, IS_LOADING, GET_PRODUCT_SUCCESS, ADD_PRODUCT_SUCCESS } from '../Constant/ActionType'

export const CreateProduct = (data) => {
    return {
        type: CREATE_PRODUCT,
        payload: data
    }
}
export const CreateProductAsync = (data) => {

    return async (dispatch) => {

        const result = await Api.post("/Products", data)

        dispatch(getProductsAsync())
    }
}
export const getProducts = (data) => {
    return {
        type: GET_PRODUCTS,
        payload: data
    }
}
export const getProductsAsync = () => {

    return async dispatch => {
        const res = await Api.get("/Products")
        dispatch(getProducts(res.data))
    }
}
export const getProduct = (data) => {
    return {
        type: GET_PRODUCT,
        payload: data
    }
}
export const getProductAsync = (id) => {

    return async dispatch => {
        const res = await Api.get(`/Products/${id}`)
        dispatch(getProduct(res.data))
    }
}
export const isloading = () => {
    return {
        type: IS_LOADING
    }
}
export const UpDateProduct = (data) => {
    return {
        type: UPDATE_PRODUCT,
        payload: data
    }
}
export const UpDateProductAsync = (data) => {

    return async dispatch => {
        const res = await Api.put(`/Products/${data.id}`, data)
        dispatch(getProductsAsync(res.data))
    }
}
export const DeleteProduct = () => {
    return {
        type: DELETE_PRODUCT
    }
}
export const DeleteProductAsync = (id) => {

    return async dispatch => {
        dispatch(isloading())
        const res = await Api.delete(`/Products/${id}`)
        dispatch(getProductsAsync())
    }
}
export const addProductSuccess = () => {
    return {
        type: ADD_PRODUCT_SUCCESS
    }
}
export const addProductAsync = (data) => {
    return dispatch => {
        Api.post("/Products", data).then(() => {
            dispatch(addProductSuccess())
        }).then(() => {
            dispatch(GetProductsAsync())
        }).catch((err) => {
            console.log("error", err);
        })
    }
}
export const GetProductSuccess = (data) => {
    return {
        type : GET_PRODUCT_SUCCESS,
        payload : data
    }
}
export const GetProductsAsync = () => {
    return dispatch => {
        Api.get("/Products").then((res) => {
            const data = res.data
            dispatch(GetProductSuccess(data))
        }).catch((err) => {
            console.log("error", err);
        })
    }
}
