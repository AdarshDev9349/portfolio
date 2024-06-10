import CraftathonPartnership from './components/whyHack'
import Navbar from './components/navbar';
import Perks from './components/perk';
const Items = [
    { href: '', text: 'Discover perks' },
    { href: '#', text: 'Contribution' },
    { href: '#', text: 'Lets Connect' }
  ];
const Sponsorus = () => {
    return (
        
<>
 <Navbar menuItems={Items}/>
 <CraftathonPartnership/>
 <Perks/>

</>

    );
  };
  
  export default Sponsorus ;