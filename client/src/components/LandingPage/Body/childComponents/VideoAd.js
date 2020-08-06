import React, { useState } from 'react'
import play_tv_image from '../../../../imgs/campaign-headline-icon.png';
import promote_image_1 from '../../../../imgs/promote-image-1.png';
import promote_image_2 from '../../../../imgs/promote-image-2.png';
import promote_image_3 from '../../../../imgs/promote-image-3.png';

import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

export default function VideoAd() {
    const [open, setOpen] = useState(false);
    const playVideoAd = () => {
        console.log('playing ');
        setOpen(true);
    }
    const openModal = () => {
        setOpen(true);
    }
    return (
        <div className='videoAd-c'>
            <div className='wrapper'>

                <div className='section1'>
                    <div>
                        <img src={play_tv_image} alt='campaign headline icon' />
                        <span>Dacă și la tine acasă "se stă în trafic"</span>
                    </div>
                    <div>
                        <img src={promote_image_1} alt='promote image 1' />
                    </div>
                </div>
                <div className='section2'>
                    <div>
                        <span>atunci cu siguranță aici vei găsi soluția.</span>
                    </div>
                    <div>
                        <img src={promote_image_2} alt='promote image 2' />
                    </div>
                </div>
                <div className='section3'>
                    <div>
                        <span>Apasă butonul "play"</span>

                        <span class='full-text'>
                            <img src={play_tv_image} alt='campaign headline icon' />
                            Dacă și la tine acasă "se stă în trafic"
                            atunci cu siguranță aici vei găsi soluția.
                            Apasă butonul "play"
                        </span>
                    </div>
                    <div onClick={playVideoAd}>
                        <img src={promote_image_3} alt='promote image 3' />
                        <div className='play-btn'>
                            <span className='arrow-right'></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-line'></div>
            <ModalVideo
                channel='youtube'
                isOpen={open}
                videoId='yVVLlDipH4M'
                onClose={() => setOpen(false)}
            />
        </div>
    )
}
