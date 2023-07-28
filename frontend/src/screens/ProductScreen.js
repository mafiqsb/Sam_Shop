import axios from 'axios';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Store } from '../Store.js';

import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import { Helmet } from 'react-helmet-async';
import Rating from '../components/Rating.js';
import LoadingBox from '../components/LoadingBox.js';
import MessageBox from '../components/MessageBox.js';
import Container from 'react-bootstrap/esm/Container.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, product: action.payload };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function ProductScreen() {
  const params = useParams();
  const { slug } = params;

  const navigate = useNavigate();

  const [sizeClick, setSizeClick] = useState('');
  const [count, setCount] = useState(1);

  const [{ product, loading, error }, dispatch] = useReducer(reducer, {
    product: [],
    error: '',
    loading: true,
  });

  useEffect(() => {
    const catchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const { data } = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAIL', payload: error.message });
      }
    };

    catchData();
  }, [slug]);

  const { dispatch: ctxDispatch } = useContext(Store);
  // const { cart } = state;

  const addToCartHandler = async () => {
    // const existItem = cart.cartItems.find((x) => x._id === product._id);
    // const quantity = existItem ? existItem.quantity + 1 : 1;
    const quantity = count;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity, sizeClick },
    });
    navigate('/cart');
  };

  const sizeClickHandler = (size) => {
    setSizeClick(size);
  };

  const incCartHandler = () => {
    setCount(count + 1);
  };

  const decCartHandler = () => {
    setCount(count - 1);
  };

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <Container style={{ paddingTop: '50px' }}>
      <MessageBox variant={'danger'}>{error}</MessageBox>
    </Container>
  ) : (
    <div style={{ padding: '150px' }}>
      <Row>
        <Col md={6}>
          <img
            src={product.image}
            alt={product.name}
            className="img-thumbnail"
          />
        </Col>
        <Col md={6} style={{ padding: '30px' }}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Helmet>
                {' '}
                <title>{product.name}</title>
              </Helmet>
              <Row>
                <Col>
                  <h1>{product.name}</h1>
                </Col>

                <Col
                  md={4}
                  className="d-flex justify-content-center align-items-center"
                >
                  {product.countInStock > 0 ? (
                    <Badge bg="success">In Stock! </Badge>
                  ) : (
                    <Badge bg="danger">Unavailable</Badge>
                  )}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item
              className="d-flex"
              style={{ borderBottom: 0, paddingTop: '20px' }}
            >
              <Col md={6} className="d-flex">
                <h2 style={{ fontWeight: '700' }}>RM {product.price} </h2>
              </Col>

              <Col
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <Rating
                  rating={product.rating}
                  numReviews={product.numReviews}
                ></Rating>
              </Col>
            </ListGroup.Item>

            <ListGroup.Item style={{ borderBottom: 0 }}>
              <h3 style={{ paddingBottom: '10px' }}>Choose Your Size</h3>
              <div>
                <Button
                  style={{
                    background: sizeClick === 'XXS' ? 'black' : 'white',
                    color: sizeClick === 'XXS' ? 'white' : 'black',
                  }}
                  size="sm"
                  onClick={() => sizeClickHandler('XXS')}
                >
                  XXS
                </Button>{' '}
                <Button
                  style={{
                    background: sizeClick === 'XS' ? 'black' : 'white',
                    color: sizeClick === 'XS' ? 'white' : 'black',
                  }}
                  size="sm"
                  onClick={() => sizeClickHandler('XS')}
                >
                  XS
                </Button>{' '}
                <Button
                  style={{
                    background: sizeClick === 'S' ? 'black' : 'white',
                    color: sizeClick === 'S' ? 'white' : 'black',
                  }}
                  size="sm"
                  onClick={() => sizeClickHandler('S')}
                >
                  S
                </Button>{' '}
                <Button
                  style={{
                    background: sizeClick === 'M' ? 'black' : 'white',
                    color: sizeClick === 'M' ? 'white' : 'black',
                  }}
                  size="sm"
                  onClick={() => sizeClickHandler('M')}
                >
                  M
                </Button>{' '}
                <Button
                  style={{
                    background: sizeClick === 'L' ? 'black' : 'white',
                    color: sizeClick === 'L' ? 'white' : 'black',
                  }}
                  size="sm"
                  onClick={() => sizeClickHandler('L')}
                >
                  L
                </Button>{' '}
                <Button
                  style={{
                    background: sizeClick === 'XL' ? 'black' : 'white',
                    color: sizeClick === 'XL' ? 'white' : 'black',
                  }}
                  size="sm"
                  onClick={() => sizeClickHandler('XL')}
                >
                  XL
                </Button>{' '}
                <Button
                  style={{
                    background: sizeClick === 'XXL' ? 'black' : 'white',
                    color: sizeClick === 'XXL' ? 'white' : 'black',
                  }}
                  size="sm"
                  onClick={() => sizeClickHandler('XXL')}
                >
                  XXL
                </Button>{' '}
                <Button
                  style={{
                    background: sizeClick === 'XXXL' ? 'black' : 'white',
                    color: sizeClick === 'XXXL' ? 'white' : 'black',
                  }}
                  size="sm"
                  onClick={() => sizeClickHandler('XXXL')}
                >
                  XXXL
                </Button>{' '}
              </div>
            </ListGroup.Item>

            <ListGroup.Item style={{ borderBottom: 0 }}>
              <p>{product.description}</p>
            </ListGroup.Item>
            {product.countInStock > 0 && (
              <ListGroup.Item
                style={{
                  borderBottom: 0,
                  paddingTop: '20px',
                  paddingBottom: '20px',
                }}
              >
                <div className="d-flex flex-row" style={{ width: '80%' }}>
                  <div className="cart">
                    <Button
                      onClick={() => decCartHandler()}
                      variant="light"
                      disabled={count === 1}
                    >
                      <i className="fas fa-minus-circle"></i>
                    </Button>
                    <span>{count}</span>
                    <Button
                      onClick={() => incCartHandler()}
                      variant="light"
                      disabled={count === product.countInStock}
                    >
                      <i className="fas fa-plus-circle"></i>
                    </Button>
                  </div>
                  <Button
                    className="buttonBg"
                    style={{
                      background: sizeClick === '' && 'grey',
                      cursor: sizeClick === '' && 'no-drop',
                    }}
                    size="lg"
                    onClick={addToCartHandler}
                    disabled={sizeClick === ''}
                  >
                    Add to Cart
                  </Button>
                </div>{' '}
                <p style={{ paddingTop: '10px', color: 'red' }}>
                  In Stock : {product.countInStock}
                </p>
              </ListGroup.Item>
            )}

            <ListGroup.Item className="d-flex" style={{ paddingTop: '50px' }}>
              <FontAwesomeIcon
                icon={faTruck}
                style={{ paddingTop: '5px', marginRight: '10px' }}
              />
              <p>Estimated Delivery 5-7 Working Days</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}
