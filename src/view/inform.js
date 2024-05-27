import './inform.css'
import ttte from '../image/ttte.PNG'
import battery from '../image/battery.png'
import D1 from '../image/b1.png'
import D2 from '../image/b2.png'
import Insta from '../image/insta-removebg-preview.png'
export  function Inform (){
    return(
        <>
        <p>WELCOME TO <br/>URJA GLOBAL LIMITED</p><hr/>
        <h1>We at Urja are committed to providing world-class services to rapidly develop India focusing on rural electrification especially in hilly areas, forest regions, deserts, islands, far flung villages, unmanned locations and other areas which require reliable and uninterrupted power supply. With a strong design and manufacturing back ground UGL has developed themselves as a leading manufacturer of Solar Energy Systems to cater to almost the complete range of customer requirements</h1>
        <button>Know More-</button>
        <h2>#CONSERVE ENERGY                #CREATE ENERGY</h2>
        <img src={battery} className='pic' alt="..."/>
        <br/>
        <img src={ttte} className='pics' alt="..."/>
        <p>SERVICE NETWORK</p>
        <hr/>
        <h1>A nation-wide network of around 2000 service professionals with tremendous experience</h1>
    <div className='manecard'>
      <div className='card'><p>38</p><h1>Dealer Network</h1></div>
      <div className='card'><p>59</p><h1>Sales & Service Team</h1></div>
      <div className='card'><p>22</p><h1>Distributor Network</h1></div>
      <div className='card'><p>10 Mn</p><h1>Happy Customers</h1></div>
    </div>
    <div className='manecards'>
        <div><img src={D1} className='side' alt="..."/></div>
        <div><img src={D2} className='side' alt="..."/></div>
    </div>
    <div className='manecardss'>
        <div className='fot'><ul>About</ul>
        <li>Company Overview</li>
        <li>Our Leadership</li>
        <li>Contact Us</li>
        <ul>Products & Solutions</ul>
        <li>Batteries</li>
        <li>Electric Vehicles</li></div>


        <div className='fot'><ul>Investors</ul>
        <li>Regulation-46-And-62-Of-Sebi-[LODR]</li>
        <li>Announcements</li>
        <li>Contact Information</li>
        <li>Annual Report</li>
        <li>Corporate Governance</li>
        <li>Share Holding Pattern</li></div>


        <div className='fot'><ul>Presence</ul>
        <li>Our Network</li>
        <li>Dealer Zone</li>
        <ul>Careers</ul>
        <li>Apply For Jobs</li>
        <ul>Looking to buy a battery ?</ul>
        <li>Quick Buy</li></div>


        <div className='fot'><ul>Subscribe to our Newsletter</ul>
        <li><input type='text' placeholder='Enter your email address'></input></li>
        <ul>Follow Us</ul>
        <img src={Insta} className='ss' alt="..."/>
        </div>
    </div>
    <div className='last'>
        <h6>All right reserved @ Urja Global Limited | 2024</h6>
    </div>
        </>
    )
}
