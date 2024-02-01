import { Carousel } from "flowbite-react";
import BookNow from "../Home/BookNow";

export default function BannerCarousel() {
  return (
    <div className="h-[28rem] container mx-auto mt-2">
      <Carousel slideInterval={10000} leftControl=" " rightControl=" ">
        <div className="grid grid-cols-1 md:gap-x-12 md:grid-cols-2">
          <div className="col-span-1 h-auto md:min-h-full">
            <img
              src="https://www.glosslab.com/hubfs/Glosslab_2.2.22_2494%20(1).jpg"
              alt="..."
              className="h-atuo md:h-full"
            />
          </div>
          <div className="flex items-center h-full w-3/4">
            <BookNow />
          </div>
        </div>
        <div className="grid grid-cols-1 md:gap-x-12 md:grid-cols-2">
          <div className="col-span-1 h-auto md:min-h-full">
            <img
              src="https://www.glosslab.com/hubfs/Glosslab_2.2.22_2494%20(1).jpg"
              alt="..."
              className="h-atuo md:h-full"
            />
          </div>
          <div className="flex items-center h-full w-3/4">
            <BookNow />
          </div>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="col-span-1 h-auto md:min-h-full">
            <img
              src="https://www.glosslab.com/hs-fs/hubfs/BlackGelxManiHomepage.png?width=2000&name=BlackGelxManiHomepage.png"
              alt="..."
              className="h-auto md:h-full"
            />
          </div>
          <div className="text-black">
            <BookNow />
          </div>
        </div> */}
      </Carousel>
    </div>
  );
}
