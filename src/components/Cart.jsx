import React from 'react';
import Header from "./Header";
import Button from 'react-bootstrap/Button';
import NumericInput from 'react-numeric-input';

class Cart extends React.Component {
    render() {
        return (
            <>
                <Header hideSearch={true}/>
                <div className="books-wrapper">
                    <div className="cart-collapsible">
                        <h5>My Cart</h5>
                        <div className="book-item">
                            <div className="book-cover">
                                <img 
                                    class="card-img-top"
                                    src="http://books.google.com/books/content?id=d5xgYw4Ts0gC&printsec=frontcover&img=1&zoom=5"/>
                            </div>
                            <div className="book-details">
                                <div className="book-title">Dont Make Me Think</div>
                                <div className="book-author-text">by Steven King</div>
                                <div className="book-price-text cart-book-price">Rs. 1500</div>
                                <NumericInput mobile></NumericInput>
                            </div>
                        </div>
                        <div className="book-item">
                            <div className="book-cover">
                                <img 
                                    class="card-img-top"
                                    src="http://books.google.com/books/content?id=d5xgYw4Ts0gC&printsec=frontcover&img=1&zoom=5"/>
                            </div>
                            <div className="book-details">
                                <div className="book-title">Dont Make Me Think</div>
                                <div className="book-author-text">by Steven King</div>
                                <div className="book-price-text cart-book-price">Rs. 1500</div>
                                <NumericInput mobile></NumericInput>
                            </div>
                        </div>
                        <div className="cart-collapsible-footer">
                            <Button className="place-order-button"> PLACE ORDER </Button>
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
}

export default Cart;