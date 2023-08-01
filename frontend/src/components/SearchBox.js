import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function SearchBox() {
  const navigate = useNavigate();

  const [query, setQuery] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(query ? `search/?query=${query}` : '/search');
    e.target.reset();
  };
  return (
    <Form className="d-flex" onSubmit={submitHandler}>
      <Form.Control
        type="text"
        name="q"
        id="q"
        placeholder="Search Products..."
        aria-label="Search"
        onChange={(e) => setQuery(e.target.value)}
        className="me-2"
        aria-describedby="button-search"
        size="sm"
      />
      <Button variant="outline-dark" type="submit" id="button-search">
        Search
      </Button>
    </Form>
  );
}
