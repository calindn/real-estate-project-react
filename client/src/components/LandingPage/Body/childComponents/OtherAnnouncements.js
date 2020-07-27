import React from 'react'
import Announcement from './Announcement';

export default function OtherAnnouncements() {
    return (
        <div className='other-announcements-c'>
            <div className='h-line'></div>
            <div className='wrapper'>
                <h1>Alte anunțuri de interes</h1>
                <div>
                    <Announcement />
                    <Announcement />
                    <Announcement />
                    <Announcement />
                    <Announcement />
                </div>
            </div>

        </div>
    )
}
