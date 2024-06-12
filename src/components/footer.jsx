import React from 'react';
import image from './logo/craftathon.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo">
          <img src={image} alt="" />
        </div>
        <div className="quick-links">
          <h2>QuickLinks</h2>
          <ul>
            <li><a href="#">Overview</a></li>
            <li><a href="#">Stacks we offer</a></li>
            <li><a href="#">Our Sponsor</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div className="social-media">
          <h2>Social Media</h2>
          <ul>
            <li><a href="#">Rvenza</a></li>
            <li><a href="#">Mulearnucek</a></li>
            <li><a href="#">gdcuck</a></li>
            <li><a href="#">IEEE uck</a></li>
          </ul>
        </div>
        <div className="contact-us">
          <h2>Contact Us</h2>
          <ul>
            <li><a href="mailto:Emailaddress1">Emailaddress1</a></li>
            <li><a href="mailto:Emailaddr2">Emailaddr2</a></li>
            <li><a href="mailto:Emailaddthree">Emailaddthree</a></li>
            <li><a href="mailto:Emailaddres4.com">Emailaddres4.com</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <a href="#">Visit Rvenvenza here</a>
        </div>
        <div className="footer-bottom-right">
          <a href="#">Suggest something here</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
