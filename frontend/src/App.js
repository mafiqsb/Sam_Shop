import './App.css';
import { faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <div className="header1">
            <div className="insideheader1">
              <p>
                <FontAwesomeIcon icon={faEnvelope} /> afiqsam71@gmail.com
              </p>
              <Link to="tel:+60136328253">
                <FontAwesomeIcon
                  icon={faPhoneVolume}
                  style={{ color: '#ffffff' }}
                />{' '}
                +6013-632-8253
              </Link>
            </div>
            <div className="insideheader12">
              <p>Get Discount Up To 50%!</p>
              <button className="button">More Info</button>
            </div>
            <div className="insideheader13">
              <p>English</p>
            </div>
          </div>
          <div className="header2">
            <Link to="/">
              <img src="/images/SSlogo.png" alt="logo" />
            </Link>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:slug" element={<ProductScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
