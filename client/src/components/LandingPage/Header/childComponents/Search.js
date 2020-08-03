import React, { Component, Fragment, useEffect } from 'react';

import Select from 'react-select';



export default function Search() {

    const onFocus = (e) => {
        e.target.select();
    }
    useEffect(() => {
        let tabs = document.querySelector('.search-c .tabs');
        let display = tabs.style.display;
        if (display !== 'none') {
            let ansambluri = document.querySelector('.ansambluri');

            ansambluri.classList.add('selected-tab');
            console.log(ansambluri);
        }

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
                <div className='select-real-estate-types' style={{ display: 'none' }}>
                    <SingleSelect />
                </div>
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


const customStyles = {

    option: (provided, state) => ({
        ...provided,
        color: 'black',
        '&:first-child': {
            backgroundColor: '#fff'
        },
        '&:hover': {
            backgroundColor: '#4caf50',
            color: '#fff'
        }

    }),
}


class SingleSelect extends Component {
    state = {
        isClearable: true,
        isDisabled: false,
        isLoading: false,
        isRtl: false,
        isSearchable: true
    };

    toggleClearable = () => {
        this.setState(state => ({ isClearable: !state.isClearable }));
    }
    toggleDisabled = () =>
        this.setState(state => ({ isDisabled: !state.isDisabled }));
    toggleLoading = () =>
        this.setState(state => ({ isLoading: !state.isLoading }));
    toggleRtl = () => this.setState(state => ({ isRtl: !state.isRtl }));
    toggleSearchable = () =>
        this.setState(state => ({ isSearchable: !state.isSearchable }));

    render() {
        const {
            isClearable,
            isSearchable,
            isDisabled,
            isLoading,
            isRtl,
        } = this.state;

        const options = [
            { value: 'toate', label: 'Toate' },
            { value: 'apartamente', label: 'Apartamente' },
            { value: 'garsoniere', label: 'Garsoniere' },
            { value: 'case-vile', label: 'Case-Vile' },
            { value: 'terenuri', label: 'Terenuri' },
            { value: 'birouri', label: 'Birouri - Spații comerciale' },
            { value: 'cazare', label: 'Cazare' },
            { value: 'ansambluri', label: 'Ansambluri' },
        ]

        return (
            <>
                <Select
                    styles={customStyles}
                    width='200px'
                    className='basic-single'
                    classNamePrefix='select'
                    defaultValue={options[0]}
                    isDisabled={isDisabled}
                    isLoading={isLoading}
                    isClearable={isClearable}
                    isRtl={isRtl}
                    isSearchable={isSearchable}
                    name='real-estate type'
                    options={options}
                    theme={theme => ({
                        ...theme,
                        borderRadius: 0,
                        colors: {
                            ...theme.colors,
                            primary25: 'hotpink',
                            primary: '#4caf50',
                        },
                    })}

                />
            </>
        )
    }
}