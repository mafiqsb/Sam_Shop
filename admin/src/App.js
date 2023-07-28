import './App.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import SigninScreen from './screens/SigninScreen';
import AdminScreen from './screens/AdminScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar
            bg="dark"
            data-bs-theme="dark"
            className="thin-navbar justify-content-between"
          >
            <Container>
              <Navbar.Brand>Admin</Navbar.Brand>
              <Nav>
                <Form className="d-flex" style={{ paddingRight: '30px' }}>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    className="me-2"
                    size="sm"
                  ></Form.Control>
                  <Button variant="outline-light" type="submit">
                    Search
                  </Button>
                </Form>

                <NavDropdown
                  title={
                    <span>
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                  }
                >
                  <LinkContainer to="/Profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Routes>
            <Route path="/admin" element={<AdminScreen />} />
            <Route path="/admin/signin" element={<SigninScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
