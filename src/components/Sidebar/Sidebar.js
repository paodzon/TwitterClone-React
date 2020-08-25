import React from 'react';
import SidebarMenu from './SidebarMenu';
import './Sidebar.css';
import Feed from '../Feed/Feed';
import { Button } from '@material-ui/core';
// Icons
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="divider1">


                {/* Twitter Logo */}
                <TwitterIcon className="twitterIcon" />

                {/* Sidebar Menu */}
                <SidebarMenu active text="Home" Icon={HomeOutlinedIcon} />
                <SidebarMenu text="Explore" Icon={SearchIcon} />
                <SidebarMenu text="Notifications" Icon={NotificationsNoneIcon} />
                <SidebarMenu text="Messages" Icon={MailOutlineIcon} />
                <SidebarMenu text="Bookmarks" Icon={BookmarkBorderIcon} />
                <SidebarMenu text="Lists" Icon={ListAltIcon} />
                <SidebarMenu text="Profile" Icon={PersonOutlineIcon} />
                <SidebarMenu text="More" Icon={MoreHorizIcon} />
                {/* Tweet Button */}
                <Button className="tweetButton" variant="outlined">Tweet</Button>
            </div>

            <div className="divider2">

                {/* Account */}
                <div className='account'>
                    <img alt="" className="accIMG" src="https://scontent.fcrk2-1.fna.fbcdn.net/v/t1.0-9/52141148_10158333981522576_3535269774126743552_o.png?_nc_cat=1&_nc_sid=09cbfe&_nc_ohc=eJbBmPBtFI4AX9zM20t&_nc_ht=scontent.fcrk2-1.fna&oh=891f091ae8c49a072f217e714503fb64&oe=5F69457D"></img>
                    <div className="accountName">
                        <h5>P0W</h5>
                        <p className="xlight">@paodzon</p>
                    </div>
                    <KeyboardArrowDownIcon className="arrow" />
                </div>

            </div>



        </div>

    )
}

export default Sidebar
