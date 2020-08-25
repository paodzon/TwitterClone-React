import React from 'react';
import './TweetBox.css';
import { makeStyles } from '@material-ui/core/styles';
import { Input, Button,Avatar } from '@material-ui/core';

//Icons
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
import PollOutlinedIcon from '@material-ui/icons/PollOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(6),
      height: theme.spacing(6),
    },
  }));

function TweetBox() {
    const classes = useStyles();

    return (
        <div className='tweetBox'>
            <div className='boxIMG'>
            <Avatar className={classes.large} alt="Remy Sharp" src="https://scontent.fcrk2-1.fna.fbcdn.net/v/t1.0-9/52141148_10158333981522576_3535269774126743552_o.png?_nc_cat=1&_nc_sid=09cbfe&_nc_ohc=eJbBmPBtFI4AX9zM20t&_nc_ht=scontent.fcrk2-1.fna&oh=891f091ae8c49a072f217e714503fb64&oe=5F69457D" />
            </div>
            <div className="tweetInput">
                <input className="input" placeholder="What's happening?"/>
                <div className='tweetIcons'>
                    <ImageOutlinedIcon className="icons" />
                    <GifOutlinedIcon className="icons" />
                    <PollOutlinedIcon className="icons" />
                    <SentimentSatisfiedOutlinedIcon className="icons" />
                    <EventOutlinedIcon className="icons" />
                    <div className="tweetBTN">
                    <Button className="btnTB" variant="outlined">Tweet</Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TweetBox
