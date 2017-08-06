import { combineReducers } from 'redux';
import books from './reducerBooks';
import activeBook from './activeBooks';

const rootReducer = combineReducers({
  books: books,
  activeBook: activeBook
});

export default rootReducer;
