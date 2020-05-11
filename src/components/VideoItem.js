import React from 'react';
import './VideoItem.css'
const VideoItem = (props) => {
    return (
        <div onClick={()=> {props.onSelectVideo(props.video)}} className='video-item'>

            <img alt={props.video.snippet.title} className='image' src={props.video.snippet.thumbnails.medium.url} />
            <p className='title'>
                {props.video.snippet.title}
            </p>


        </div>
    )
}

export default VideoItem