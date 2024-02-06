import Image from "next/image";
import lavishGridPicture from "@/assets/images/lavish-picture-1.webp";

const RevitalizeYourNailsSection = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full">
        <h2 className={`title textPrimary md:w-2/3`}>
          <span className="font-semibold">Revitalize Your Nails: </span>
          Experience the Magic of Our Nail Spa Haven
        </h2>
        <div className="w-1/12 border-b-2 borderClr primaryBgColor mt-3" />
        <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-x-10 gap-y-4 mt-10">
          <div className="col-span-2 order-2">
            <div className="">
              <ul className="marker:text-red-700 list-inside list-disc mt-4 grid grid-cols-2 gap-y-5 gap-x-8 md:gap-x-10 text-xl w-full textPrimary">
                <li>Indulge in Tranquil Atmosphere</li>
                <li>Top-notch Hygiene Standards</li>
                <li>Exclusive Nail Artistry</li>
                <li>Revitalizing Nail Treatments</li>
                <li>Luxurious Pampering Packages</li>
                <li>Educational Nail Workshops</li>
              </ul>
            </div>
            <button
              className={`px-5 py-2 rounded-sm bgBtn textSecondary mx-auto mt-8 font-semibold`}
            >
              Read More
            </button>
          </div>
          <div className="w-full order-1">
            <Image
              src={lavishGridPicture}
              alt="lavish picture"
              width={500}
              height={300}
              className="h-56 w-full"
            />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-xl font-semibold">
            <span className="text-yellow-600 mr-1">*</span>
            In our nail spa haven, we don't just offer nail services; we provide
            a holistic experience that combines relaxation, creativity, and
            wellness for a truly magical transformation of your nails and
            spirit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RevitalizeYourNailsSection;
