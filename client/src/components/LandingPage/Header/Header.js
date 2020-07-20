import React, { useState, useEffect } from 'react'
import Navbar from './childComponents/Navbar'
import Heading from './childComponents/Heading'
import Search from './childComponents/Search'
import SlideDownBtn from './childComponents/SlideDownBtn'
import './Header.css';
// import bg_1 from '../../../imgs/bg_1.jpg';
// import bg_2 from '../../../imgs/bg_2.jpg';
// import bg_3 from '../../../imgs/bg_3.jpg';
// import bg_4 from '../../../imgs/bg_4.jpg';



export default function Header() {

    let index = Math.floor(Math.random() * 4);
    useEffect(() => {
        console.log(document.querySelector('#header-c-id'))
    }, [])



    return (
        <div id='header-c-id' className={`header-c ${'bg' + (1 + index)}`}>
            <Navbar />
            <Heading />
            <Search />
            <SlideDownBtn />
            <div style={{ height: '200vh' }}></div>
        </div>
    )
}
