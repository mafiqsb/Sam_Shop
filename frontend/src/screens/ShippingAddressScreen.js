import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';

import { Store } from '../Store';

import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return { ...state, states: action.payload };

    default:
      return state;
  }
};

export default function ShippingAddressScreen() {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [stateChoose, setState] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const [{ states }, dispatch] = useReducer(reducer, {
    states: [],
  });

  const navigate = useNavigate();

  const { state, dispatch: ctxDispatch } = useContext(Store);

  const { userInfo } = state;

  useEffect(() => {
    if (!userInfo) {
      navigate('/signin?redirect=/shipping');
    }
    const fetchData = async () => {
      try {
        const { data } = await axios.get('/api/state');
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };

    fetchData();
  }, [navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    ctxDispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: {
        fullName,
        address,
        stateChoose,
        city,
        postalCode,
      },
    });

    localStorage.setItem(
      'shippingAddress',
      JSON.stringify({
        fullName,
        address,
        stateChoose,
        city,
        postalCode,
      })
    );
    navigate('/placeorder');
  };

  const stateClickHandler = (value) => {
    setState(value);
  };
  return (
    <div>
      <Helmet>
        <title>Shipping Address</title>
      </Helmet>
      <div style={{ paddingTop: '150px' }}>
        <CheckoutSteps step1 step2></CheckoutSteps>
      </div>

      <div className="container small-container" style={{ paddingTop: '30px' }}>
        <h1 className="my-3">Shipping Address</h1>
        <Form onSubmit={(e) => submitHandler(e)}>
          <Form.Group className="mb-3" controlId="Full Name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="State">
            <Form.Label>State</Form.Label>
            <Dropdown>
              {stateChoose ? (
                <Dropdown.Toggle
                  id="dropdown-autoclose-inside"
                  variant="outline-dark"
                >
                  {stateChoose}
                </Dropdown.Toggle>
              ) : (
                <Dropdown.Toggle
                  id="dropdown-autoclose-inside"
                  variant="outline-dark"
                >
                  Select your state
                </Dropdown.Toggle>
              )}

              <Dropdown.Menu>
                {states.map((state) => (
                  <Dropdown.Header key={state.state}>
                    <Dropdown.Item
                      value={state.state}
                      onClick={(e) => stateClickHandler(state.state)}
                      required
                    >
                      {state.state}
                    </Dropdown.Item>
                  </Dropdown.Header>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
          <Form.Group className="mb-3" controlId="city">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              value={postalCode}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="postalCode">
            <Form.Label>City</Form.Label>
            <Form.Control
              value={city}
              onChange={(e) => setPostalCode(e.target.value)}
              required
            />
          </Form.Group>

          <div className="mb-3">
            <Button variant="dark" type="submit" size="md">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
