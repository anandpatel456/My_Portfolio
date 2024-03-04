import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
      <div className="social-icons">
        <a href="/#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="/#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="/#" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="https://www.linkedin.com/in/anand-patel-65619a249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
      </div>
    </nav>
  );
}

export default Navbar;
