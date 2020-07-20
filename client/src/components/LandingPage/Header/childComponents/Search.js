import React from 'react'

export default function Search() {
    return (
        <div className='search-c'>
            <div className='back-overlay'></div>
            <div className='tabs'>
                <div className='toate'>Toate</div>
                <div className='apartamente'>Apartamente</div>
                <div className='garsoniere'>Garsoniere</div>
                <div className='case-vile'>Case-Vile</div>
                <div className='terenuri'>Terenuri</div>
                <div className='birouri_spatii_comerciale'>Birouri - Spații comerciale</div>
                <div className='cazare'>Cazare</div>
                <div className='ansambluri'>Ansambluri</div>
            </div>
            <div className='search'>
                <div>
                    <div className='select-action'>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <div className='select-region'>
                        <i class="fas fa-map-marker-alt"></i>
                        <input type='text' />
                    </div>
                </div>
                <button>
                    <i class="fas fa-search"></i>
                    <span>CAUTĂ</span>
                </button>
            </div>
        </div>
    )
}
