import { useState } from "react";

const HighQualityNailsSection = () => {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <div className="flex justify-center">
      <div className="w-2/3">
        <h2 className={`title font-semibold textPrimary`}>
          Lavish Lux Nails & Spa - High-quality nail salon in Mississauga
        </h2>
        <ul className="list-disc mt-4 flex flex-col gap-y-3 text-xl">
          <li>
            <span className="font-semibold text-2xl">
              Exquisite Nail Artistry:
            </span>{" "}
            Lavish Lux Nails & Spa in Mississauga boasts a team of highly
            skilled nail technicians dedicated to creating intricate and
            personalized nail art designs. From elegant French tips to
            avant-garde patterns, each masterpiece is meticulously crafted,
            ensuring your nails are a canvas of luxury and style.
          </li>
          <li>
            <span className="font-semibold text-2xl">
              Premium Quality Products:
            </span>{" "}
            Pamper yourself with the finest nail care products at Lavish Lux
            Nails & Spa. We exclusively use high-quality polishes, gels, and
            acrylics that not only enhance the beauty of your nails but also
            prioritize the health and longevity of your natural nails, setting
            us apart as a salon committed to both style and substance.
          </li>
          <li>
            <span className="font-semibold text-2xl">
              Impeccable Sanitation Standards:
            </span>{" "}
            Your well-being is our top priority. Lavish Lux Nails & Spa
            maintains stringent hygiene practices, surpassing industry
            standards. Our state-of-the-art sterilization equipment and rigorous
            cleanliness protocols ensure a safe and sanitary environment, giving
            you peace of mind during your relaxing nail care experience.
          </li>

          <div>
            {showMore && (
              <>
                <li>
                  <span className="font-semibold text-2xl">
                    Tailored Spa Experience:
                  </span>{" "}
                  Indulge in a personalized spa journey at Lavish Lux Nails &
                  Spa. Our spa services go beyond nails, offering soothing
                  manicures and pedicures that rejuvenate both your hands and
                  feet. Immerse yourself in a serene ambiance, where each moment
                  is designed to provide the ultimate relaxation and
                  rejuvenation.
                </li>
                <li>
                  <span className="font-semibold text-2xl">
                    Expert Nail Technicians:
                  </span>{" "}
                  Entrust your nails to the expertise of our skilled technicians
                  who stay abreast of the latest trends and techniques in the
                  nail care industry. From classic styles to cutting-edge
                  designs, our team's proficiency ensures that you leave Lavish
                  Lux Nails & Spa with nails that are not only on-trend but also
                  a testament to unparalleled craftsmanship.
                </li>
                <li>
                  <span className="font-semibold text-2xl">
                    VIP Membership Benefits:
                  </span>{" "}
                  Elevate your nail care experience with our exclusive VIP
                  membership program. At Lavish Lux Nails & Spa, we believe in
                  rewarding our loyal clients, making each visit a delightful
                  experience with added perks.
                </li>
              </>
            )}
            <div 
            onClick={() => setShowMore(!showMore)}
            className="mt-2"
            >
              {!showMore ? (
                <button
                  className={`px-4 py-1 rounded-sm bgBtn textSecondary mx-auto`}
                >
                  Read More
                </button>
              ) : (
                <button
                  className={`px-4 py-1 rounded-sm bgBtn textSecondary mx-auto`}
                >
                  Read Less
                </button>
              )}
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default HighQualityNailsSection;
