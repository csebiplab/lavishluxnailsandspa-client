import BannerCarousel from "../__ui/BannerCarousel";
import AboutUs from "./AboutUs";
import BookNow from "./BookNow";
import FeaturedSection from "./FeaturedSection";

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
        {/* <FeaturedSection /> */}
      </section>
    </div>
  );
};

export default HomeMainComponent;
