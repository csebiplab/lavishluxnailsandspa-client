import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import BookNow from "../Home/BookNow";

export default function SwiperHeroSection() {
  return (
    <div className="px-10 mx-auto mt-4">
      <Swiper loop={true} navigation={true} modules={[Navigation]} className="">
        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-x-8 gap-y-4 w-full">
            <div className="flex justify-center md:justify-end">
              <img
                src="https://www.glosslab.com/hubfs/Glosslab_2.2.22_2494%20(1).jpg"
                alt="..."
                className="h-atuo w-full md:h-5/6"
              />
            </div>
            <div className="flex items-center h-full w-full md:w-3/4">
              <BookNow />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
