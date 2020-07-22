import React from 'react'

export default function SlideDownBtn() {

    const scrollDown = (e) => {
        window.scrollTo({
            top: 500,

            behavior: 'smooth'
        })
    }

    return (
        <div onClick={scrollDown} className='slide-down-btn'>
            <i class="fas fa-chevron-down"></i>
        </div>
    )
}

