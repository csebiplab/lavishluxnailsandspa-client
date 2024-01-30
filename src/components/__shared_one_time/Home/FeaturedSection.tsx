import Image from "next/image";

const FeaturedSection = () => {
  return (
    <div>
      <div className="grid grid-cols-1 justify-center items-center md:grid-cols-4 gap-4">
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
            <p className="text-center">
              With same-time mani + pedis, automatic payments, and mani
              meetings, you can polish off more of your to-dos, more often, with
              more convenience.
            </p>
          </div>
        </div>
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
            <p className="text-center">
              With same-time mani + pedis, automatic payments, and mani
              meetings, you can polish off more of your to-dos, more often, with
              more convenience.
            </p>
          </div>
        </div>
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
            <p className="text-center">
              With same-time mani + pedis, automatic payments, and mani
              meetings, you can polish off more of your to-dos, more often, with
              more convenience.
            </p>
          </div>
        </div>
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
            <p className="text-center">
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
