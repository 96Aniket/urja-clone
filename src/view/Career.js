import React from 'react';
import ReactDOM from 'react-dom/client';
import img1 from '../image/career-img.jpg'
import { Navbar } from '../view/Navbar'
import { Reg } from '../component/Career/Registration'


export function Form() {
    return (
        <>
            <Navbar />
            <Reg img={img1} />

        </>
    )
}