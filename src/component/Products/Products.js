import scooterbanner from './scooterbanner';
import '../Products/Product.css'
import 'bootstrap/dist/css/bootstrap.css'
import scooty from './scooty'
import bike from './bike.png'
export default function Card() {
  return (
    <>
      <div className='card'>

        <img className='img' src={scooterbanner} />
      </div>

      <div className='H1'>
      <div className='Head'>
         <h1><b><u>E-Life</u></b></h1>

</div>

<div >
<p  className='row'>
   Urja Introducing the best electric scooter E-Life with
      an unrivalled range up to 100Kms<br /> per charge. It features a sleek & modern design,
      with lightweight and durable frame and is <br />
      equipped with advance safety features,
      robust waterproof & dust resistant battery, while <br />
      the powerful motor provides a smooth & enjoyable ride.</p>
      <br/> <br/>

 <button type='Know More' className='Btn'>Know More</button>
<button type='Know More' className='Btn'>Book Now</button>   
  </div>


        < img className='scooter' src={scooty} />
      </div>
      <div>
      < img className='scooty' src={bike} />
    </div>
    <div className='head'>
         <h1><b><u>E-zess</u></b></h1>

</div>
<div >
<p  className='col'>
   Urja Introducing the best electric scooter E-Life with
      an unrivalled range up to 100Kms<br /> per charge. It features a sleek & modern design,
      with lightweight and durable frame and is <br />
      equipped with advance safety features,
      robust waterproof & dust resistant battery, while <br />
      the powerful motor provides a smooth & enjoyable ride. <br/>The E-ZESS is here to change the way India moves.</p>
      <button type='text' className='imge'>Know More</button>
<button type='text' className='imge'>Book Now</button>
  </div>

    </>

  )
}
















