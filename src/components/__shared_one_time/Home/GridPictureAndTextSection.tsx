import Image from "next/image";
import lavishGridPicture from "@/assets/images/lavish-picture-1.webp";
import OutlineButton from "../__ui/OutlineButton";

const GridPictureAndTextSection = () => {
  return (
    <div className="flex justify-center">
      <div className="mx-auto flex flex-col gap-y-36 items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-4 px-8 md:px-20">
          <div>
            <Image
              src={lavishGridPicture}
              alt="lavish picture"
              width={400}
              height={400}
              className="h-auto md:h-[32rem] w-full"
            />
          </div>
          <div className="textPrimary flex flex-col justify-center items-center gap-y-6 w-full md:w-5/6">
            <h2 className="title font-semibold">
              Is the best nail salon costly?
            </h2>
            <p className="text-xl leading-8">
              The notion of the "best" nail salon being costly is subjective and
              varies based on individual preferences and priorities.
            </p>
            <div className="self-start">
              <OutlineButton />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-4 px-8 md:px-20">
          <div className="order-2">
            <Image
              src={lavishGridPicture}
              alt="lavish picture"
              width={400}
              height={400}
              className="h-auto md:h-[32rem] w-full"
            />
          </div>
          <div className="order-1 textPrimary flex flex-col justify-center items-center gap-y-6 w-full md:w-5/6">
            <h2 className="title font-semibold">
              Designed your nails with the best spa in Mississauga
            </h2>
            <p className="text-xl leading-8">
              Indulge in the ultimate pampering experience at Lavish Lux Nails &
              Spa, the best spa in Mississauga, where nail design becomes an art
              form.
            </p>
            <div className="self-start">
              <OutlineButton />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-4 px-8 md:px-20">
          <div>
            <Image
              src={lavishGridPicture}
              alt="lavish picture"
              width={400}
              height={400}
              className="h-auto md:h-[32rem] w-full"
            />
          </div>
          <div className="textPrimary flex flex-col justify-center items-center gap-y-6 w-full md:w-5/6">
            <h2 className="title font-semibold">
              Nail Artistry and Beyond: Why Nail Salons Deserve Your Attention?
            </h2>
            <p className="text-xl leading-8">
              Nail artistry has evolved into a captivating form of
              self-expression, and nail salons stand as the vibrant canvases
              where creativity flourishes.
            </p>
            <div className="self-start">
              <OutlineButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridPictureAndTextSection;
