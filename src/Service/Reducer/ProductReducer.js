import { CREATE_PRODUCT, GET_PRODUCTS, GET_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, IS_LOADING, GET_PRODUCT_SUCCESS, ADD_PRODUCT_SUCCESS } from '../Constant/ActionType'

const initialState = {
    Products: [],
    Product: {},
    isLoading: false,
    isEdit: false,
    totalPrice: 0,
    totalStocks:0,
    addSuccess : false
}

const productReducer = (state = initialState, action) => {

    switch (action.type) {
        case CREATE_PRODUCT:
            return state
            break;

        case GET_PRODUCTS:
            return {
                ...state,
                Products: action.payload,
                isLoading: false,
                isEdit: false,
                addSuccess : false,
                Product: {}
            }
            break;

        case GET_PRODUCT:
            return {
                ...state,
                Product: action.payload,
                addSuccess : false,
                isEdit: true
            }
            break;
        case UPDATE_PRODUCT:
            return {
                ...state,
                addSuccess : false,
                isEdit: false
            }
            break;
        case IS_LOADING:
            return {
                ...state,
                addSuccess : false,
                isLoading: true
            }
            break;
        case DELETE_PRODUCT:
            return {
                ...state,
                addSuccess : false,
                isLoading: false
            }
            break;

        case ADD_PRODUCT_SUCCESS: 
            return {
                ...state,
                addSuccess : true
            }
            break;
        
        case GET_PRODUCT_SUCCESS:

            const totalStocks = action.payload.reduce((acc, curVal) => {
                return acc + parseInt(curVal.stock);
            }, 0);
            return {
                ...state,
                isLoading: false,
                isEdit: false,
                addSuccess : false,
                Products: action.payload,
                totalPrice: action.payload.reduce((acc, curVal) => {
                    return acc + parseInt(curVal.price);
                }, 0),
                totalStock:totalStocks
            }
            break;
        
        default:
            return state;
            break;
    }
}

export default productReducer