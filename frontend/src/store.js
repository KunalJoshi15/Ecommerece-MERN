import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListsReducer,productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
// Inside the store file we have the initial state therefore we can set It here from the localstorage/
const reducer = combineReducers({
    productList: productListsReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
})
const cartItemsFromStorage = localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[]
const initialState = {
    cart: {
        cartItems: cartItemsFromStorage
    }
}
const middleware = [thunk]
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))
// the provider basically comes from the react-redux.
export default store