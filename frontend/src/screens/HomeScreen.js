import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

function HomeScreen() {
  return (
    <div>
      <div className="titles">
        <h1>Collections</h1>
      </div>
      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>

            <div className="product-info">
              <p>{product.name}</p>
              <p className="price">RM {product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
