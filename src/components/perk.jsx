import image from './images/horse.svg'




const perks = () => {
    return (
     <div class="section-perks">
        
        <div class="perk-list">
            <h1>Discover Your <span>Sponsorship</span> Perks</h1>
            <div class="perk">
                <h3>Reach a Targeted Audience</h3>
                <p>Connect with tech enthusiasts and future leaders</p>
            </div>
            <div class="perk">
                <h3>Marketing and Brand Visibility</h3>
                <p>As a sponsor of Craftathon, you will receive extensive marketing and brand visibility like Social Media Mentions, Logo and Name Placement, Announcements</p>
            </div>
            <div class="perk">
                <h3>Product Integration</h3>
                <p>We offer the opportunity to integrate and showcase your products during the hackathon</p>
            </div>
        </div>
      
        <img src={image} alt="Craftathon Image" class="perk-img"/>
    
    </div>
       
     
    );
  };
  
  export default perks;
  
