import { Swiper, SwiperSlide } from "swiper/react";
import HeroBanner from "@/assets/images/lavish-hero-banner.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import BookNow from "../Home/BookNow";
import Image from "next/image";

export default function SwiperHeroSection() {
  return (
    <div className="cursor-noselect">
      <Swiper loop={true} navigation={true} modules={[Navigation]} className="">
        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-x-8 gap-y-4 w-full">
            <div className="flex justify-center md:justify-end">
              <Image
                src={HeroBanner}
                alt="Lavish Hero Banner"
                height={1000}
                width={600}
                className="h-atuo w-full md:h-[32rem]"
              />
            </div>
            <div className="flex items-center h-full w-full">
              <BookNow />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
