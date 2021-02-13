import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import FormControl from 'react-bootstrap/FormControl'
import { connect } from 'react-redux'
import { searchBookList } from '../redux'
import { LinkContainer } from 'react-router-bootstrap'

function Header({ hideSearch, searchBookList, searchString, noOfBooksInCart }) {
    return (
        <Navbar expand="lg" bg="dark" variant="dark" sticky="top" >
            <Navbar.Brand href="/"><span className="store_logo"></span> Bookstore</Navbar.Brand>
            {   
                hideSearch ? null : <FormControl
                    type="text" placeholder="Search by author name or book name here"
                    className="col-lg-7 col-sm-3 col-xm-2"
                    value={searchString}
                    onChange={(event) => searchBookList(event.target.value.substr(0, 20))}
                />
            }
            <Nav className="ml-auto">
                <LinkContainer to="/signin">
                    <Nav.Item
                        className="cart-button"
                        style={{position:'relative'}}>
                            <span>Sign In </span>
                    </Nav.Item>
                </LinkContainer>
                <LinkContainer to="/signup">
                    <Nav.Item
                        className="cart-button"
                        style={{position:'relative'}}>
                            <span>Sign Up </span>
                    </Nav.Item>
                </LinkContainer>
                <LinkContainer to="/cart">
                    <Nav.Item
                        className="cart-button"
                        style={{position:'relative'}}>
                            <span>Cart </span>
                            <span className="cart_logo"></span>
                            <span className="cart_count">{noOfBooksInCart}</span>
                    </Nav.Item>
                </LinkContainer>
            </Nav>
        </Navbar>
    );
}

const mapStateToProps = state => {
    return {
        searchString: state.initialState.search,
        noOfBooksInCart: state.initialState.noOfBooksInCart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchBookList: (searchString) => dispatch(searchBookList(searchString))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
