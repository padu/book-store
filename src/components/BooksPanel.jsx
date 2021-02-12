import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
// import Pagination from './Pagination';
import Book from './Book';

class BooksPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookList : [],
            search: '',
            sort: 'none',
            filteredBooks: [],
            dropdownItems: {
                'none': {
                    label: 'Sort by relevence'
                },
                'asc': {
                    label: 'Price: Low to High',
                },
                'dsc': {
                    label: 'Price: High to Low'
                }
            }
        };
    }

    componentDidMount() {
        this.getBookList();
    }

    componentWillReceiveProps(nextProp) {
        this.setState({
            search: nextProp.searchChar,
            filteredBooks: this.getFilteredBooks(nextProp.searchChar)
        });
    }

    getAllBooks() {
        return fetch(
          'books.json', {
          headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }).then(function(res) {
          return res.json();
        });
    }

    getBookList() {
        this.getAllBooks()
        .then(res => {
          this.setState({
            bookList: res.results,
            filteredBooks: res.results,
            sort: 'none',
            search: ''
          });
        })
        .catch(err => {
          console.log(err);
        });
    }

    updateSearch(event) {
        const searchChar = event.target.value.substr(0, 20);
        this.setState({
            search: searchChar,
            filteredBooks: this.getFilteredBooks(searchChar)
        });
    }

    getFilteredBooks(searchChar) {
        return this.state.bookList.filter(book => {
            return this.searchCharInsideBook(book, searchChar);
        });
    }

    updateSort(sort) {
        this.setState({
            sort: sort,
            filteredBooks: this.getSortedBooks(sort)
        });
    }

    getSortedBooks(sort) {
        if (sort === 'asc') {
            return this.state.filteredBooks.sort((book1, book2) => book1.price - book2.price);
        } else if(sort === 'dsc') {
            return this.state.filteredBooks.sort((book1, book2) => book2.price - book1.price);
        } else {
            return [...this.state.filteredBooks];
        }
    }

    searchCharInsideBook(book, searchChar) {
        return (book.author.toLowerCase().indexOf(searchChar.toLowerCase()) !== -1) || 
        (book.title.toLowerCase().indexOf(searchChar.toLowerCase()) !== -1);
    }

    getSortButtonTitle() {
        return this.state.dropdownItems ? this.state.dropdownItems[this.state.sort].label : ''
    }

    render() {
        return (
            <div className="books-wrapper">
                <div className="books-panel-header">
                    <span className="books-panel-header-text">Books <span className="books-count">({this.state.bookList.length} items)</span> </span>
                    <DropdownButton variant="danger" title={this.getSortButtonTitle()} className="ml-auto">
                        <Dropdown onSelect={(eventKey) => this.updateSort(eventKey)}>
                            <Dropdown.Item eventKey="asc" >{this.state.dropdownItems['asc'].label}</Dropdown.Item>
                            <Dropdown.Item eventKey="dsc">{this.state.dropdownItems['dsc'].label}</Dropdown.Item>
                        </Dropdown>
                    </DropdownButton>
                </div>
                <CardDeck style={{display: 'flex', flexDirection: 'row'}} >
                    {this.state.filteredBooks.map(bookItem => <Book key={bookItem.id} item={bookItem}/>)}
                </CardDeck>
                {/* <div className="pagination-wrapper">
                    <Pagination/>
                </div> */}
            </div>
        );
    }
}

export default BooksPanel;