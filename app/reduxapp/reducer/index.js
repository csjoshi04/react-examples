import {combineReducers} from 'redux';
import BooksReducer from "./books.reducer"
import ActiveBookReducer from "./activebook.reducer"

const rootReducer = combineReducers({
    books : BooksReducer,
    activeBook: ActiveBookReducer
})

export default rootReducer;