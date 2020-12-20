import { createStore, applyMiddleware } from 'redux'
import Thunk from 'redux-thunk'
import {ProductsReducer} from './Reducer'

export const Store = createStore(
    ProductsReducer,
    applyMiddleware(Thunk)
)