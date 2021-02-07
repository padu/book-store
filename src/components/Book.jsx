import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Book(props) {
  return (
    <Card style={{flex: 1}}>
      <div className="book-image-wrapper">
          <Card.Img variant="top" src={props.item.image.replace(/["']/g, "")} />
      </div>
      <Card.Body>
          <Card.Title>
            {props.item.title.replace(/["']/g, "")}
            <div className="book-author-text">by {props.item.author.replace(/["']/g, "")}</div>
          </Card.Title>
          <div className="book-price-text">Rs. {props.item.price}</div>
      </Card.Body>
      <Card.Footer>
        <Button className="add-to-bag-button">ADD TO BAG</Button> <Button className="wishlist-button">WISHLIST</Button>
      </Card.Footer>
    </Card>
  );
}

export default Book;
