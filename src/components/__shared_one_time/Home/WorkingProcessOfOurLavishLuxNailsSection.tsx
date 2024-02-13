import Image from "next/image";
import LavishWorkingProcess from "@/assets/images/lavish-working-process.jpg";

let listContents = [
  {
    id: 1,
    listTitle: "Luxurious Spa Experience:",
    listDetails: `Lavish Lux Nails & Spa in Mississauga boasts a team of highly
    skilled nail technicians dedicated to creating intricate and
    personalized nail art designs. From elegant French tips to
    avant-garde patterns, each masterpiece is meticulously
    crafted, ensuring your nails are a canvas of luxury and style.`,
  },
  {
    id: 2,
    listTitle: "Tailored Nail Treatments:",
    listDetails: `Pamper yourself with the finest nail care products at Lavish
    Lux Nails & Spa. We exclusively use high-quality polishes,
    gels, and acrylics that not only enhance the beauty of your
    nails but also prioritize the health and longevity of your
    natural nails, setting us apart as a salon committed to both
    style and substance.`,
  },
  {
    id: 3,
    listTitle: "Trendsetting Designs:",
    listDetails: `Your well-being is our top priority. Lavish Lux Nails & Spa
    maintains stringent hygiene practices, surpassing industry
    standards. Our state-of-the-art sterilization equipment and
    rigorous cleanliness protocols ensure a safe and sanitary
    environment, giving you peace of mind during your relaxing
    nail care experience.`,
  },
  {
    id: 4,
    listTitle: "Relaxing Ambiance:",
    listDetails: `Indulge in a personalized spa journey at Lavish Lux Nails &
    Spa. Our spa services go beyond nails, offering soothing
    manicures and pedicures that rejuvenate both your hands and
    feet. Immerse yourself in a serene ambiance, where each moment
    is designed to provide the ultimate relaxation and
    rejuvenation.`,
  },
  {
    id: 5,
    listTitle: "Specialized Nail Care Packages:",
    listDetails: `Entrust your nails to the expertise of our skilled technicians
    who stay abreast of the latest trends and techniques in the
    nail care industry. From classic styles to cutting-edge
    designs, our team's proficiency ensures that you leave Lavish
    Lux Nails & Spa with nails that are not only on-trend but also
    a testament to unparalleled craftsmanship.`,
  },
];

const WorkingProcessOfOurLavishLuxNailsSection = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full">
        <div className="flex flex-col md:flex-row gap-y-3 gap-x-8">
          <div className="mx-auto md:mb-8">
            <h2 className={`title textPrimary font-semibold`}>
              Working Process of our Lavish Lux Nails Mississauga
            </h2>
            <div className="sm-bb" />
          </div>
          <p className="text-base md:mt-8">
            <span className="text-yellow-600 mr-1">*</span>
            In essence, Lavish Lux Nails Mississauga goes beyond the
            conventional nail salon, offering an unparalleled blend of artistic
            excellence, luxury, and personalized care to elevate your nail care
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 justify-between gap-x-8 gap-y-4 mt-4 md:mt-0">
          <div className="order-2 w-full md:col-span-3">
            <ul className="list-inside list-disc grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 text-xl w-full textPrimary">
              {listContents.map((list) => (
                <li key={list.id}>
                  <span className="font-extrabold text-base">
                    {list.listTitle}
                  </span>{" "}
                  <span className="text-base font-medium">
                    {list.listDetails}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 w-full col-span-2">
            <Image
             src={LavishWorkingProcess}
              alt="lavish picture"
              width={500}
              height={900}
              className="min-h-screen w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcessOfOurLavishLuxNailsSection;
