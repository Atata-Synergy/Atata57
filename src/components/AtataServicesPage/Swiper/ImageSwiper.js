import React, { useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import SwiperCore, {Thumbs,Pagination, Navigation, A11y} from "swiper"
import styled from "styled-components"
import "../Swiper/style.css"
import "swiper/swiper-bundle.css"

import img4 from "../ServicesImage/1.png"
import { style } from '@material-ui/system';
SwiperCore.use([Thumbs,Pagination, Navigation, A11y]);

function ImageSwiper(){

const slides = [];
const [thumbsSwiper, setThumbsSwiper] = useState(null);

for (let i = 0; i < 5; i += 1 ) {
    slides.push(
        <SwiperSlide key={`slide-${i}`} tag="li">
        <img src={`https://picsum.photos/id/${i + 1}/500/300`}
        
         alt={`Slide ${i}`}/>
    
        {/*<img src={img4}></img>*/}

        </SwiperSlide>
    );
}
const thumbs = [];
for (let i=0; i < 5; i +=1){
    thumbs.push (
        <SwiperSlide key={'thumb-${i}'}
    tag="li"> 
<img src={`https://picsum.photos/id/${i + 1}/500/300`}
         alt={`Thumbnail ${i}`}/>
    
    </SwiperSlide>
    
    );
}
        return (
            
        
                <React.Fragment>
                <Swiper id='main' 
               thumbs={{swiper:thumbsSwiper}}
                tag="section" wrapperTag="ul" 
                navigation spaceBetween= {20}
                 slidesPerView={3}
                 onInit={(swiper)=> console.log ('Swiper Initialized!',swiper)}
                 onSlideChange={(swiper)=> {console.log('Slide index changed to:',swiper.inactiveIndex)}}
                 onReachEnd={ () => console.log('Swiper end reached')}
        
                 >                

                {slides}
                
                </Swiper>
        <Swiper 
                id="thumbs" onSwiper={setThumbsSwiper}
                spaceBetween={5}
                slidesPerView={3}

                >
                {thumbs}
        </Swiper>
                </React.Fragment>

        )
    }

export default ImageSwiper
