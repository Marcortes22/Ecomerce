
import '../Style/StyleFooter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'; 

const Footer = () => {
  return (
    <footer className="footer">
        <div className='Container'>
      <div className="about-company">
        <h3>About the company</h3>
        <p>
          With easy navigation and secure checkout, shopping with us is a
          breeze. Plus, enjoy fast shipping and hassle-free returns, so you can
          shop with confidence.
        </p>
        <p>
          Join the Homely family today and let us help you make your house a
          home!
        </p>
      </div>
      <div className="about-homely">
        <ul>
          <li>About Homely</li>
          <li>Help</li>
          <li>Return Policy</li>
          <li>Site Map</li>
        </ul>
      </div>
      </div>
      <hr />
      <div className='Container2'>
      <div className="Contact">
      <p>
        <strong><FontAwesomeIcon icon={faMapMarkerAlt} className="icon-location" /></strong> Nicoya, Guanacaste, Costa Rica
      </p>
      <p>
        <strong><FontAwesomeIcon icon={faPhone} className="icon-phone" /></strong> +506 86868686
      </p>
    </div>
      <div className="follow-us">
  <ul>
    <li>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </li>
    <li>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
    </li>
    <li>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </li>
  </ul>
</div>

      </div>
    </footer>
  );
};

export default Footer;
