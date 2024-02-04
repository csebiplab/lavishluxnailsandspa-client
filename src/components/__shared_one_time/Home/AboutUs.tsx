import AboutUsImg from "@/assets/images/lavish_about_us.jpg";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="">
      <h2
        className={`title font-semibold max-w-fit mx-auto flex justify-center textPrimary borderBClr`}
      >
        About Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-40 gap-y-6 mt-4">
        <div className="w-full">
          <Image
            src={AboutUsImg}
            alt="about-us"
            priority={true}
            className="mx-auto w-full h-auto rounded-md"
          />
        </div>
        <div className="w-full px-2">
          <article className="drop-cap w-full text-justify leading-7">
            Lavish Lux Nails & Spa stands as the epitome of indulgence and
            excellence in the heart of Mississauga, earning its reputation as
            the best nail salon in the area. This luxurious haven redefines the
            nail care experience, offering a perfect blend of opulence and
            skill. From meticulously executed manicures to awe-inspiring nail
            art, every visit to Lavish Lux is an escape into a realm of beauty
            and relaxation. The talented team of nail technicians is
            committed...
          </article>
          <button className={`mt-12 bgBtn textSecondary px-4 py-2 rounded-md`}>
            Know More...
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
