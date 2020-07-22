import React, { useState, useEffect } from 'react'
import Navbar from './childComponents/Navbar'
import Heading from './childComponents/Heading'
import Search from './childComponents/Search'
import SlideDownBtn from './childComponents/SlideDownBtn'
import './Header.css';

export default function Header() {

    let index = Math.floor(Math.random() * 4);


    return (
        <div id='header-c-id' className={`header-c ${'bg' + (1 + index)}`}>
            <Navbar />
            <Heading />
            <Search />
            <SlideDownBtn />
            <div style={{ height: '200vh', width: '40vw' }}></div>
        </div>
    )
}
