import React from 'react'

const VideoDetail = ({video}) => {
  
    if(!video) return <div></div>

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (

    <div>
        <div style={{height:'500px', marginTop:'25px',padding:'5px',marginLeft:'15px'}}>
            <iframe frameBorder='0' height='100%' width='100%' title='Video Player' src={videoSrc} />
        </div>
        <div style={{padding:'20px'}}>
            <h3>{video.snippet.title} - {video.snippet.channelTitle}</h3>
            <h6><b> {video.snippet.channelTitle} </b> </h6>
            <p>{video.snippet.description}</p>
        </div>
    </div>
    
  )
}

export default VideoDetail
