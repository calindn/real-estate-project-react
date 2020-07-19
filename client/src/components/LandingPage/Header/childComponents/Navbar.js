import React from 'react'

export default function Navbar() {
    return (
        <div className='navbar-container'>
            <div className='logo'><img src='https://media1.homezz.ro/images/logo.png' alt='homeZZ.ro logo' /></div>
            <div className='r-side'>
                <span>Autentificare</span>
                <span>Creare Cont</span>
                <span>Ajutor</span>
                <button><span>+</span>ADAUGA ANUNT</button>
            </div>

        </div>
    )
}
