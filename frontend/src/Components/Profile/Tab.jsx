import React, { useState } from 'react'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function ProfileTab() {

    const [value, setValue] = useState('onsale');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClickEditProfile = () => {
        const profileSection = document.getElementById('profile_edit');
        if (profileSection) {
            // 👇 Will scroll smoothly to the top of the next section
            profileSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <TabContext value={value}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="On Sale" value="onsale" />
                    <Tab label="Created" value="created" />
                    <Tab label="liked" value="likes" />
                    <Tab label="Watchlist" value="watchlist" />
                    <Tab label="Followed" value="followed" />
                    <Tab label="Followers" value="followers" />
                    <Tab label="Notifications" value="notifications" />
                    <Tab label="Edit Profile" value="editprofile" onClick={handleClickEditProfile} />
                </TabList>

                {/* <TabPanel value="onsale">on Sale Nfts</TabPanel>
                <TabPanel value="created">Created data</TabPanel>
                <TabPanel value="likes">Likes data</TabPanel>
                <TabPanel value="watchlist">Watch List Data</TabPanel>
                <TabPanel value="followed">Followed Data</TabPanel>
                <TabPanel value="followers">Followers Data</TabPanel>
                <TabPanel value="notifications">Notifications Data</TabPanel>
                <TabPanel value="editprofile" >Edit Profile</TabPanel> */}
            </TabContext>
        </div>
    )
}
