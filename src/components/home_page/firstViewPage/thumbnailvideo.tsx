import React from "react";
import video from '../../../static/video.mp4';
import './main.css'
import favicon from '../../../static/favicon2.png'

const MainVideo = () => {

    const handleScroll = (id:string, event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        const element = document.getElementById(id);
        element?.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <div className="main_video" id="home">
            <video muted autoPlay id="main_video" loop src={video}></video>
            <div className="video_slogan">
                <img style={{width:'350px'}} src={favicon}></img>
                <a className='pre_register' href='#preRegister' onClick={(e) => handleScroll('preRegister', e)}>Pre-Register Now</a>
            </div>
        </div> 
    )
}



export default MainVideo