import React from 'react';
import './css/footer.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <div className='social-container'>
            <h2>&copy; Rawdah Institute</h2>
            <a href="https://www.instagram.com/rawdahinstitute/?hl=en" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.facebook.com/people/Rawdah-Institute/100057197180285/" className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
        </div>    
    )
}