import React from 'react';

const VideoDetail = (props) => {
    if (!props.video) {
        return (<div>Search for what do you want...</div>)
    }
     const videoSrc =  `https://www.youtube.com/embed/${props.video.id.videoId}`
    return (
        <div className="video-detail" style={{width:'100%', marginRight: 'auto', marginLeft:'auto'}}>
            <iframe title={props.video.id.videoId} src={videoSrc} width='650' height='315'></iframe>
            <div style={{padding: 5, border: '1px solid', width: '100%', borderRadius: 5 }}>
            <h5 className='title'>{props.video.snippet.title}
            </h5>
            <p style={{margin: '5px'}}>{props.video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail