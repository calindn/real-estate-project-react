import React from 'react'
import Homes from './childComponents/Homes';
import SelectButtons from './childComponents/SelectButtons';
import OtherAnnouncements from './childComponents/OtherAnnouncements';
import CategoryList from './childComponents/CategoryList';
import AddAnnouncements from './childComponents/AddAnnouncements';
import Partners from './childComponents/Partners';
import VideoAd from './childComponents/VideoAd';
import rocket_svg from '../../../imgs/rocket_promo_dark_green.svg';

import './Body.css';

export default function Body() {
    return (
        <div className='body-container'>
            <h1><img src={rocket_svg} alt='rocket svg' />Anunturi promovate</h1>
            <div className='wrapper'>
                <Homes />
                <SelectButtons />
                <OtherAnnouncements />
                <CategoryList />
                <Partners />
                <VideoAd />
            </div>

        </div>
    )
}
