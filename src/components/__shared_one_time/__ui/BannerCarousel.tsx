import { Carousel } from "flowbite-react";

export default function BannerCarousel() {


  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 container mx-auto mt-2">
      <Carousel 
      slideInterval={10000} 
      leftControl=" " 
      rightControl=" " 
      >
        <img
          src="https://www.glosslab.com/hubfs/Glosslab_2.2.22_2494%20(1).jpg"
          alt="..."
          className="h-full"
        />
        <img
          src="https://www.glosslab.com/hs-fs/hubfs/BlackGelxManiHomepage.png?width=2000&name=BlackGelxManiHomepage.png"
          alt="..."
          className="h-full"
        />
      </Carousel>
    </div>
  );
}
