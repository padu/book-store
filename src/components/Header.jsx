import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import FormControl from 'react-bootstrap/FormControl'

class Header extends React.Component {
    render() {
        return (
            <Navbar expand="lg" bg="dark" variant="dark" sticky="top" >
                <Navbar.Brand href="/"><span className="store_logo"></span> Bookstore</Navbar.Brand>
                {   
                    this.props.hideSearch ? null : <FormControl
                        type="text" placeholder="Search by author name or book name here"
                        className="col-lg-7 col-sm-3 col-xm-2"
                        onChange={this.props.setSearch}
                    />
                }
                <Nav className="ml-auto">
                    <Nav.Link className="HeaderStyle.cart-button" href="/cart"><span>Cart </span><span className="cart_logo"></span></Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}
export default Header;