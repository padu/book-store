import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import FormControl from 'react-bootstrap/FormControl'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar expand="lg" bg="dark" variant="dark" sticky="top" >
                <Navbar.Brand href="#home"><span className="store_logo"></span> Bookstore</Navbar.Brand>
                <FormControl 
                    type="text"
                    placeholder="Search by author name or book name here"
                    className="col-lg-7 col-sm-3 col-xm-2"
                    onChange={this.props.setSearch}
                    />
                <Nav className="ml-auto">
                    <Nav.Link className="HeaderStyle.cart-button" href="#cart">Cart <span className="cart_logo"></span></Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}
export default Header;