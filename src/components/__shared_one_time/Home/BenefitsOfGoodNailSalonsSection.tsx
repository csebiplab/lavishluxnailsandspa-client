import Image from "next/image";
import { useEffect, useState } from "react";
import LavishBenefitOfGoodNails from "@/assets/images/lavish-benefits-good-nails.avif";

let listContents = [
  {
    id: 1,
    listTitle: " Professional Expertise and Skill:",
    listDetails: `Reputable nail salons in Mississauga boast skilled technicians who
    are well-trained in the latest nail care techniques. Our expertise
    ensures that clients receive high-quality manicures and pedicures,
    promoting nail health and overall well-being.`,
  },
  {
    id: 2,
    listTitle: "Hygiene and Sanitation Standards:",
    listDetails: `A notable benefit of good nail salons in Mississauga is our
    commitment to maintaining impeccable hygiene standards. These
    establishments adhere to rigorous cleanliness practices, using
    sterilized tools and regularly disinfecting workstations. This
    prioritization of hygiene not only enhances the client experience
    but also reduces the risk of infections.`,
  },
  {
    id: 3,
    listTitle: "Customized Nail Care Solutions:",
    listDetails: `Leading nail salons understand that every client has unique
    preferences and nail care needs. So we offer personalized
    consultations to tailor services such as nail shaping, color
    selection, and treatments to individual requirements,
    resulting in a more satisfying and personalized salon
    experience.`,
  },
  {
    id: 4,
    listTitle: "Educational Resources for Clients:",
    listDetails: `Lavish Lux Nails & Spa go beyond providing services; we also
    educate clients on proper nail care practices. This includes
    tips on maintenance between salon visits, product
    recommendations, and advice on maintaining healthy nails,
    empowering clients to care for our nails effectively.`,
  },
  {
    id: 5,
    listTitle: "Educational Resources for Clients:",
    listDetails: `Recognizing the busy lifestyles of our clients, our nail
    salon in Mississauga offer flexible appointment schedules.
    This convenience caters to varying work and personal
    commitments, ensuring that clients can easily integrate
    self-care into our hectic routines.`,
  },
];

const BenefitsOfGoodNailSalonsSection = () => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [showList, setShowList] = useState(listContents.slice(0, 2));

  useEffect(() => {
    if (showMore) {
      setShowList(listContents);
    } else {
      setShowList(listContents.slice(0, 2));
    }
  }, [showMore]);

  return (
    <div>
      <div className="mx-auto mb-8">
        <h2 className={`title textPrimary font-semibold`}>
          Benefits of good nail salons in Mississauga
        </h2>
        <div className="sm-bb" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6 textPrimary">
        <div className="order-2">
          <ol className="list-decimal list-inside flex flex-col gap-y-2">
            {showList.map((list) => (
              <li key={list.id}>
                <span className="font-extrabold text-base">
                  {list.listTitle}
                </span>{" "}
                <span className="text-base font-medium">
                  {list.listDetails}
                </span>
              </li>
            ))}

            <div onClick={() => setShowMore(!showMore)} className="mt-2 inline">
              {!showMore ? (
                <button
                  className={`px-4 py-1 rounded-sm bgBtn font-medium text-base textSecondary mx-auto`}
                >
                  Read More
                </button>
              ) : (
                <button
                  className={`px-4 py-1 rounded-sm bgBtn font-medium text-base textSecondary mx-auto`}
                >
                  Read Less
                </button>
              )}
            </div>
          </ol>
        </div>
        <div className="order-1 flex items-center h-full">
          <Image
            src={LavishBenefitOfGoodNails}
            alt="about-us"
            priority={true}
            width={400}
            height={300}
            className="mx-auto w-full h-96 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default BenefitsOfGoodNailSalonsSection;
