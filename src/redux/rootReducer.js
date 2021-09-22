import { combineReducers } from 'redux'
import booksLikeReducer from './booksLikeReduser'

const rootReducer = combineReducers({
    likeBooksState: booksLikeReducer,
})

export default rootReducer
