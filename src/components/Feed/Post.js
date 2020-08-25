import React from 'react';
import './Post.css';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

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

function Post() {
    const classes = useStyles();
    return (
        <div className="post">
             <Avatar className={classes.large} alt="Remy Sharp" src="" />
            <div className="container">

            <div className="content">
                <h3>Paolo Dizon</h3>
                <VerifiedUserIcon className="twitterColor"/>
                <p className='xlight'>@paodzon • 5m</p>
            </div>
            <div className='postText'>
                <p>ASDASDASDASDASDASDASDASDASDssssssssssssssssssssssssssssssssssssssssssssssssAD</p>
            </div>
            <div className="postIMG">
                <img className='imgPost' src="https://press.razer.com/wp-content/uploads/2019/03/Razer-BlackWidow-Kraken-Basilisk-Essential-Press-Size.png"></img>
            </div>
            <div className="postIcons">
                <ChatBubbleOutlineIcon className="comment"/>
                <RepeatIcon className="retweet"/>
                <FavoriteBorderIcon className="heart"/>
                <PublishIcon className="publish" />
            </div>
            </div>


        </div>
            
       
    )
}

export default Post
