import './App.css';
import { faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function App() {
  return (
    <div>
      <header>
        <div className="header1">
          <div className="insideheader1">
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> afiqsam71@gmail.com
            </p>
            <a href="tel:+60136328253">
              <FontAwesomeIcon
                icon={faPhoneVolume}
                style={{ color: '#ffffff' }}
              />{' '}
              +6013-632-8253
            </a>
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
          <a href="/">Sam Shop</a>
        </div>
      </header>
      <main>list products</main>
    </div>
  );
}

export default App;
