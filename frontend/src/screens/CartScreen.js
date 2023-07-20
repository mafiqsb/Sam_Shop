import React, { useContext, useState } from 'react';

import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import MessageBox from '../components/MessageBox';
import { Store } from '../Store';

import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { LinkContainer } from 'react-router-bootstrap';
import axios from 'axios';

export default function CartScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const [rmvDiscount, setRmvDiscount] = useState(true);

  const toggleDiscountHandler = () => {
    setRmvDiscount(!rmvDiscount);
  };

  // const updateCartHandler = async (item, quantity) => {
  //   const { data } = await axios.get(`/api/products/${item._id}`);
  //   if (data.countInStock < quantity) {
  //     window.alert('Sorry. Product is out of stock');
  //     return;
  //   }
  //   ctxDispatch({
  //     type: 'CART_ADD_ITEM',
  //     payload: { ...item, quantity },
  //   });
  // };

  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
    }

    ctxDispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } });
  };

  const removeItemHandler = (item) => {
    ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };

  const checkoutHandler = () => {
    navigate(`/signin?redirect=/shipping`);
  };

  return (
    <div className="cartScreenCont">
      <Helmet>
        <title>Shopping Cart</title>
      </Helmet>
      <h1 style={{ fontWeight: '900', marginBottom: '50px' }}>
        MY SHOPPING CART
      </h1>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <MessageBox>
              Cart is empty. <Link to="/">Go Shopping</Link>
            </MessageBox>
          ) : (
            <ListGroup>
              {cartItems.map((item) => (
                <ListGroup.Item key={item._id}>
                  <Row className="align-items-center">
                    <Col md={4} className="d-flex">
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: '70px',
                          height: '70px',
                          objectFit: 'cover',
                          marginRight: '20px',
                        }}
                      ></img>{' '}
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Link
                          to={`/product/${item.slug}`}
                          style={{
                            textDecoration: 'none',
                            color: 'black',
                            fontWeight: '700',
                          }}
                        >
                          <span>{item.name}</span>
                        </Link>
                        <span style={{ fontSize: '12px' }}>
                          size : {item.sizeClick}
                        </span>
                      </div>
                    </Col>
                    <Col md={2}>
                      <Button
                        onClick={() =>
                          updateCartHandler(item, item.quantity - 1)
                        }
                        variant="light"
                        disabled={item.quantity === 1}
                      >
                        <i className="fas fa-minus-circle"></i>
                      </Button>{' '}
                      <span>{item.quantity}</span>{' '}
                      <Button
                        onClick={() =>
                          updateCartHandler(item, item.quantity + 1)
                        }
                        variant="light"
                        disabled={item.quantity === item.countInStock}
                      >
                        <i className="fas fa-plus-circle"></i>
                      </Button>
                    </Col>
                    <Col md={2}>RM {item.price}</Col>
                    <Col md={2}>RM {item.quantity * item.price}</Col>
                    <Col md={2}>
                      <Button
                        variant="light"
                        onClick={() => removeItemHandler(item)}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
          <div style={{ paddingTop: '30px' }}>
            <LinkContainer to="/">
              <Button variant="outline-secondary" style={{ border: 'none' }}>
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  style={{
                    marginRight: '10px',
                    color: 'grey',
                  }}
                ></FontAwesomeIcon>
                CONTINUE SHOPPING
              </Button>
            </LinkContainer>
          </div>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Header
              style={{
                color: 'black',
                fontWeight: '700',
                textAlign: 'center',
              }}
            >
              Order Summary
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item style={{ paddingBottom: '30px' }}>
                  <Card.Text
                    style={{
                      fontWeight: '400',
                      textDecoration: 'underline',
                      cursor: 'pointer',
                    }}
                    onClick={toggleDiscountHandler}
                  >
                    Apply discount code
                  </Card.Text>
                  {rmvDiscount && (
                    <Form style={{ paddingTop: '30px' }}>
                      <Form.Control
                        type="text"
                        placeholder="Apply your code"
                        aria-label="text"
                        className="me-2"
                      ></Form.Control>
                      <Button
                        type="submit"
                        className="buttonBg"
                        style={{ marginTop: '10px' }}
                      >
                        APPLY DISCOUNT
                      </Button>
                    </Form>
                  )}
                </ListGroup.Item>
                <ListGroup.Item
                  className="d-grid d-flex"
                  style={{ marginTop: '20px' }}
                >
                  <Card.Text
                    style={{
                      fontWeight: '700',
                      textDecoration: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}) :
                  </Card.Text>
                  <Card.Text
                    style={{
                      marginLeft: '150px',
                      fontWeight: '700',
                      textDecoration: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    MYR{' '}
                    {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                  </Card.Text>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid" style={{ paddingTop: '30px' }}>
                    <Button className="buttonCart" onClick={checkoutHandler}>
                      <FontAwesomeIcon
                        icon={faLock}
                        style={{
                          marginRight: '10px',
                          color: 'white',
                        }}
                      ></FontAwesomeIcon>
                      PROCEED TO CHECKOUT
                    </Button>
                    <p style={{ paddingTop: '20px' }}>
                      Check out with Atomy and enjoy 3 easy payments with 0%
                      interest. New user MYR 15 off.
                    </p>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
