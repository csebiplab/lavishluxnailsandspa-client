import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore from "swiper";
import GalImg1 from "@/assets/images/g1.jpg";
import GalImg2 from "@/assets/images/g2.jpg";
import GalImg3 from "@/assets/images/g3.jpg";
import GalImg4 from "@/assets/images/g4.jpg";
import GalImg5 from "@/assets/images/g5.jpg";
import GalImg6 from "@/assets/images/g6.jpg";
import GalImg7 from "@/assets/images/g7.jpg";

const galImgs = [
  GalImg1,
  GalImg2,
  GalImg3,
  GalImg4,
  GalImg5,
  GalImg6,
  GalImg7,
  GalImg5,
  GalImg2,
];

// // import required modules
import { Autoplay, Grid } from "swiper/modules";

// // Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/grid";
import "swiper/css/effect-coverflow";
import Image from "next/image";

export default function SwipperGalleryComponent() {
  // SwiperCore.use([Autoplay]);

  return (
    <div>
      <div className="container px-5 md:px-[6.3rem]">
        <div className="w-max mb-8">
          <h2 className={`title font-semibold textPrimary text-center`}>
            Galleries
          </h2>
          <div className="sm-bb" />
        </div>
      </div>
      <Swiper
        className="sample-slider w-full"
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 0,
          pauseOnMouseEnter: false,
          disableOnInteraction: false,
          reverseDirection: true,
          stopOnLastSlide: false,
        }}
        slidesPerView={5}
        speed={4000}
        allowTouchMove={false}
        // allowSlideNext={false}
        // allowSlidePrev={false}
        // grid={{
        //   rows: 2,
        // }}
        // coverflowEffect={{
        //   rotate: 50,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: true,
        // }}
      >
        {galImgs.map((imgUrl, i) => (
          <SwiperSlide key={i} className="m-2">
            <Image
              width={400}
              height={400}
              className="w-auto h-52 mx-8"
              src={imgUrl}
              alt="gallery"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        className="sample-slider w-full"
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 0,
          pauseOnMouseEnter: false,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}
        slidesPerView={5}
        speed={4000}
        allowTouchMove={false}
        // grid={{
        //   rows: 2,
        // }}
        // coverflowEffect={{
        //   rotate: 50,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: true,
        // }}
      >
        {galImgs.map((imgUrl, i) => (
          <SwiperSlide key={i} className="m-2">
            <Image
              width={400}
              height={400}
              className="w-auto h-52 mx-8"
              src={imgUrl}
              alt="gallery"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
