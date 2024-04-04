import React from "react";
import "./sliderOperations.css"
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';


const SliderOperation = () => {

    function delete_image(image: string) {
        console.log(`${image} deleted!`);
    }


    return (
        <div className="dashboard_content">
            <div className="fill_gap"></div>
            <div className="fill-content">
                <div className="dashboard_content_heading"><h1>SLIDER</h1></div>
                {/* <Swiper id="edit_slideshow"
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={false}
                    pagination={{
                    clickable: true,
                    bulletActiveClass: "edit_active_bullet",
                    totalClass: "edit_container",
                    }}
                    navigation={false}
                    autoplay = {{delay: 3000}}
                    modules={[Pagination, Autoplay]}
                    className="edit_Swiper"
                >
                    {slides.map((el)=>{
                        return <SwiperSlide><img src={el} className="edit_swiperSlideImage"></img></SwiperSlide>
                    })}

                </Swiper> */}
                <div className="edit_gallery">
                    {/* {slides.map((el)=>{
                            return (
                                <div className="edit_gallery_image">
                                    <div className="edit_overlay">
                                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => delete_image('imagePath')} height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                                    </div>            
                                    <img src={el}></img>
                                </div>
                            )
                        })} */}
                    <div className="add_image">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderOperation;