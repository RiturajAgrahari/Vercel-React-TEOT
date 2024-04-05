import React from "react";
import video from '../../../static/video.mp4';
import './main.css'

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
                <div className="video_slogan_super">SURVIVE IN TEOT</div>
                <div className="video_slogan_sub">in this dark world</div>
                <div className="buttons">
                    <div className="row1">
                        <a className='pre_register' href='#preRegister' onClick={(e) => handleScroll('preRegister', e)}>Pre-Register Now</a>
                        <a className='pre_register' href='#download' onClick={(e) => handleScroll('download', e)}>Download Now</a>
                    </div>
                    <div className="row2">
                        <a className='pre_register' href='#download' onClick={(e) => handleScroll('download', e)}>Watch Trailer Now                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="35" viewBox="0 -960 960 960" width="35"><path d="M170-228q-38-44-61-98T80-440h82q6 44 22 83.5t42 72.5l-56 56ZM80-520q8-60 30-114t60-98l56 56q-26 33-42 72.5T162-520H80ZM438-82q-60-6-113.5-29T226-170l56-58q35 26 73.5 43t82.5 23v80ZM284-732l-58-58q45-36 98.5-59T440-878v80q-45 6-84 23t-72 43Zm96 432v-360l280 180-280 180ZM520-82v-80q121-17 200.5-107T800-480q0-121-79.5-211T520-798v-80q154 17 257 130t103 268q0 155-103 268T520-82Z"/></svg></a>
                    </div>
                </div>
            </div>
        </div> 
    )
}



export default MainVideo