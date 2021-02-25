import axios from 'axios'
import {
  FETCH_BOOKLIST_REQUEST,
  FETCH_BOOKLIST_SUCCESS,
  FETCH_BOOKLIST_FAILURE,
  SEARCH_BOOKLIST,
  SORT_BOOKLIST,
  ADD_BOOK_TO_CART
} from './bookListTypes'

export const fetchBookList = () => {
  return (dispatch) => {
    dispatch(fetchBookListRequest())
    const promise = axios.get('books.json');
    promise.then(response => {
        // response.data is the booklist
        const bookList = response.data.results;
        dispatch(fetchBookListSuccess(bookList))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchBookListFailure(error.message))
      })
  }
}

export const fetchBookListRequest = () => {
  return {
    type: FETCH_BOOKLIST_REQUEST
  }
}

export const fetchBookListSuccess = bookList => {
  return {
    type: FETCH_BOOKLIST_SUCCESS,
    payload: bookList
  }
}

export const fetchBookListFailure = error => {
  return {
    type: FETCH_BOOKLIST_FAILURE,
    payload: error
  }
}

export const searchBookList = searchString => {
  return {
    type: SEARCH_BOOKLIST,
    payload: searchString
  }
}

export const sortBookList = sortType => {
  return {
    type: SORT_BOOKLIST,
    payload: sortType
  }
}

export const addBookToCart = book => {
  return {
    type: ADD_BOOK_TO_CART,
    payload: book
  }
}
