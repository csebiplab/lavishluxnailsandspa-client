import { useState } from "react";

const WorkingProcessOfOurLavishLuxNailsSection = () => {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <div className="flex justify-center">
      <div className="w-2/3">
        <h2 className={`text-2xl font-extrabold textPrimary`}>
          Revitalize Your Nails: Experience the Magic of Our Nail Spa Haven
        </h2>
        <ul className="list-disc mt-4 flex flex-col gap-y-3 text-xl">
          <li>
            <span className="font-semibold text-2xl">
              Indulge in Tranquil Atmosphere:
            </span>{" "}
            Step into our nail spa haven and escape the hustle and bustle of
            daily life. Immerse yourself in a tranquil atmosphere where soothing
            music and aromatherapy create a haven for relaxation, allowing you
            to unwind while we work our magic on your nails.
          </li>
          <li>
            <span className="font-semibold text-2xl">
              Top-notch Hygiene Standards:
            </span>{" "}
            Your well-being is our priority. We uphold the highest standards of
            hygiene, using sterilized tools and implementing rigorous
            cleanliness protocols. Rest assured that your nail spa experience
            with us not only brings beauty but also ensures a safe and hygienic
            environment.
          </li>
          <li>
            <span className="font-semibold text-2xl">
              Exclusive Nail Artistry:
            </span>{" "}
            Elevate your nail game with our exclusive nail artistry. Our skilled
            nail artists stay ahead of trends, offering a diverse range of
            designs from intricate hand-painted masterpieces to chic minimalist
            styles. Imbue your nails with creativity, making them a unique
            expression of your personality.
          </li>

          <div>
            {showMore && (
              <>
                <li>
                  <span className="font-semibold text-2xl">
                    Revitalizing Nail Treatments:
                  </span>{" "}
                  Experience the magic of revitalizing nail treatments designed
                  to nourish and strengthen your nails. From hydrating paraffin
                  dips to nutrient-rich treatments, we go beyond aesthetics to
                  promote the health of your nails, leaving them looking and
                  feeling rejuvenated.
                </li>
                <li>
                  <span className="font-semibold text-2xl">
                    Luxurious Pampering Packages:
                  </span>{" "}
                  Treat yourself to a luxurious pampering session with our
                  thoughtfully curated packages. Indulge in a combination of
                  nail services, massages, and skincare treatments, ensuring a
                  comprehensive spa haven experience that leaves you feeling
                  refreshed and renewed.
                </li>
                <li>
                  <span className="font-semibold text-2xl">
                    Educational Nail Workshops:
                  </span>{" "}
                  We believe in empowering our clients with knowledge.
                  Participate in our educational nail workshops where you can
                  learn tips and tricks for at-home nail care, ensuring the
                  longevity of your manicure and pedicure results beyond the spa
                  visit.
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
                In our nail spa haven, we don't just offer nail services; we
                provide a holistic experience that combines relaxation,
                creativity, and wellness for a truly magical transformation of
                your nails and spirit.
              </p>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default WorkingProcessOfOurLavishLuxNailsSection;
