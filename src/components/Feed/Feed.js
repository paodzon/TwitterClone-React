import React from 'react';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import './Feed.css';
import TweetBox from './TweetBox';
function Feed() {
    return (
        <div className='feed'>
            {/* Home */}
            <div className='feedHeader'>
            <h1>Home</h1>
            <StarBorderIcon className="star"/>
            </div>
            {/* TweetBox */}
            <TweetBox/>

        </div>
    )
}

export default Feed
