import { combineReducers } from 'redux'
import bookListReducer from './bookList/bookListReducer';

const rootReducer = combineReducers({
    initialState: bookListReducer
})
  
export default rootReducer