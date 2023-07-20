import React from 'react';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Rating from './Rating';

export default function Products(props) {
  const { product } = props;
  return (
    <Card className="product">
      <div className="containerImg">
        <Link to={`/product/${product.slug}`}>
          <img
            src={product.image}
            alt={product.name}
            className="card-img-top"
          />
        </Link>
      </div>

      <Card.Body>
        <Card.Title style={{ fontWeight: '200' }}>{product.name}</Card.Title>
        <Card.Text style={{ fontWeight: '500' }}> RM {product.price}</Card.Text>
        <Rating rating={product.rating} numReviews={product.numReviews} />
      </Card.Body>
    </Card>
  );
}
