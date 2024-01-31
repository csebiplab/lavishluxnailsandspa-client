import BannerCarousel from "../__ui/BannerCarousel";
import AboutUs from "./AboutUs";
import BenefitsOfGoodNailSalonsSection from "./BenefitsOfGoodNailSalonsSection";
import BookNow from "./BookNow";
import FaqAccordian from "./FaqAccordian";
import FeaturedSection from "./FeaturedSection";
import GlamourAndRelaxationSection from "./GlamourAndRelaxationSection";
import HighQualityNailsSection from "./HighQualityNailsSection";
import LocationMap from "./LocationMap";
import NailsSaloonDiaries from "./NailsSaloonDiaries";
import RevitalizeYourNailsSection from "./RevitalizeYourNailsSection";
import WhyChooseOurNailSalonsSection from "./WhyChooseOurNailSalonsSection";
import WorkingProcessOfOurLavishLuxNailsSection from "./WorkingProcessOfOurLavishLuxNailsSection";

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
        <NailsSaloonDiaries />
      </section>
      <section className="mt-16 container mx-auto">
        <HighQualityNailsSection />
      </section>
      <section className="mt-16 container mx-auto">
        <BenefitsOfGoodNailSalonsSection />
      </section>
      <section className="mt-16 container mx-auto">
        <WorkingProcessOfOurLavishLuxNailsSection />
      </section>
      {/* <section className="mt-16 container mx-auto">
        <RevitalizeYourNailsSection />
      </section> */}
      <section className="mt-16 container mx-auto">
        <FaqAccordian />
      </section>
      <section className="mt-16 container mx-auto">
        <WhyChooseOurNailSalonsSection />
      </section>
      <section className="mt-16 container mx-auto">
        <LocationMap />
      </section>
    </div>
  );
};

export default HomeMainComponent;
