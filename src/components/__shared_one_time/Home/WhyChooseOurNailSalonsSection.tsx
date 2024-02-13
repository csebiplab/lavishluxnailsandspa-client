import Image from "next/image";
import WhyLavish from "@/assets/images/why-nail-spa.jpg";

const WhyChooseOurNailSalonsSection = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 h-min">
        <div>
          <div className="mx-auto mb-8">
            <h2 className={`title textPrimary font-semibold`}>
              Why Choose Our Nail Salons in Mississauga?
            </h2>
            <div className="sm-bb" />
          </div>

          <div className="textPrimary leading-8">
            <p>
              Indulge in the epitome of nail care excellence at our Nail Salons
              in Mississauga. Our commitment to providing an unparalleled
              experience sets us apart. Immerse yourself in a world where
              precision meets creativity, and pampering is an art form. Our
              skilled technicians bring a wealth of expertise to every manicure
              and pedicure, ensuring meticulous attention to detail and the use
              of premium products. Beyond the impeccable service, our salon
              boasts a serene ambiance, creating a haven for relaxation and
              self-care. Elevate your nail care routine with us, where luxury
              meets expertise, making every visit an exceptional and
              rejuvenating experience. Choose our Nail Salons in Mississauga for
              a touch of glamour and a commitment to the highest standards in
              nail artistry and care.
            </p>
          </div>
        </div>
        <div className="w-full">
          <Image
            src={WhyLavish}
            alt="lavish picture"
            width={400}
            height={500}
            className="h-full md:h-[34rem] w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseOurNailSalonsSection;
