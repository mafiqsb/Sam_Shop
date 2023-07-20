import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/esm/Button';
import { useContext } from 'react';
import { Store } from './Store';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';

function App() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" data-bs-theme="dark" className="thin-navbar">
            <Container>
              <Nav className="me-auto">
                <Navbar.Text style={{ margin: '0 10px' }}>
                  Email us at afiqsam71@gmail.com
                </Navbar.Text>

                <Navbar.Text> +6013-6328253</Navbar.Text>
              </Nav>
              <Nav>
                <Nav.Link>FAQ</Nav.Link>
                <Navbar.Text> | </Navbar.Text>
                <Nav.Link>Contact Us</Nav.Link>
                <Navbar.Text> | </Navbar.Text>
                <Nav.Link>Tracking Order</Nav.Link>
                <Button className="buttonBg">GRAB 50% OFF!</Button>
              </Nav>
            </Container>
          </Navbar>
          <br />

          <div className="header2">
            <Container className="header2Cont">
              <Row className="justify-content-between">
                <Col md={4}>
                  <div className="searchForm">
                    <Form className="d-flex">
                      <Form.Control
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        className="me-2"
                        size="sm"
                      />
                      <Button variant="outline-dark">Search</Button>
                    </Form>
                  </div>
                </Col>
                <Col md={4}>
                  <LinkContainer to="/">
                    <Navbar.Brand className="centered-image d-flex justify-content-center align-items-center">
                      <img src="/images/SSlogo.png" alt="logo"></img>
                    </Navbar.Brand>
                  </LinkContainer>
                </Col>
                <Col md={4}>
                  <div className="chooseForm d-flex justify-content-end">
                    <Nav>
                      <Link
                        to="/cart"
                        className="nav-link cartIcon"
                        style={{ color: 'black' }}
                      >
                        Login
                      </Link>
                    </Nav>

                    <Nav>
                      <Link
                        to="/cart"
                        className="nav-link"
                        style={{
                          color: 'black',
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faCartShopping}
                          style={{
                            marginRight: '10px',
                            color: 'black',
                            paddingTop: '5px',
                          }}
                        />
                        Cart
                        {cart.cartItems.length > 0 && (
                          <Badge pill bg="danger">
                            {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                          </Badge>
                        )}
                      </Link>
                    </Nav>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div>
            <div className="footer-block">
              <div className="link-container">
                <p>Copyright © 2021 Sam Shop. All Rights Reserve | </p>
                <Link to="/terms-conditions" className="linkmodify">
                  <p>Terms & Conditions</p>
                </Link>
                <p> | </p>
                <Link to="/privacy-policy" className="linkmodify">
                  <p>Privacy & Policy</p>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
