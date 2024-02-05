import Image from "next/image";
import lavishGridPicture from "@/assets/images/lavish-picture-1.webp";

const WorkingProcessOfOurLavishLuxNailsSection = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full">
        <h2 className={`title textPrimary md:w-2/3 font-semibold`}>
          Working Process of our Lavish Lux Nails Mississauga
        </h2>
        <div className="w-1/12 border-b-2 borderClr primaryBgColor mt-3" />
        <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-y-4 mt-10">
          <div className="col-span-2">
            <ul className="marker:text-red-700 list-outside list-disc mt-4 grid grid-cols-2 gap-y-5 text-xl w-full textPrimary">
              <li>Luxurious Spa Experience </li>
              <li>Tailored Nail Treatments </li>
              <li>Trendsetting Designs </li>
              <li>Relaxing Ambiance </li>
              <li>Specialized Nail Care Packages</li>
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
        <div className="mt-4">
          <p className="text-xl font-semibold">
            <span className="text-yellow-600 mr-1">*</span>
            In essence, Lavish Lux Nails Mississauga goes beyond the
            conventional nail salon, offering an unparalleled blend of artistic
            excellence, luxury, and personalized care to elevate your nail care
            experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcessOfOurLavishLuxNailsSection;
