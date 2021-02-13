import {
    FETCH_BOOKLIST_REQUEST,
    FETCH_BOOKLIST_SUCCESS,
    FETCH_BOOKLIST_FAILURE,
    SEARCH_BOOKLIST,
    SORT_BOOKLIST
  } from './bookListTypes'
  
const initialState = {
    loading: false,
    bookList: [],
    error: '',

    search: '',
    filteredBooks: [],

    sort: 'none',

    noOfBooks: 0
}
  
const bookListReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKLIST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_BOOKLIST_SUCCESS:
            const bookList = action.payload;
            const filteredBooksOnBooksFetch = getFilteredBooks(state.search, bookList); 
            return {
                loading: false,
                bookList: bookList,
                error: '',

                search: '',
                filteredBooks: filteredBooksOnBooksFetch,
                
                noOfBooks: filteredBooksOnBooksFetch.length,
            }
        case FETCH_BOOKLIST_FAILURE:
            return {
                loading: false,
                bookList: [],
                error: action.payload,

                search: '',
                filteredBooks: [],

                noOfBooks: 0
            }
        case SEARCH_BOOKLIST:
            const filteredBooks = getFilteredBooks(action.payload, state.bookList)
            return {
                ...state,
                search: action.payload,
                filteredBooks: filteredBooks,
                noOfBooks: filteredBooks.length
            }
        case SORT_BOOKLIST: 
            const sortedFilterBooks = getSortedBooks(action.payload, state.filteredBooks);
            return {
                ...state,
                sort: action.payload,
                filteredBooks: sortedFilterBooks
            }

        default: return state
    }
}

function getFilteredBooks(searchChar, bookList) {
    return bookList.filter(book => {
        return searchCharInsideBook(book, searchChar);
    });
}

function searchCharInsideBook(book, searchChar) {
    return (book.author.toLowerCase().indexOf(searchChar.toLowerCase()) !== -1) || 
    (book.title.toLowerCase().indexOf(searchChar.toLowerCase()) !== -1);
}

function getSortedBooks(sort, filteredBooks) {
    if (sort === 'asc') {
        return filteredBooks.sort((book1, book2) => book1.price - book2.price);
    } else if(sort === 'dsc') {
        return filteredBooks.sort((book1, book2) => book2.price - book1.price);
    } else {
        return [...filteredBooks];
    }
}

export default bookListReducer