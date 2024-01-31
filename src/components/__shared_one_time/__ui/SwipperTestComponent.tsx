import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore from "swiper";

// // import required modules
import { Autoplay, Grid } from "swiper/modules";

// // Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/grid";
import 'swiper/css/effect-coverflow';

export default function SwipperTestComponent() {
  // SwiperCore.use([Autoplay]);

  return (
    <Swiper
      className="sample-slider"
      modules={[Autoplay]}
      loop={true}
      autoplay={{
        delay: 0,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
        reverseDirection: true,
        stopOnLastSlide: false
      }}
      slidesPerView={5}
      speed={3000}
      grid={{
        rows: 2,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
    >
      <SwiperSlide>
        <img src="/img/sample1.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/sample2.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/sample3.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/sample4.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/sample5.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/sample6.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/sample7.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/sample8.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/sample9.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/sample10.png" />
      </SwiperSlide>
    </Swiper>
  );
}

/**
 * import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Grid, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}

 */
