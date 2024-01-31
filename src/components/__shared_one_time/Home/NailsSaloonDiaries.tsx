import { useState } from "react";

const NailsSaloonDiaries = () => {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <div className="flex justify-center">
      <div className="w-2/3">
        <h2 className={`text-2xl font-extrabold textPrimary`}>
          Nails Salon Diaries: Where Beauty Meets Precision
        </h2>
        <ol className="list-decimal mt-4 flex flex-col gap-y-3 text-xl">
          <li>
            <span className="font-semibold text-2xl">
              Tailored Treatments for Healthy Nails:
            </span>{" "}
            Beyond the aesthetic allure, we prioritize the health of your nails.
            We dedicate our salon to providing personalized treatments that not
            only enhance beauty but also promote nail health. With an array of
            nourishing products and expert care, we ensure your nails are not
            just adorned but nurtured.
          </li>
          <li>
            <span className="font-semibold text-2xl">
              Innovative Nail Technologies:
            </span>{" "}
            Keeping up with the latest trends and technologies, our salon is a
            hub of innovation. From gel manicures that offer longevity to trendy
            nail art techniques, we blend traditional expertise with modern
            advancements, promising a nail experience that's both timeless and
            cutting-edge.
          </li>
          <li>
            <span className="font-semibold text-2xl">
              Interactive Nail Consultations:
            </span>{" "}
            Understanding that each client is unique, we offer interactive
            consultations before every session. Our technicians take the time to
            listen to your preferences, lifestyle, and concerns, ensuring that
            the nail design and treatment recommended align perfectly with your
            individual style and needs.
          </li>
          <div>
            {!showMore && (
              <button
                onClick={() => setShowMore(true)}
                className={`px-4 py-1 rounded-sm bgBtn textSecondary mx-auto`}
              >
                Read More
              </button>
            )}

            {showMore && (
              <>
                <li>
                  <span className="font-semibold text-2xl">
                    A Relaxing Haven for Self-Care:
                  </span>{" "}
                  Step into our salon and leave the hustle and bustle behind.
                  We've created a serene environment where beauty and relaxation
                  intertwine. Our aim is not just to adorn your nails but to
                  provide a holistic self-care experience, allowing you to
                  unwind and rejuvenate.
                </li>
                <li>
                  <span className="font-semibold text-2xl">
                    Celebrating Diversity in Nail Art:
                  </span>{" "}
                  We believe in celebrating the diverse beauty of our clients.
                  Our salon embraces inclusivity by offering a wide range of
                  nail styles that cater to different tastes, cultural
                  influences, and occasions. Whether you're looking for bold
                  statements or subtle elegance, we have the perfect nail art
                  for you.
                </li>
                <li>
                  <span className="font-semibold text-2xl">
                    Precision in Sanitation:
                  </span>{" "}
                  At our salon, precision extends beyond the artistry to the
                  realm of hygiene. We adhere to strict sanitation protocols,
                  ensuring a clean and safe environment for every client. Your
                  well-being is our top priority, and our commitment to
                  cleanliness reflects in every aspect of our services.
                </li>
              </>
            )}
          </div>
        </ol>
      </div>
    </div>
  );
};

export default NailsSaloonDiaries;