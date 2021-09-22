import { combineReducers } from 'redux'
import booksLikeReducer from './booksLikeReduser'
import booksReducer from './booksReducer'

const rootReducer = combineReducers({
    likeBooksState: booksLikeReducer,
    loadedBooks: booksReducer,
})

export default rootReducer
