import Image from "next/image";
import { useState } from "react";
import DiariesImg from "@/assets/images/diaries.webp";

const BenefitsOfGoodNailSalonsSection = () => {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6 textPrimary">
      <div className="order-2">
        <h2 className={`title textPrimary font-semibold`}>
          Benefits of good nail salons in Mississauga
        </h2>
        <ol className="marker:text-red-700 marker:font-extrabold list-inside list-decimal mt-2 flex flex-col gap-y-2 text-xl">
          <li>
            <span className="font-semibold text-2xl">
              Professional Expertise and Skill:
            </span>{" "}
            Reputable nail salons in Mississauga boast skilled technicians who
            are well-trained in the latest nail care techniques. Our expertise
            ensures that clients receive high-quality manicures and pedicures,
            promoting nail health and overall well-being.
          </li>
          <li>
            <span className="font-semibold text-2xl">
              Hygiene and Sanitation Standards:
            </span>{" "}
            A notable benefit of good nail salons in Mississauga is our
            commitment to maintaining impeccable hygiene standards. These
            establishments adhere to rigorous cleanliness practices, using
            sterilized tools and regularly disinfecting workstations. This
            prioritization of hygiene not only enhances the client experience
            but also reduces the risk of infections.
          </li>

          <div>
            {showMore && (
              <>
                <li>
                  <span className="font-semibold text-2xl">
                    Customized Nail Care Solutions:
                  </span>{" "}
                  Leading nail salons understand that every client has unique
                  preferences and nail care needs. So we offer personalized
                  consultations to tailor services such as nail shaping, color
                  selection, and treatments to individual requirements,
                  resulting in a more satisfying and personalized salon
                  experience.
                </li>
                <li>
                  <span className="font-semibold text-2xl">
                    Educational Resources for Clients:
                  </span>{" "}
                  Lavish Lux Nails & Spa go beyond providing services; we also
                  educate clients on proper nail care practices. This includes
                  tips on maintenance between salon visits, product
                  recommendations, and advice on maintaining healthy nails,
                  empowering clients to care for our nails effectively.
                </li>
                <li>
                  <span className="font-semibold text-2xl">
                    Appointment Flexibility and Convenience:
                  </span>{" "}
                  Recognizing the busy lifestyles of our clients, our nail salon
                  in Mississauga offer flexible appointment schedules. This
                  convenience caters to varying work and personal commitments,
                  ensuring that clients can easily integrate self-care into our
                  hectic routines.
                </li>
              </>
            )}
            <div onClick={() => setShowMore(!showMore)} className="mt-2 inline">
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
        </ol>
      </div>
      <div className="order-1 flex items-center h-full">
        <Image
          src={DiariesImg}
          alt="about-us"
          priority={true}
          className="mx-auto w-full h-96 rounded-md"
        />
      </div>
    </div>
  );
};

export default BenefitsOfGoodNailSalonsSection;
