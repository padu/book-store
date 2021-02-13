import React from 'react';
import Header from "./Header";
import Button from 'react-bootstrap/Button';
import NumericInput from 'react-numeric-input';

import { connect } from 'react-redux';

function Cart({cart}) {
    return (
        <>
            <Header hideSearch={true}/>
            <div className="books-wrapper">
                <div className="cart-collapsible">
                    <h5>My Cart</h5>
                    {
                        cart.map(book => { 
                            return <div className="book-item">
                                <div className="book-cover">
                                    <img 
                                        class="card-img-top"
                                        src={book.image.replace(/["']/g, "")}
                                    />
                                </div>
                                <div className="book-details">
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-author-text">by {book.author}</div>
                                    <div className="book-price-text cart-book-price">Rs. {book.price}</div>
                                    <NumericInput value={book.quantity} mobile></NumericInput>
                                </div>
                            </div>
                        })
                    }
                    <div className="cart-collapsible-footer">
                        <Button className="basic-button place-order-button"> PLACE ORDER </Button>
                    </div>
                </div>
                <div className="cart-collapsible">
                    <h5>Customer Details</h5>
                    
                </div>
                <div className="cart-collapsible">
                    <h5>Order Summery</h5>
                </div>
            </div>
        </>
    );
}


const mapStateToProps = state => {
    return {
        cart : state.initialState.cart
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
    }
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart)