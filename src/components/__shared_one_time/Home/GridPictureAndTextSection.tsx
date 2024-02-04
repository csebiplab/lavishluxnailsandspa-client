import Image from "next/image";
import lavishGridPicture from "@/assets/images/lavish-picture-1.webp";
import OutlineButton from "../__ui/OutlineButton";

const GridPictureAndTextSection = () => {
  return (
    <div className="flex justify-center">
      <div className="mx-auto flex flex-col gap-y-36 items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-60 gap-y-4">
          <div>
            <Image
              src={lavishGridPicture}
              alt="lavish picture"
              width={400}
              height={400}
              className="h-auto md:h-[32rem] w-full"
            />
          </div>
          <div className="textPrimary flex flex-col justify-center items-center gap-y-6 w-full">
            <h2 className="title font-semibold self-start">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-60 gap-y-4">
          <div className="order-2">
            <Image
              src={lavishGridPicture}
              alt="lavish picture"
              width={400}
              height={400}
              className="h-auto md:h-[32rem] w-full"
            />
          </div>
          <div className="order-1 textPrimary flex flex-col justify-center items-center gap-y-6 w-full">
            <h2 className="title font-semibold self-start">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-60 gap-y-4">
          <div className="">
            <Image
              src={lavishGridPicture}
              alt="lavish picture"
              width={400}
              height={400}
              className="h-auto md:h-[32rem] w-full"
            />
          </div>
          <div className="textPrimary flex flex-col justify-center items-center gap-y-6 w-full">
            <h2 className="title font-semibold self-start">
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
      </div>
    </div>
  );
};

export default GridPictureAndTextSection;
