import BannerCarousel from "../__ui/BannerCarousel";
import AboutUs from "./AboutUs";
import BookNow from "./BookNow";
import FaqAccordian from "./FaqAccordian";
import FeaturedSection from "./FeaturedSection";
import GlamourAndRelaxationSection from "./GlamourAndRelaxationSection";
import LocationMap from "./LocationMap";

const HomeMainComponent = () => {
  return (
    <div className="min-h-screen">
      <section>
        <BannerCarousel />
      </section>
      <section className="mt-16 container mx-auto">
        <BookNow />
      </section>
      <section className="mt-16 container mx-auto">
        <AboutUs />
      </section>
      <section className="mt-16 container mx-auto">
        <FeaturedSection />
      </section>
      <section className="mt-16 container mx-auto">
        <GlamourAndRelaxationSection />
      </section>
      <section className="mt-16 container mx-auto">
        {/* <FeaturedSection /> */}
      </section>
      <section className="mt-16 container mx-auto">
        {/* <FeaturedSection /> */}
      </section>
      <section className="mt-16 container mx-auto">
        {/* <FeaturedSection /> */}
      </section>
      <section className="mt-16 container mx-auto">
        <FaqAccordian />
      </section>
      <section className="mt-16 container mx-auto">
        <LocationMap />
      </section>
    </div>
  );
};

export default HomeMainComponent;
