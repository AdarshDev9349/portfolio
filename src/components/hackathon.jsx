import mine from './images/mineshaft.svg'
import diamond from './logo/diamond.svg'
import gold from './logo/gold.svg'
import iron from './logo/iron.svg'
const hackathon = () => {
    return (
      <div className="hack">
        <div className="details">
            <h1>Lorem ipsum do
lorsit amedkidt, <span style={{color:'red'}}> consectetur</span> </h1>
             <p >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque </p>
             <ul className='prize'>
                <li><img src={diamond} alt="" />1st Prize : $10,000</li>
                <li><img src={gold} alt="" />2nd Prize : $5,000</li>
                <li><img src={iron} alt="" />3rd Prize : $1,000</li>
             </ul>
        </div>
        <img className='mine' src={mine} alt="" />

      </div>
    );
  };
  
  export default hackathon ;
  