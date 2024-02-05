import ReviewCard from "../__ui/ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const UserReviewSection = () => {
  return (
    <>
      <Swiper
        navigation={true}
        loop={true}
        modules={[Navigation]}
        slidesPerView={4}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 2,
          },
          639: {
            slidesPerView: 3,
          },
          865: {
            slidesPerView: 4,
          },
          1000: {
            slidesPerView: 5,
          },
          1500: {
            slidesPerView: 6,
          },
          1700: {
            slidesPerView: 7,
          },
        }}
        spaceBetween={50}
        className=""
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((__, i) => (
          <SwiperSlide key={i} className="w-full md:w-auto">
            <ReviewCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default UserReviewSection;
