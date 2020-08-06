import React, { useState, useEffect } from 'react'
import real_manager from '../../../../imgs/partners/partner_7.png'
import pitagora from '../../../../imgs/partners/partner_4.png';
import immo_flux from '../../../../imgs/partners/partner_3.png';
import softimobiliar_crm from '../../../../imgs/partners/partner_5.png';
import rebs from '../../../../imgs/partners/partner_1.png';
import whise from '../../../../imgs/partners/partner_6.png';
import imob_manager from '../../../../imgs/partners/partner_2.png';

export default function Partners() {

    const [logo1, setLogo1] = useState({ src: real_manager });
    const [logo2, setLogo2] = useState({ src: pitagora });
    const [logo3, setLogo3] = useState({ src: immo_flux });

    const changeSliderPage = (e) => {
        Array.from(document.querySelectorAll('.slider-dots span')).forEach(element => {
            if (element.classList.contains('selected')) {
                element.classList.remove('selected');
            }
        })
        e.target.classList.add('selected');

        let imgElements = [];
        for (let i = 0; i < 3; i++) {
            imgElements.push(document.querySelector(`.wrapper div:nth-child(${i + 1}) img`))
        }

        if (e.target.classList.contains('dot-1')) {
            imgElements.forEach(img => img.style.display = 'inline-block');
            logo1.src = real_manager;
            logo2.src = pitagora;
            logo3.src = immo_flux;
        }
        else if (e.target.classList.contains('dot-2')) {
            imgElements.forEach(img => img.style.display = 'inline-block');
            logo1.src = softimobiliar_crm;
            logo2.src = rebs;
            logo3.src = whise;
        }
        else {
            logo1.src = imob_manager;
            logo2.src = null;
            logo3.src = null;
        }
        setLogo1({ ...logo1 });
        setLogo2({ ...logo2 });
        setLogo3({ ...logo3 });
    }
    return (
        <div className='partners-c'>
            <div className='main-wrapper'>
                <h1>
                    <span>Platforme CRM partenere</span>
                prin care poți publica automat pe
                <a href='#'>HomeZZ.ro</a> și <a href='#'>Lajumate.ro</a>
                </h1>
                <div className='wrapper'>
                    <div>
                        <img src={logo1.src} alt='' />
                    </div>
                    <div>
                        <img src={logo2.src} alt='' />
                    </div>
                    <div>
                        <img src={logo3.src} alt='' />
                    </div>
                </div>
                <div className='slider-dots'>
                    <span onClick={changeSliderPage} className='dot-1 selected'></span>
                    <span onClick={changeSliderPage} className='dot-2'></span>
                    <span onClick={changeSliderPage} className='dot-3'></span>
                </div>
            </div>

        </div>
    )
}
