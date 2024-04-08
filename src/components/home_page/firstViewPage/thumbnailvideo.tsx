import React from "react";
import front_image from '../../../static/bg1.png';
import play_store_image from '../../../static/gp_icon.png';
import apple_store_image from '../../../static/as_icon.png';
import './main.css'

const MainVideo = () => {

    const handleScroll = (id:string, event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        const element = document.getElementById(id);
        element?.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <div className="main_video" id="home">
            <img src={front_image}></img>
            {/* <video muted autoPlay id="main_video" loop src={video}></video> */}
            <div className="video_slogan">
                {/* <div className="video_slogan_super">SURVIVE IN TEOT</div> */}
                {/* <div className="video_slogan_sub">in this dark world</div> */}
                <div className="buttons">
                    {/* <div className="row2">
                        <a className='pre_register' href='#download' onClick={(e) => handleScroll('download', e)}>Watch Trailer Now                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 -960 960 960"><path d="M170-228q-38-44-61-98T80-440h82q6 44 22 83.5t42 72.5l-56 56ZM80-520q8-60 30-114t60-98l56 56q-26 33-42 72.5T162-520H80ZM438-82q-60-6-113.5-29T226-170l56-58q35 26 73.5 43t82.5 23v80ZM284-732l-58-58q45-36 98.5-59T440-878v80q-45 6-84 23t-72 43Zm96 432v-360l280 180-280 180ZM520-82v-80q121-17 200.5-107T800-480q0-121-79.5-211T520-798v-80q154 17 257 130t103 268q0 155-103 268T520-82Z"/></svg></a>
                    </div> */}
                    <div className="download_platforms">
                        <div className="lock_download">
                            <img src={play_store_image}/>
                            <div className="override_lock">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/></svg>
                            </div>
                        </div>
                        <div className="lock_download">
                            <img src={apple_store_image}/>
                            <div className="override_lock">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/></svg>
                            </div>                        
                        </div>                    
                    </div>
                    <div className="row1">
                        <a className='pre_register' href='#preRegister' onClick={(e) => handleScroll('preRegister', e)}>Pre-Register Now</a>
                        <a className='pre_register' href='#download' onClick={(e) => handleScroll('download', e)}>Devblog</a>
                    </div>
                </div>
            </div>
        </div> 
    )
}



export default MainVideo