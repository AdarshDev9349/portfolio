import React from 'react';


const CraftathonSupport = () => {
  return (
    <div className="support-container">
      <h2 style={{fontFamily:"bakbak one",fontWeight:'100',fontSize:'40px'}}>How Can You Contribute to <span className="highlight">Crafthathon?</span></h2>
      <p style={{fontFamily:'gugi'}}>To ensure the success of Crafthathon, we seek your support in the form of</p>
      <div className="support-sections">
        <div className="support-section">
          <h3>Financial Support</h3>
          <p>
            Financial contributions to cover the costs of organizing and executing the hackathon, including prizes, logistics, marketing, and more.
          </p>
        </div>
        <div className="support-section">
          <h3>Resources</h3>
          <p>
            Provision of essential resources such as food and beverages, branded items,merchandise, and promotional materials, technology and tools.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CraftathonSupport;