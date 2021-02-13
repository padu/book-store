import React, { useEffect } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Book from './Book';
import { connect } from 'react-redux'
import { fetchBookList, sortBookList } from '../redux'

function BooksPanel({filteredBooks, noOfBooks, getAllBooks, sort, sortBookList}) {
    const dropdownItems = {
        'none': {
            label: 'Sort by'
        },
        'asc': {
            label: 'Price: Low to High',
        },
        'dsc': {
            label: 'Price: High to Low'
        }
    }

    useEffect(() => {
        getAllBooks();
      }, [])

    const getSortButtonTitle = (sort) => {
        return sort ? dropdownItems[sort].label : dropdownItems['none'].label
    }

    return (
        <div className="books-wrapper">
            <div className="books-panel-header">
                <span className="books-panel-header-text">Books <span className="books-count">({noOfBooks} items)</span> </span>
                <DropdownButton variant="danger" title={getSortButtonTitle(sort)} className="ml-auto">
                    <Dropdown onSelect={(eventKey) => sortBookList(eventKey)}>
                        <Dropdown.Item eventKey="asc" >{dropdownItems['asc'].label}</Dropdown.Item>
                        <Dropdown.Item eventKey="dsc">{dropdownItems['dsc'].label}</Dropdown.Item>
                    </Dropdown>
                </DropdownButton>
            </div>
            <CardDeck style={{display: 'flex', flexDirection: 'row'}} >
                {filteredBooks.map(bookItem => <Book key={bookItem.id} item={bookItem}/>)}
            </CardDeck>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        ...state.initialState
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        getAllBooks: () => dispatch(fetchBookList()),
        sortBookList: (sortType) => dispatch(sortBookList(sortType))
    }
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BooksPanel)