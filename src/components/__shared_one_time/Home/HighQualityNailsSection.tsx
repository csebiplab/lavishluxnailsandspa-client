import Image from "next/image";
import LavishHighQualityNails from "@/assets/images/lavish-high-quality-nails.avif";

let listContents = [
  {
    id: 1,
    listTitle: "Exquisite Nail Artistry:",
    listDetails: `Lavish Lux Nails & Spa in Mississauga boasts a team of highly
    skilled nail technicians dedicated to creating intricate and
    personalized nail art designs. From elegant French tips to
    avant-garde patterns, each masterpiece is meticulously
    crafted, ensuring your nails are a canvas of luxury and style.`,
  },
  {
    id: 2,
    listTitle: "Premium Quality Products:",
    listDetails: `Pamper yourself with the finest nail care products at Lavish
    Lux Nails & Spa. We exclusively use high-quality polishes,
    gels, and acrylics that not only enhance the beauty of your
    nails but also prioritize the health and longevity of your
    natural nails, setting us apart as a salon committed to both
    style and substance.`,
  },
  {
    id: 3,
    listTitle: "Impeccable Sanitation Standards:",
    listDetails: `Your well-being is our top priority. Lavish Lux Nails & Spa
    maintains stringent hygiene practices, surpassing industry
    standards. Our state-of-the-art sterilization equipment and
    rigorous cleanliness protocols ensure a safe and sanitary
    environment, giving you peace of mind during your relaxing
    nail care experience.`,
  },
  {
    id: 4,
    listTitle: "Tailored Spa Experience:",
    listDetails: `Indulge in a personalized spa journey at Lavish Lux Nails &
    Spa. Our spa services go beyond nails, offering soothing
    manicures and pedicures that rejuvenate both your hands and
    feet. Immerse yourself in a serene ambiance, where each moment
    is designed to provide the ultimate relaxation and
    rejuvenation.`,
  },
  {
    id: 5,
    listTitle: "Expert Nail Technicians:",
    listDetails: `Entrust your nails to the expertise of our skilled technicians
    who stay abreast of the latest trends and techniques in the
    nail care industry. From classic styles to cutting-edge
    designs, our team's proficiency ensures that you leave Lavish
    Lux Nails & Spa with nails that are not only on-trend but also
    a testament to unparalleled craftsmanship.`,
  },
  {
    id: 6,
    listTitle: "VIP Membership Benefits:",
    listDetails: `Elevate your nail care experience with our exclusive VIP
    membership program. At Lavish Lux Nails & Spa, we believe in
    rewarding our loyal clients, making each visit a delightful
    experience with added perks.`,
  },
];

const HighQualityNailsSection = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full">
        <div className="mx-auto mb-8">
          <h2 className={`title textPrimary`}>
            <span className="font-semibold block">
              Lavish Lux Nails & Spa -{" "}
            </span>
            High-quality nail salon in Mississauga
          </h2>
          <div className="sm-bb" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 justify-between gap-x-8 gap-y-4">
          <div className="w-full md:col-span-3">
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

              {/* <li className="">
                <span className="font-semibold">Exquisite Nail Artistry: </span>
                <span>
                  Lavish Lux Nails & Spa in Mississauga boasts a team of highly
                  skilled nail technicians dedicated to creating intricate and
                  personalized nail art designs. From elegant French tips to
                  avant-garde patterns, each masterpiece is meticulously
                  crafted, ensuring your nails are a canvas of luxury and style.
                </span>
              </li>
              <li className="">
                <span className="font-semibold">
                  Premium Quality Products:{" "}
                </span>
                <span>
                  Pamper yourself with the finest nail care products at Lavish
                  Lux Nails & Spa. We exclusively use high-quality polishes,
                  gels, and acrylics that not only enhance the beauty of your
                  nails but also prioritize the health and longevity of your
                  natural nails, setting us apart as a salon committed to both
                  style and substance.
                </span>
              </li>
              <li className="">
                <span className="font-semibold">
                  Impeccable Sanitation Standards:{" "}
                </span>
                <span>
                  Your well-being is our top priority. Lavish Lux Nails & Spa
                  maintains stringent hygiene practices, surpassing industry
                  standards. Our state-of-the-art sterilization equipment and
                  rigorous cleanliness protocols ensure a safe and sanitary
                  environment, giving you peace of mind during your relaxing
                  nail care experience.
                </span>
              </li>
              <li className="">
                <span className="font-semibold">Tailored Spa Experience: </span>
                <span>
                  Indulge in a personalized spa journey at Lavish Lux Nails &
                  Spa. Our spa services go beyond nails, offering soothing
                  manicures and pedicures that rejuvenate both your hands and
                  feet. Immerse yourself in a serene ambiance, where each moment
                  is designed to provide the ultimate relaxation and
                  rejuvenation.
                </span>
              </li>
              <li className="">
                <span className="font-semibold">Expert Nail Technicians: </span>
                <span>
                  Entrust your nails to the expertise of our skilled technicians
                  who stay abreast of the latest trends and techniques in the
                  nail care industry. From classic styles to cutting-edge
                  designs, our team's proficiency ensures that you leave Lavish
                  Lux Nails & Spa with nails that are not only on-trend but also
                  a testament to unparalleled craftsmanship.
                </span>
              </li>
              <li className="">
                <span className="font-semibold">VIP Membership Benefits: </span>
                <span>
                  Elevate your nail care experience with our exclusive VIP
                  membership program. At Lavish Lux Nails & Spa, we believe in
                  rewarding our loyal clients, making each visit a delightful
                  experience with added perks.
                </span>
              </li> */}
            </ul>
          </div>
          <div className="w-full col-span-2">
            <Image
              src={LavishHighQualityNails}
              alt="lavish picture"
              width={500}
              height={900}
              className="min-h-screen w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighQualityNailsSection;
