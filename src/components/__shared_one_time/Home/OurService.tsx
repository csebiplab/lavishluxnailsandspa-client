import Image from "next/image";
import LavishService1 from "@/assets/images/lavish-lux-service1.png";
import LavishService2 from "@/assets/images/lavish-lux-service2.png";
import LavishService3 from "@/assets/images/lavish-lux-service3.png";
import LavishService4 from "@/assets/images/lavish-lux-service4.png";
import LavishService5 from "@/assets/images/lavish-lux-service5.png";
import LavishService6 from "@/assets/images/lavish-lux-service6.png";
import Link from "next/link";

const OurService = () => {
  return (
    <div>
      <h2
        className={`title font-semibold max-w-fit mx-auto flex justify-center textPrimary borderBClr`}
      >
        Our Services
      </h2>
      <div className="mt-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-x-52 md:gap-y-20">
          <div className="w-full flex flex-col items-center">
            <Image
              src={LavishService1}
              alt="Manicure"
              priority={true}
              width={100}
              height={100}
              className="h-auto w-auto"
            />
            <Link href="/" className="text-xl hover:underline">
              Manicure
            </Link>
          </div>
          <div className="w-full flex flex-col items-center">
            <Image
              src={LavishService2}
              alt="Pedicure"
              priority={true}
              width={100}
              height={100}
              className="h-auto w-auto"
            />
            <Link href="/" className="text-xl hover:underline">
              Pedicure
            </Link>
          </div>
          <div className="w-full flex flex-col items-center">
            <Image
              src={LavishService3}
              alt="Waxing"
              priority={true}
              width={100}
              height={100}
              className="h-auto w-auto"
            />
            <Link href="/" className="text-xl hover:underline">
              Waxing
            </Link>
          </div>
          <div className="w-full flex flex-col items-center">
            <Image
              src={LavishService4}
              alt="Artificial Nails"
              priority={true}
              width={100}
              height={100}
              className="h-auto w-auto"
            />
            <Link href="/" className="text-xl hover:underline">
              Artificial Nails
            </Link>
          </div>
          <div className="w-full flex flex-col items-center">
            <Image
              src={LavishService5}
              alt="Design"
              priority={true}
              width={100}
              height={100}
              className="h-auto w-auto"
            />
            <Link href="/" className="text-xl hover:underline">
              Design
            </Link>
          </div>
          <div className="w-full flex flex-col items-center">
            <Image
              src={LavishService6}
              alt="Additional Services and Kid (under 10)"
              priority={true}
              width={100}
              height={100}
              className="h-auto w-auto"
            />
            <Link href="/" className="text-xl text-center hover:underline">
              Additional Services and Kid (under 10)
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
