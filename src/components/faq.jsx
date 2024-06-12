import React, { useState } from 'react';

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 style={{fontFamily:'bakbak one',fontWeight:'100'}}>Frequently Asked Questions</h1>
      {[0, 1, 2, 3].map((index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggle(index)}>
            <span>Question text goes here</span>
            <span>{open === index ? '-' : '+'}</span>
          </div>
          {open === index && (
            <div className="faq-answer">
              <p>Answer text goes here</p>
            </div>
          )}
        </div>
      ))}
      <div className="faq-footer">
        <h2>Still have a question?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button>Contact Us</button>
      </div>
    </div>
  );
};

export default FAQ;
