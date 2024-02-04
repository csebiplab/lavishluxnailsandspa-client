import Image from "next/image";
import { useState } from "react";
import lavishGridPicture from "@/assets/images/lavish-picture-1.webp";

const HighQualityNailsSection = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full">
        <h2 className={`title textPrimary md:w-2/3`}>
          <span className="font-semibold">Lavish Lux Nails & Spa</span> -
          High-quality nail salon in Mississauga
        </h2>
        <div className="w-1/12 border-b-2 borderClr primaryBgColor mt-3" />
        <div className="grid grid-cols-1 md:grid-cols-3 justify-between mt-10">
          <div className="col-span-2">
            <ul className="list-disc mt-4 grid grid-cols-2 gap-y-5 text-xl w-full textPrimary">
              <li>Exquisite Nail Artistry</li>
              <li>Premium Quality Products</li>
              <li>Impeccable Sanitation Standards</li>
              <li>Tailored Spa Experience</li>
              <li>Expert Nail Technicians</li>
              <li>VIP Membership Benefits</li>
            </ul>
            <button
              className={`px-5 py-2 rounded-sm bgBtn textSecondary mx-auto mt-8 font-semibold`}
            >
              Read More
            </button>
          </div>
          <div className="w-full">
            <Image
              src={lavishGridPicture}
              alt="lavish picture"
              width={500}
              height={300}
              className="h-56 w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighQualityNailsSection;
