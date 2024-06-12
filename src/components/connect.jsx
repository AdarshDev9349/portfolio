import React from 'react';
import image from './images/charac2.svg'
import logo from './logo/instagram.svg'
const ContactSection = () => {
  return (
    <div className="connect-container">
      <div className="text-container">
        <h1>Let's Connect</h1>
        <p>
          Have questions or interested in sponsoring Crafthathon? Reach out to our dedicated team today. We're here to discuss partnership opportunities, answer inquiries, and explore how your brand can be part of this innovative event. We look forward to hearing from you!
        </p>
     
      </div>
      <div className="image-container">
        <img src={image} alt="Connect" className="connect-image" />
      </div>
    </div>
  );
}

export default ContactSection;
