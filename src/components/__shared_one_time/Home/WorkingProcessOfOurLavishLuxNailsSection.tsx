import { useState } from "react";

const WorkingProcessOfOurLavishLuxNailsSection = () => {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <div className="flex justify-center">
      <div className="w-2/3">
        <h2 className={`title font-semibold textPrimary`}>
          Working Process of our Lavish Lux Nails Mississauga
        </h2>
        <ul className="list-disc mt-4 flex flex-col gap-y-3 text-xl">
          <li>
            <span className="font-semibold text-2xl">
              Luxurious Spa Experience:
            </span>{" "}
            Immerse yourself in the epitome of relaxation at Lavish Lux Nails &
            Spa. Our spa services extend beyond traditional nail care, offering
            a luxurious experience that pampers and rejuvenates. Indulge in
            soothing treatments, expertly executed by our trained professionals,
            leaving you not only with stunning nails but also a sense of
            serenity and well-being.
          </li>
          <li>
            <span className="font-semibold text-2xl">
              Tailored Nail Treatments:
            </span>{" "}
            Recognizing that each client is unique, our Lavish Lux team takes a
            personalized approach to nail care. Whether you desire a classic
            manicure, a spa pedicure, or cutting-edge nail enhancements, we
            tailor our treatments to meet your individual preferences and style,
            ensuring that every visit is a bespoke pampering session.
          </li>
          <li>
            <span className="font-semibold text-2xl">
              Trendsetting Designs:
            </span>{" "}
            Stay ahead of the fashion curve with Lavish Lux Nails' trendsetting
            designs. Our team stays abreast of the latest nail trends and
            techniques, ensuring that your nails not only reflect your personal
            style but also showcase the hottest looks in the ever-evolving world
            of nail fashion.
          </li>

          <div>
            {showMore && (
              <>
                <li>
                  <span className="font-semibold text-2xl">
                    Relaxing Ambiance:
                  </span>{" "}
                  Step into an oasis of tranquility as Lavish Lux Nails provides
                  a serene and inviting ambiance. From soft lighting to soothing
                  music, every element is carefully curated to create a relaxing
                  atmosphere.
                </li>
                <li>
                  <span className="font-semibold text-2xl">
                    Specialized Nail Care Packages:
                  </span>{" "}
                  Elevate your self-care routine with our specialized nail care
                  packages. From bridal packages to seasonal promotions, Lavish
                  Lux Nails offers tailor-made experiences that cater to
                  specific occasions and preferences. Treat yourself or a loved
                  one to a comprehensive pampering session that goes beyond a
                  simple manicure.
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
                In essence, Lavish Lux Nails Mississauga goes beyond the
                conventional nail salon, offering an unparalleled blend of
                artistic excellence, luxury, and personalized care to elevate
                your nail care experience.
              </p>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default WorkingProcessOfOurLavishLuxNailsSection;
