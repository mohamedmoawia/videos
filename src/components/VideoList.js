import React from 'react'
import VideoItem from './VideoItem'

const VideoList = (props)=>{
    const renderdVideo = props.videos.map((video)=>{
        console.log(video.id.videoId);
        return <VideoItem key={video.id.videoId}  onSelectVideo={props.onSelectVideo} video={video} />
    })
    
    return(
        <div >
                {renderdVideo}  
        </div>
    );
}

export default VideoList