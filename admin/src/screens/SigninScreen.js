import React from 'react';

import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { useLocation } from 'react-router-dom';

export default function SigninScreen() {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/admin';

  return (
    <Container className="small-container" style={{ paddingTop: '50px' }}>
      <h1 className="mb-5">Sign In as Admin</h1>
      <Form>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required />
        </Form.Group>
        <div className="mb-3">
          <Button className="buttonBg" type="submit">
            Sign In
          </Button>
        </div>
      </Form>
    </Container>
  );
}
