import image from './images/horse.svg'
import box from './logo/box.png'



const perks = () => {
    return (
     <div class="section-perks">
        
        <div class="perk-list">
            <h1>Discover Your <span>Sponsorship</span> Perks</h1>
            <div class="perk">
                <h3 style={{display:'flex',alignItems:"center",gap:'10px'}}><img  style={{width:'33px'}} src={box} alt="" />Reach a Targeted Audience</h3>
                <p style={{marginLeft:'60px'}}>Connect with tech enthusiasts and future leaders</p>
            </div>
            <div class="perk">
            <h3 style={{display:'flex',alignItems:"center",gap:'10px'}}><img  style={{width:'33px'}} src={box} alt="" />Marketing and Brand Visibility</h3>
                <p style={{marginLeft:'60px'}}>As a sponsor of Craftathon, you will receive extensive marketing and brand visibility like Social Media Mentions, Logo and Name Placement, Announcements</p>
            </div>
            <div class="perk">
            <h3 style={{display:'flex',alignItems:"center",gap:'10px'}}><img  style={{width:'33px'}} src={box} alt="" />Product Integration</h3>
                <p style={{marginLeft:'60px'}}>We offer the opportunity to integrate and showcase your products during the hackathon</p>
            </div>
        </div>
      
        <img src={image} alt="Craftathon Image" class="perk-img"/>
    
    </div>
       
     
    );
  };
  
  export default perks;
  
