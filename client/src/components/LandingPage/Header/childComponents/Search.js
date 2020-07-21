
import React, { useState, useEffect } from "react";



export default function Search() {



    const onFocus = (e) => {
        e.target.select();
    }
    useEffect(() => {
        let ansambluri = document.querySelector('.ansambluri');

        ansambluri.classList.add('selected-tab');
        console.log(ansambluri);
    }, []);

    const handleTabClick = (e) => {
        let tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => {
            tab.classList.remove('selected-tab');
        });
        e.target.classList.add('selected-tab');

    }


    return (
        <>
            <div className='search-c'>
                <div className='tabs'>
                    <div onClick={handleTabClick} className='toate tab'>Toate</div>
                    <div onClick={handleTabClick} className='apartamente tab'>Apartamente</div>
                    <div onClick={handleTabClick} className='garsoniere tab'>Garsoniere</div>
                    <div onClick={handleTabClick} className='case-vile tab'>Case-Vile</div>
                    <div onClick={handleTabClick} className='terenuri tab'>Terenuri</div>
                    <div onClick={handleTabClick} className='birouri_spatii_comerciale tab'>Birouri - Spații comerciale</div>
                    <div onClick={handleTabClick} className='cazare tab'>Cazare</div>
                    <div onClick={handleTabClick} className='ansambluri tab'>Ansambluri</div>
                </div>
                <div className='search'>
                    <div>
                        <div className='select-wrapper'>
                            <select className='select-action'>
                                <option value='0'>Vânzare</option>
                                <option value='1'>Închiriere</option>
                            </select>
                        </div>
                        <div className='select-region'>
                            <i class="fas fa-map-marker-alt"></i>
                            <input
                                type='text'
                                onFocus={onFocus}
                                value='Toată România'
                            />
                        </div>
                    </div>
                    <button>
                        <i class="fas fa-search"></i>
                        <span>CAUTĂ</span>
                    </button>
                </div>
            </div>
            <div className='back-overlay'></div>
        </>

    )
}
