import React, { useEffect,useState, useRef } from "react";
import video from '../../video/video.mp4';
import mux from "mux-embed";
import Videos from "./videos";
import MusicCard from './musicBar';

export default function VideoPlayer({ src, poster }) {
    const videoRef = useRef(null);
    const [open, setOpen] = useState(false);


const handleClick=()=>{
    alert("aaa")
setOpen(true)
}

    // useEffect(() => {
    //     const video = videoRef.current;
    //     if (!video) return;
    //     const muxPlayerInitTime = Date.now();
    //     mux.monitor(video, {
    //         debug: true,
    //         data: {
    //             env_key: "ENV_KEY", // required

    //             // Metadata
    //             player_name: "Custom Player",
    //             player_init_time: muxPlayerInitTime,
    //             video_cdn: "cdn-1"

    //             // ... and other metadata
    //         }
    //     });
    // }, [src, videoRef]);

    return (
       
    
        <>
            <video controls ref={videoRef} poster={poster} src={src} onClick={handleClick}/>
            {open&&
            <MusicCard src={src}></MusicCard>
            }
        </>
    );
}



