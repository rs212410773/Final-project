import React, { useState } from 'react'
import { click } from '@testing-library/user-event/dist/click';
import VideoThumbnail from 'react-video-thumbnail'; // use npm published version
import video from '../../video/video.mp4';
import VideoPortal from './videos';
const Video = () => {
    return (
        <div >

<VideoThumbnail onClick={()=> console.log("BBBB")}
    videoUrl={video}
    thumbnailHandler={(thumbnail) => console.log("AAA")}  
    width={120}
    height={80}
    />
    {/* {click && <VideoPortal></VideoPortal>} */}

    </div>
    )}
    export default Video;