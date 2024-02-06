import Image from "next/image";

const FeaturedSection = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 justify-center items-center gap-3 md:gap-x-10">
        <div className="flex flex-col justify-center items-center gap-4">
          <div>
            <Image
              src="/icons/efficient_1.svg"
              alt="efficient image"
              width={64}
              height={64}
            />
          </div>
          <div className="text-center">
            <h3 className="mb-2 font-bold text-2xl textPrimary">Efficient</h3>
            <p className="text-18px text-justify">
              With same-time mani + pedis, automatic payments, and mani
              meetings, you can polish off more of your to-dos, more often, with
              more convenience.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div>
            <Image
              src="/icons/hygenic_1.svg"
              alt="efficient image"
              width={64}
              height={64}
            />
          </div>
          <div className="text-center">
            <h3 className="mb-2 font-bold text-2xl textPrimary">Hygenic</h3>
            <p className="text-18px text-justify">
              With same-time mani + pedis, automatic payments, and mani
              meetings, you can polish off more of your to-dos, more often, with
              more convenience.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div>
            <Image
              src="/icons/innovative_1.svg"
              alt="efficient image"
              width={64}
              height={64}
            />
          </div>
          <div className="text-center">
            <h3 className="mb-2 font-bold text-2xl textPrimary">
              Future-Focused
            </h3>
            <p className="text-18px text-justify">
              With same-time mani + pedis, automatic payments, and mani
              meetings, you can polish off more of your to-dos, more often, with
              more convenience.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div>
            <Image
              src="/icons/fair_1.svg"
              alt="efficient image"
              width={64}
              height={64}
            />
          </div>
          <div className="text-center">
            <h3 className="mb-2 font-bold text-2xl textPrimary">Fair</h3>
            <p className="text-18px text-justify">
              With same-time mani + pedis, automatic payments, and mani
              meetings, you can polish off more of your to-dos, more often, with
              more convenience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
