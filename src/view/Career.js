import React from 'react';
import ReactDOM from 'react-dom/client';
import img from '../image/career-img.jpg'

import { Reg } from "../Component/Career/Registration";


export function Form(){
    return(
        <>
<Home/>
        <Reg img={img}/>
        
        </>
    )
}