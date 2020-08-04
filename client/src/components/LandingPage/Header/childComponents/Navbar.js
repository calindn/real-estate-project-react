import React, { useEffect } from 'react'

export default function Navbar() {

    const authenticationTxt = `Autentifică-te acum, pentru o experiență imobilară completă!`
    const createAccountTxt = `Creează-ți un cont și bucură-te de toate avantajele acestuia!`


    useEffect(() => {
        window.onresize = onResize;
        document.querySelector('#authentication').addEventListener('mouseenter', (evt) => {
            evt.stopPropagation();
            let popup = document.querySelector('#auth');
            popup.style.visibility = 'visible';
            popup.style.opacity = '1';
        })
        document.querySelector('#authentication').addEventListener('mouseleave', (evt) => {
            evt.stopPropagation();

            let popup = document.querySelector('#auth');
            popup.style.visibility = 'hidden';
            popup.style.opacity = '0';
        })
        document.querySelector('#create-account').addEventListener('mouseenter', (evt) => {
            evt.stopPropagation();
            let popup = document.querySelector('#create-a');
            popup.style.visibility = 'visible';
            popup.style.opacity = '1';
        })
        document.querySelector('#create-account').addEventListener('mouseleave', (evt) => {
            evt.stopPropagation();

            let popup = document.querySelector('#create-a');
            popup.style.visibility = 'hidden';
            popup.style.opacity = '0';
        })

        window.onscroll = (e) => {
            console.log('scrolling');
            console.log(window.scrollY);
            if (window.scrollY > 199) {
                const navbar_c = document.querySelector('.navbar-container');
                navbar_c.style.height = '0';
                navbar_c.classList.add('dynamic-class')

                document.querySelector('.slide-up-btn').style.display = 'block';
            }
            else if (window.scrollY < 199) {
                const navbar_c = document.querySelector('.navbar-container');
                navbar_c.classList.remove('dynamic-class')

                document.querySelector('.slide-up-btn').style.display = 'none';
            }
        }

    }, [])

    const toggleOpen = (e) => {
        e.stopPropagation();
        let menu = document.querySelector('#nav-icon');
        let open_menu = document.querySelector('.open-menu');

        let isOpen = menu.classList.contains('open');
        if (isOpen) {
            menu.classList.remove('open');
            open_menu.style.display = 'none';
        }
        else {
            menu.classList.add('open');
            open_menu.style.display = 'flex';
            // change logo position prop to fixed
            // document.querySelector('.navbar-container .n-wrapper .logo').style.position = 'fixed !important';
        }
    }
    const onResize = () => {
        if (window.innerWidth > 700) {
            document.querySelector('.open-menu').style.display = 'none';
            document.querySelector('#nav-icon').classList.remove('open');
        }
    }
    return (
        <>
            <div className='navbar-container'>
                <div className='n-wrapper'>
                    <div className='logo'><img src='https://media1.homezz.ro/images/logo.png' alt='homeZZ.ro logo' /></div>
                    <div className='r-side'>
                        <span id='authentication'>Autentificare
                            <PopupCard id='auth' text={authenticationTxt} />
                        </span>
                        <span id='create-account'>Creare Cont
                            <PopupCard id='create-a' text={createAccountTxt} />
                        </span>
                        <span>Ajutor</span>
                        <div>
                            <button><span>+</span>ADAUGĂ ANUNȚ</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='dark-overlay'></div>
            <div onClick={toggleOpen} id="nav-icon">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className='open-menu'>
                <div>Autentificare
                    {/* <PopupCard id='auth' text={authenticationTxt} /> */}
                </div>
                <div>Creare Cont
                            {/* <PopupCard id='create-a' text={createAccountTxt} /> */}
                </div>
                <div>Ajutor</div>
                <div>
                    <button><span>+</span>ADAUGĂ ANUNȚ</button>
                </div>
            </div>
        </>

    )
}

function PopupCard({ id, text }) {
    return (
        <div id={id} className='popup-card-container'>
            <div className='text'>
                <span>
                    <i className="fas fa-user-alt"></i>
                    {text}
                </span>
            </div>
            <div className='btns'>
                <button className='access-account-btns'>Intră în cont</button>
                <button className='access-account-btns'>Creare cont</button>
            </div>
        </div>
    )
}
