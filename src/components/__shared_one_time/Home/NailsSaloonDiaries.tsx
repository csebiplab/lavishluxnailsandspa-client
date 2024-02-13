import Image from "next/image";
import { useEffect, useState } from "react";
import LavishDiaries from "@/assets/images/lavish-nails-saloon-diaries.jpg";

let listContents = [
  {
    id: 1,
    listTitle: "Tailored Treatments for Healthy Nails:",
    listDetails: `Beyond the aesthetic allure, we prioritize the health of your
    nails. We dedicate our salon to providing personalized treatments
    that not only enhance beauty but also promote nail health. With an
    array of nourishing products and expert care, we ensure your nails
    are not just adorned but nurtured.`,
  },
  {
    id: 2,
    listTitle: "Innovative Nail Technologies:",
    listDetails: `Keeping up with the latest trends and technologies, our salon is a
    hub of innovation. From gel manicures that offer longevity to
    trendy nail art techniques, we blend traditional expertise with
    modern advancements, promising a nail experience that's both
    timeless and cutting-edge.`,
  },
  {
    id: 3,
    listTitle: "Interactive Nail Consultations:",
    listDetails: `Understanding that each client is unique, we offer interactive
    consultations before every session. Our technicians take the
    time to listen to your preferences, lifestyle, and concerns,
    ensuring that the nail design and treatment recommended align
    perfectly with your individual style and needs.`,
  },
  {
    id: 4,
    listTitle: "A Relaxing Haven for Self-Care:",
    listDetails: `Step into our salon and leave the hustle and bustle behind.
    We've created a serene environment where beauty and relaxation
    intertwine. Our aim is not just to adorn your nails but to
    provide a holistic self-care experience, allowing you to
    unwind and rejuvenate.`,
  },
  {
    id: 5,
    listTitle: "Celebrating Diversity in Nail Art:",
    listDetails: `We believe in celebrating the diverse beauty of our clients.
    Our salon embraces inclusivity by offering a wide range of
    nail styles that cater to different tastes, cultural
    influences, and occasions. Whether you're looking for bold
    statements or subtle elegance, we have the perfect nail art
    for you.`,
  },
  {
    id: 6,
    listTitle: "Precision in Sanitation:",
    listDetails: `At our salon, precision extends beyond the artistry to the
    realm of hygiene. We adhere to strict sanitation protocols,
    ensuring a clean and safe environment for every client. Your
    well-being is our top priority, and our commitment to
    cleanliness reflects in every aspect of our services.`,
  },
];

const NailsSaloonDiaries = () => {
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
        <h2 className={`title textPrimary`}>
          <span className="font-semibold">Nails Salon Diaries:</span> Where
          Beauty Meets Precision
        </h2>
        <div className="sm-bb" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6 textPrimary">
        <div className="">
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
        <div className="flex items-center h-full">
          <Image
            src={LavishDiaries}
            alt="about-us"
            priority={true}
            width={400}
            height={500}
            className="mx-auto w-full h-96 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default NailsSaloonDiaries;
