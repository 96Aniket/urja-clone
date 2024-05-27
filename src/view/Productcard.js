import Card from '../Components/Products/Product';
import scooterbanner from '../image/scooterbanner.jpeg'

export default function Productcard(){
    return(
        <>
        <Navbar/>
        <Card img1={scooterbanner}/>
        </>
    );
}