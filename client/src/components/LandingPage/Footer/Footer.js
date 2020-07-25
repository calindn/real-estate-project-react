import React from 'react'
import Newsletter from './childComponents/Newsletter';
import Sections from './childComponents/Sections';
import Help from './childComponents/Help';
import About from './childComponents/About';
import AppAccess from './childComponents/AppAccess';
import Follow from './childComponents/Follow';
import './Footer.css';

export default function Footer() {
    return (
        <div>
            <Newsletter />
            <Sections />
            <Help />
            <About />
            <AppAccess />
            <Follow />
        </div>
    )
}
