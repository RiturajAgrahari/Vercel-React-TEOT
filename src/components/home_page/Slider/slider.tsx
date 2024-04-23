import React from "react";
import "./slider.css"
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';


interface SliderProps {
    id: number;
    image_url: string;
  }
  


const Slider = () => {
    const [sliderImage, setSliderImage] = useState([])

    useEffect(() => {
        const fetchSliderData = async () => {
          try {
            const sliderResponse = await fetch('http://148.251.175.121:8000/api/get_slider_image/');
            if (!sliderResponse.ok) {
              throw new Error('failed to fetch data');
            }
            const jsonSliderData = await sliderResponse.json();
            setSliderImage(jsonSliderData)
          } catch (error) {
            console.error('Error fetching data', error);
          }
        };

        fetchSliderData();
      }, [])


    return(
        <div className="slider_main" id="features">
            <h1 className="features_headline hidden">Features</h1>
            <Swiper id="slider"
                slidesPerView={1}
                spaceBetween={30}
                loop={false}
                pagination={{
                clickable: true,
                bulletActiveClass: "active_bullet",
                totalClass: "container",
                }}
                navigation={false}
                autoplay = {{delay: 5000}}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {sliderImage.map((item:SliderProps)=>{
                    return <SwiperSlide><img src={item.image_url} className="swiper-image"></img></SwiperSlide>
                })}

            </Swiper>
        </div>
    )
}

export default Slider