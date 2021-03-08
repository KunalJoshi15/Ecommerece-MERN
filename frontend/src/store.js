import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListsReducer,productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { userDetailsReducer, userLoginReducer, userRegisterReducer,userUpdateProfileReducer,userListReducer } from './reducers/userReducers'
import { orderCreateReducer,orderDetailsReducer,orderPayReducer,orderListMyReducer } from './reducers/orderReducers'
// Inside the store file we have the initial state therefore we can set It here from the localstorage/
const reducer = combineReducers({
    productList: productListsReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer,
    userList:userListReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer
})
const cartItemsFromStorage = localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[]
const userInfoFromStorage = localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null
const shippingAddressFromStorage = localStorage.getItem('shippingAddress')?JSON.parse(localStorage.getItem('shippingAddress')):{}
const paymentMethodFromStorage = localStorage.getItem('paymentMethod')?JSON.parse(localStorage.getItem('paymentMethod')):''

const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
        paymentMethod: paymentMethodFromStorage
    },
    userLogin: {
        userInfo: userInfoFromStorage
    },
}
const middleware = [thunk]
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))
// the provider basically comes from the react-redux.
export default store