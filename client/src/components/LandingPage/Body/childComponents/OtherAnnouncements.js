import React from 'react'
import Announcement from './Announcement';

export default function OtherAnnouncements() {
    return (
        <div className='other-announcements-c'>
            <h1>Alte anunțuri de interes</h1>
            <div>
                <Announcement />
                <Announcement />
                <Announcement />
                <Announcement />
                <Announcement />
            </div>
        </div>
    )
}
