import mine from './images/mineshaft.svg'
import diamond from './logo/diamond.svg'
import clock from './logo/clock.png'
import beacon from './logo/beacon.png'

const hackathon = () => {
    return (
      <div className="hack">
        <div className="details">
            <h1>Get your <span style={{color:'red'}}>crafting table</span> ready!  </h1>
             <p>Get ready for a 36-hour coding challenge that&#39;s more than just lines of code. It&#39;s a pickaxe-swinging
             adventure to build your skills and creativity. ⛏️ </p>
             <p>Think epic mini-games, sweet loot, and the ultimate bragging rights for the builder. Team up with
              your squad and craft your way to the top of the leaderboard. There&#39;s a prize pool that shines
              brighter than a diamond, so don&#39;t wait! Register before slots fill up. Let&#39;s get crafting! ️</p>
             <ul className='prize'>
                <li><img src={diamond} alt="" />Price pool: 50,000</li>
                <li><img src={clock} style={{height:'33px'}}alt="" />Date: 28, 29 and 30 th June, 2024</li>
                <li><img src={beacon} alt="" />Venue: Geology Museum, University College, Kariavattom</li>
             </ul>
        </div>
        <img className='mine' src={mine} alt="" />

      </div>
    );
  };
  
  export default hackathon ;
  