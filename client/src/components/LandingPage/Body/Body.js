import React from 'react'
import Homes from './childComponents/Homes';
import SelectButtons from './childComponents/SelectButtons';
import OtherAnnouncements from './childComponents/OtherAnnouncements';
import CategoryList from './childComponents/CategoryList';
import AddAnnouncements from './childComponents/AddAnnouncements';
import Partners from './childComponents/Partners';
import VideoAd from './childComponents/VideoAd';

export default function Body() {
    return (
        <div>
            {/* <h1>Anunturi promovate</h1> */}
            <Homes />
            <SelectButtons />
            <OtherAnnouncements />
            <CategoryList />
            <AddAnnouncements />
            <Partners />
            <VideoAd />
        </div>
    )
}
