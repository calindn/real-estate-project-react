import React from 'react'

export default function Home() {
    return (
        <div className='home-c'>
            <div className='upper'>
                <div className='share'>
                    <span className='share-svg'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="50" viewBox="0 0 43 50">
                            <path fill="#ffffff" d="M35.833,2.281a7.105,7.105,0,0,0-6.953,8.837l-16.843,9.83a7.17,7.17,0,1,0,0,10.466l17.018,9.933a7.086,7.086,0,0,0-.191,1.565,7.023,7.023,0,1,0,2.279-5.126L14.118,27.848a6.581,6.581,0,0,0,0-3.336l16.843-9.829a7.16,7.16,0,1,0,4.872-12.4" />
                        </svg>
                    </span>
                </div>
                <div className='save'>
                    <span className='save-svg'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="48" viewBox="0 0 50 48">
                            <path fill="#ffffff" d="M50,18.29L32.025,16.724,25,0,17.975,16.749,0,18.29,13.65,30.24,9.55,48,25,38.576,40.45,48,36.375,30.24ZM25,33.852l-9.4,5.735,2.5-10.813L9.8,21.5l10.95-.96L25,10.358l4.275,10.206,10.95,0.96-8.3,7.276,2.5,10.813Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="48" viewBox="0 0 50 48">
                            <path fill="#ff5253" d="M25,38.577L40.45,48l-4.1-17.76L50,18.29,32.025,16.749,25,0,17.975,16.749,0,18.29,13.65,30.24,9.55,48Z" />
                        </svg>
                    </span>
                </div>
                <div className='verified_phone'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16.27" height="28" viewBox="0 0 16.27 28">
                        <path fill="#4caf50" d="M14.38,0H1.89A1.9,1.9,0,0,0,0,1.89V26.11A1.9,1.9,0,0,0,1.89,28H14.38a1.9,1.9,0,0,0,1.89-1.89V1.89A1.9,1.9,0,0,0,14.38,0ZM4.68,1.61H11.2c.21,0,.38.34.38.77s-.17.75-.38.75H4.68c-.21,0-.38-.33-.38-.75S4.47,1.61,4.68,1.61ZM7.91,26.89a2.16,2.16,0,1,1,2.16-2.16A2.15,2.15,0,0,1,7.91,26.89Zm6.37-16.63L6.22,18.63a.46.46,0,0,1-.35.15.45.45,0,0,1-.35-.15L1.59,14.39l-.1-.15a.55.55,0,0,1-.15-.36.54.54,0,0,1,.15-.35l.71-.71a.49.49,0,0,1,.71,0l0,.05,2.77,3a.24.24,0,0,0,.35,0l6.75-7h.05a.49.49,0,0,1,.71,0l.7.71A.48.48,0,0,1,14.28,10.26Z" transform="translate(0 0)" />
                    </svg>
                </div>
                <div className='sale'>
                    VANZARE
                </div>
            </div>
            <div className='lower'>
                <h1>Apartament 2 camere in Mamaia Nord, la doar 750 Euro/mp</h1>
                <div className='description'>
                    <span className='category-icon'></span>
                    <span className='rooms'>2 camere</span>
                    <span className='m_squared'>64m<sup>2</sup></span>
                    <span className='floor'>etajul 5/10 </span>
                    <span className='three-dots'>...</span>
                </div>
                <div className='price'>49.000 EUR</div>
                <div className='location'>
                    <i class="fas fa-map-marker-alt"></i>
                    <span>
                        Mamaia Sat, Constanta Central
                    </span>
                </div>
            </div>
        </div>
    )
}
