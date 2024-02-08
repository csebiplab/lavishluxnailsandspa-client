import ReviewCard from "../__ui/ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

// Swiper slider breakpoints Object
const breakpoints = {
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
    slidesPerView: 3,
  },
  1000: {
    slidesPerView: 4,
  },
  1500: {
    slidesPerView: 5,
  },
  1700: {
    slidesPerView: 6,
  },
};

const UserReviewSection = () => {
  return (
    <div>
      <div>
        <h2 className="text-4xl font-bold textPrimary">Reviews</h2>
        <div className="w-20 borderBClr mt-2" />
      </div>
      <div className="mt-4">
        <Swiper
          navigation={true}
          loop={true}
          modules={[Navigation, Autoplay]}
          slidesPerView={4}
          breakpoints={breakpoints}
          spaceBetween={50}
          autoplay={{
            delay: 3000,
          }}
          className=""
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((__, i) => (
            <SwiperSlide key={i}>
              <ReviewCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default UserReviewSection;
