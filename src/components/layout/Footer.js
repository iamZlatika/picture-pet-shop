import React from 'react';
import './footer.css';
import '../../App.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faVk, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
library.add(faVk, faFacebook, faInstagram);



const Footer = () => {
  return (

    <div className="footer">

      <div className="container footer-content">
        <h1><Link to='/about'>Contact Us</Link></h1>

        <ul className='nets-icons'>

          <li><FontAwesomeIcon icon={faVk} className="font-item" /></li>
          <li><FontAwesomeIcon icon={faFacebook} className="font-item" /></li>
          <li><FontAwesomeIcon icon={faInstagram} className="font-item" /></li>
        </ul>
      </div>
    </div>

  )
}

export default Footer
