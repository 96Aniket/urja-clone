import React from 'react';
import ReactDOM from 'react-dom/client';
import img1 from '../Career/career-img.jpg'
import { Navbar } from '../Navbar'
import { Reg } from '../../component/Career/Registration'
import { Footer } from '../footer';



export function Form() {
    return (
        <>
            <Navbar />
            <Reg img={img1} />
            <Footer/>

        </>
    )
}