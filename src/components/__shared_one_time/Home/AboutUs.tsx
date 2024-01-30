import styles from "@/styles/utilities.module.scss";
import AboutUsImg from "@/assets/images/lavish_about_us.jpg";
import Image from "next/image";

const { bgBtn, textSecondary, textPrimary, borderBClr } = styles;

const AboutUs = () => {
  return (
    <div className="">
      <h2
        className={`text-2xl font-extrabold max-w-fit mx-auto flex justify-center ${textPrimary} ${borderBClr}`}
      >
        About Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 mt-4">
        <div className="w-full">
          <Image
            src={AboutUsImg}
            alt="about-us"
            priority={true}
            // style={{
            //   width: "auto",
            //   height: "auto",
            // }}
            className="mx-auto w-full md:w-4/5 h-auto rounded-md"
          />
        </div>
        <div className="w-full px-2">
          {/* <p className="text-xl text-justify">
            <span className="text-6xl">L</span> avish Lux Nails & Spa stands
            as the epitome of indulgence and excellence in the heart of
            Mississauga, earning its reputation as the best nail salon in the
            area. This luxurious haven redefines the nail care experience,
            offering a perfect blend of opulence and skill. From meticulously
            executed manicures to awe-inspiring nail art, every visit to Lavish
            Lux is an escape into a realm of beauty and relaxation. The talented
            team of nail technicians is committed...
          </p> */}
          <article className="drop-cap article text-justify leading-7">
            Lavish Lux Nails & Spa stands as the epitome of indulgence and
            excellence in the heart of Mississauga, earning its reputation as
            the best nail salon in the area. This luxurious haven redefines the
            nail care experience, offering a perfect blend of opulence and
            skill. From meticulously executed manicures to awe-inspiring nail
            art, every visit to Lavish Lux is an escape into a realm of beauty
            and relaxation. The talented team of nail technicians is
            committed...
          </article>
          <button
            className={`mt-12 ${bgBtn} ${textSecondary} px-4 py-2 rounded-md`}
          >
            Know More...
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
