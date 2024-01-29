import { Carousel } from "flowbite-react";

export default function BannerCarousel() {
  return (
    <div className="h-[28rem] md:min-h-screen container mx-auto mt-2">
      <Carousel slideInterval={10000} leftControl=" " rightControl=" ">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="col-span-1 h-auto md:min-h-full">
            <img
              src="https://www.glosslab.com/hubfs/Glosslab_2.2.22_2494%20(1).jpg"
              alt="..."
              className="h-atuo md:h-full"
            />
          </div>
          <div className="text-black">
            text side Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Magni, aut. Nisi, odit totam? Nemo, non. Quis perferendis aperiam
            harum eligendi amet dolorum cum eaque, earum maiores mollitia porro
            praesentium iusto?
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="col-span-1 h-auto md:min-h-full">
            <img
              src="https://www.glosslab.com/hs-fs/hubfs/BlackGelxManiHomepage.png?width=2000&name=BlackGelxManiHomepage.png"
              alt="..."
              className="h-auto md:h-full"
            />
          </div>
          <div className="text-black">
            text side Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Architecto reprehenderit eum possimus eligendi at dolores rem
            dolore, excepturi, quas illum placeat, itaque eaque consequuntur aut
            earum. Accusamus aperiam tenetur expedita!
          </div>
        </div>
      </Carousel>
    </div>
  );
}
