import React from 'react'

import './VideoItem.css'

const VideoItem = ({videos,onVideoSelect}) => {
  return (
  <div className='videoItem'>
      <div style={{display:'flex',alignItems:'center', cursor:'pointer'}} onClick={() => {onVideoSelect(videos)}}>
        <img style={{marginRight:'20px'}} alt='thubnail' src={videos.snippet.thumbnails.medium.url} />
        <h5><b>{videos.snippet.title}</b></h5>
      </div>
  </div>
  )
}

export default VideoItem
