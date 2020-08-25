import React from 'react';
import './TweetBox.css';
import { Input, Button } from '@material-ui/core';

//Icons
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
import PollOutlinedIcon from '@material-ui/icons/PollOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';

function TweetBox() {
    return (
        <div className='tweetBox'>
            <div className='boxIMG'>
                <img alt='' className='tweetIMG' src="https://scontent.fcrk2-1.fna.fbcdn.net/v/t1.0-9/52141148_10158333981522576_3535269774126743552_o.png?_nc_cat=1&_nc_sid=09cbfe&_nc_ohc=eJbBmPBtFI4AX9zM20t&_nc_ht=scontent.fcrk2-1.fna&oh=891f091ae8c49a072f217e714503fb64&oe=5F69457D"></img>
            </div>
            <div className="tweetInput">
                <input className="input" placeholder="What's happening?" />
                <div className='tweetIcons'>
                    <ImageOutlinedIcon className="icons" />
                    <GifOutlinedIcon className="icons" />
                    <PollOutlinedIcon className="icons" />
                    <SentimentSatisfiedOutlinedIcon className="icons" />
                    <EventOutlinedIcon className="icons" />
                    <Button className="btnTB" variant="outlined">Tweet</Button>
                </div>
            </div>
        </div>
    )
}

export default TweetBox
