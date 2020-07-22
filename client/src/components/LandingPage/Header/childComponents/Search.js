
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
        document.querySelector('.ansambluri  i').style.display = 'none'
        tabs.forEach(tab => {
            tab.classList.remove('selected-tab');
        });
        e.target.classList.add('selected-tab');
        if (e.target.classList.value.includes('ansambluri')) {
            document.querySelector('.ansambluri  i').style.display = 'block'
        }
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
                    <div onClick={handleTabClick} className='ansambluri tab'><i className="fas fa-caret-down"></i>Ansambluri</div>
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
            <div className='cities'>
                <div className='city'>Toate</div>
                <div className='city'>Bucuresti</div>
                <div className='city'>Timisoara</div>
                <div className='city'>Cluj-Napoca</div>
                <div className='city'>Iasi</div>
                <div className='city'>Brasov</div>
                <div className='city'>Craiova</div>
                <div className='city'>Constanta</div>
                <div className='city'>Ploiesti</div>
            </div>
        </>

    )
}
