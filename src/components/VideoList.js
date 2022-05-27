import React from 'react'


import VideoItem from './VideoItem/VideoItem'

const VideoList = ({video, onVideoSelect}) => {
    const listOfVideos = video.map((videos,id) => <VideoItem onVideoSelect={onVideoSelect} key={id} videos={videos} />)

  return (
      <div container spacing={5}>
        {listOfVideos}    
      </div>
      
      );
}

export default VideoList; 
