import React from 'react';
import SidebarMenu from './SidebarMenu';
import './Sidebar.css';

// Icons
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EmailIcon from '@material-ui/icons/Email';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';

function Sidebar() {
    return (
        <div className='sidebar'>
            {/* Twitter Logo */}
            <TwitterIcon className="twitterIcon"/>
            
            {/* Sidebar Menu */}
            <SidebarMenu active text="Home" Icon={HomeIcon}/>
            <SidebarMenu text="Explore" Icon={SearchIcon}/>
            <SidebarMenu text="Notifications" Icon={NotificationsIcon}/>
            <SidebarMenu text="Messages" Icon={EmailIcon}/>
            <SidebarMenu text="Bookmarks" Icon={BookmarkIcon}/>
            <SidebarMenu text="Lists" Icon={ListAltIcon}/>
            <SidebarMenu text="Profile" Icon={PersonIcon}/>
            <SidebarMenu text="More" Icon={MoreHorizIcon}/>
            {/* Tweet Button */}

            <Button className="tweetButton" variant="outlined" fullWidth>Tweet</Button>

        </div>
    )
}

export default Sidebar
