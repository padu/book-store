import { act } from 'react-dom/test-utils';
import {
    FETCH_BOOKLIST_REQUEST,
    FETCH_BOOKLIST_SUCCESS,
    FETCH_BOOKLIST_FAILURE,
    SEARCH_BOOKLIST,
    SORT_BOOKLIST,
    ADD_BOOK_TO_CART
  } from './bookListTypes'
  
const initialState = {
    loading: false,
    bookList: [],
    error: '',

    search: '',
    filteredBooks: [],

    sort: 'none',

    noOfBooks: 0,

    noOfBooksInCart: 0,
    cart: [],

    userInfo: {
        firstName: 'Poonam',
        lastName: 'Yadav',
        email: 'poonam.yadav2357@gmail.com',
        phoneNumber: '',
        address: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebumundefined',
        password: 'asdfasdf',
        type: 'work'
    }
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
                ...state,
                loading: false,
                bookList: bookList,
                error: '',

                filteredBooks: filteredBooksOnBooksFetch,
                
                noOfBooks: filteredBooksOnBooksFetch.length,
                noOfBooksInCart: 0,

                cart: []
            }
        case FETCH_BOOKLIST_FAILURE:
            return {
                ...state,
                loading: false,
                bookList: [],
                error: action.payload,
                
                filteredBooks: [],
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
                filteredBooks: sortedFilterBooks,
                noOfBooks: sortedFilterBooks.length
            }
        case ADD_BOOK_TO_CART:
            const cart = [...state.cart];
            cart.push({...action.payload, quantity: 1});

            return {
                ...state,
                bookList: markBookForCart(action.payload, state.bookList),
                filteredBooks: markBookForCart(action.payload, state.filteredBooks),
                cart: cart,
                noOfBooksInCart: cart.length
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

function  markBookForCart(book, bookList) {
    return bookList.map(bookItem => {
        if (book.id === bookItem.id) {
            return {...bookItem, isBookAddedToCart: true, quantity: 1 }
        }
        return bookItem;
    })
}

export default bookListReducer