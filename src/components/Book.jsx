import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { addBookToCart } from '../redux'
import { connect } from 'react-redux'


function Book({item, addToCart}) {
  return (
    <Card style={{flex: 1}}>
      <div className="book-image-wrapper">
          <Card.Img variant="top" src={item.image.replace(/["']/g, "")} />
      </div>
      <Card.Body>
          <Card.Title>
            {item.title.replace(/["']/g, "")}
            <div className="book-author-text">by {item.author.replace(/["']/g, "")}</div>
          </Card.Title>
          <div className="book-price-text">Rs. {item.price}</div>
      </Card.Body>
      <Card.Footer>
        {
          (!item.isBookAddedToCart) ? <Button className="add-to-bag-button" onClick={(event)=>addToCart(item)}>ADD TO BAG</Button> : null
        }
        <Button className="wishlist-button">WISHLIST</Button>
      </Card.Footer>
    </Card>
  );
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
      addToCart: (book) => dispatch(addBookToCart(book))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book)
