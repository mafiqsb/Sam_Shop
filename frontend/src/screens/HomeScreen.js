import React, { useEffect, useReducer } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import logger from 'use-reducer-logger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Products from '../components/Products';
import LoadingBox from '../components/LoadingBox';
import Container from 'react-bootstrap/esm/Container';
import MessageBox from '../components/MessageBox';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, products: action.payload };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, products, error }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get('/api/products');
        // setProducts(data);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAIL', payload: error.message });
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="titles">
        <h1>Collections</h1>
      </div>
      <div className="products">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <Container style={{ paddingTop: '50px' }}>
            <MessageBox variant={'danger'}>{error}</MessageBox>
          </Container>
        ) : (
          <Row>
            {products.map((product) => (
              <Col sm={6} md={4} lg={3} className="mb-3" key={product.slug}>
                <Products product={product} />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}

export default HomeScreen;
