import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import { toast } from 'react-toastify';
import { getError } from '../utils';

export default function NavbarCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);

  return (
    <Container>
      <Nav
        className="d-flex justify-content-center"
        style={{ margin: 'auto', width: '80%', zIndex: '2' }}
      >
        <LinkContainer
          to={{ pathname: '/search', search: `?category=newarivals` }}
        >
          <Nav.Link>New Arrivals</Nav.Link>
        </LinkContainer>
        <LinkContainer to={{ pathname: '/search', search: `?category=men` }}>
          <Nav.Link>Men</Nav.Link>
        </LinkContainer>
        <LinkContainer to={{ pathname: '/search', search: `?category=women}` }}>
          <Nav.Link>Women</Nav.Link>
        </LinkContainer>
        <LinkContainer to={{ pathname: '/search', search: `?category=kids` }}>
          <Nav.Link>Kids</Nav.Link>
        </LinkContainer>

        {categories.map((category) => (
          <Nav.Item key={category}>
            <LinkContainer
              to={{ pathname: '/search', search: `?category=${category}` }}
            >
              <Nav.Link>{category}</Nav.Link>
            </LinkContainer>
          </Nav.Item>
        ))}
      </Nav>
    </Container>
  );
}
