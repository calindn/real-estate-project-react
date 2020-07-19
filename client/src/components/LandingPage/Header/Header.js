import React from 'react'
import Navbar from './childComponents/Navbar'
import Heading from './childComponents/Heading'
import Search from './childComponents/Search'
import SlideDownBtn from './childComponents/SlideDownBtn'
import './Header.css';

export default function Header() {
    return (
        <>
            <Navbar />
            <Heading />
            <Search />
            <SlideDownBtn />
        </>
    )
}
