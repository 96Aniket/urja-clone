import '../../view/Presence/Presence.css'
import 'bootstrap/dist/css/bootstrap.css'



export function Section(props){
    return(
        <>
        <img src={props.img} className='mainimg'></img>
        <h1 className='mainheading'> STORE LOCATION </h1>
                <p className='line'>___________</p>
                <p className='des'>URJA GLOBAL LIMITED IS IN ONE OF INDIA'S LEADING RENEWABLE ENERGY DEVELOPERS</p>
        </>
    )
}
export function OurNetwork(props){
    return(
<>

<div className='container text-center'>
  <div className='row'>
    <div className='col'>
      <h5 className='lname'>{props.h1}</h5>
      <p className='linfo'>{props.info1}</p>
    </div>
    <div className='col'>
    <h5 className='lname'>{props.h2}</h5>
    <p className='linfo'>{props.info2}</p>
    </div>
    <div className='col'>
    <h5 className='lname'>{props.h3}</h5>
    <p className='linfo'> {props.info3}</p>
    </div>
  </div>
</div>

</>

    )
}