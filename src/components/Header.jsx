import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import FormControl from 'react-bootstrap/FormControl'
import { connect } from 'react-redux'
import { searchBookList } from '../redux'

function Header({ hideSearch, searchBookList, searchString }) {
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
                <Nav.Link className="HeaderStyle.cart-button" href="/cart"><span>Cart </span><span className="cart_logo"></span></Nav.Link>
            </Nav>
        </Navbar>
    );
}

const mapStateToProps = state => {
    return {
        searchString: state.initialState.search
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
