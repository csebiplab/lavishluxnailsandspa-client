import { useState } from "react";

const BenefitsOfGoodNailSalonsSection = () => {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <div className="flex justify-center">
      <div className="w-2/3">
        <h2 className={`text-2xl font-extrabold textPrimary`}>
          Benefits of good nail salons in Mississauga
        </h2>
        <ol className="list-decimal mt-4 flex flex-col gap-y-3 text-xl">
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
          <li>
            <span className="font-semibold text-2xl">
              Customized Nail Care Solutions:
            </span>{" "}
            Leading nail salons understand that every client has unique
            preferences and nail care needs. So we offer personalized
            consultations to tailor services such as nail shaping, color
            selection, and treatments to individual requirements, resulting in a
            more satisfying and personalized salon experience.
          </li>
          <div>
            {showMore && (
              <>
                <li>
                  <span className="font-semibold text-2xl">
                    Relaxing Ambiance and Customer Comfort:
                  </span>{" "}
                  Our nail salon in Mississauga creates a tranquil and
                  comfortable atmosphere for our clients. The ambiance is
                  carefully curated to induce relaxation, making the salon visit
                  not just a beauty treatment but also a rejuvenating experience
                  for the mind and body.
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
            <div onClick={() => setShowMore(!showMore)} className="mt-2">
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
            <div className="mt-2">
              <p className="text-xl font-semibold">
                <span className="text-yellow-600 mr-1">*</span>
                In summary, choosing a good nail salon in Mississauga provides
                not only aesthetic benefits but also a holistic and personalized
                approach to nail care, emphasizing hygiene, quality, and client
                well-being.
              </p>
            </div>
          </div>
        </ol>
      </div>
    </div>
  );
};

export default BenefitsOfGoodNailSalonsSection;
