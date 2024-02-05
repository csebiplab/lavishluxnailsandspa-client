import SwipperGalleryComponent from "../__ui/SwipperGalleryComponent";
import SwiperHeroSection from "../__ui/SwipperHeroSection";
import AboutUs from "./AboutUs";
import BenefitsOfGoodNailSalonsSection from "./BenefitsOfGoodNailSalonsSection";
import FaqAccordian from "./FaqAccordian";
import FeaturedSection from "./FeaturedSection";
import GlamourAndRelaxationSection from "./GlamourAndRelaxationSection";
import GridPictureAndTextSection from "./GridPictureAndTextSection";
import HighQualityNailsSection from "./HighQualityNailsSection";
import LocationMap from "./LocationMap";
import NailsSaloonDiaries from "./NailsSaloonDiaries";
import RevitalizeYourNailsSection from "./RevitalizeYourNailsSection";
import UserReviewSection from "./UserReviewSection";
import WhyChooseOurNailSalonsSection from "./WhyChooseOurNailSalonsSection";
import WorkingProcessOfOurLavishLuxNailsSection from "./WorkingProcessOfOurLavishLuxNailsSection";

const HomeMainComponent = () => {
  return (
    <div className="min-h-screen">
      <section className="mt-4 container mx-auto px-5">
        <SwiperHeroSection />
        {/* <BannerCarousel /> */}
      </section>
      <section className="mt-32 container mx-auto px-5">
        <AboutUs />
      </section>
      <section className="mt-32 container mx-auto px-5">
        <FeaturedSection />
      </section>
      <section className="mt-32 container mx-auto px-5">
        <GridPictureAndTextSection />
      </section>
      <section className="mt-32 container mx-auto px-5">
        <GlamourAndRelaxationSection />
      </section>
      <section className="mt-32 container mx-auto px-5">
        <NailsSaloonDiaries />
      </section>
      <section className="mt-32 container mx-auto px-5">
        <HighQualityNailsSection />
      </section>
      <section className="mt-32 container mx-auto px-5">
        <BenefitsOfGoodNailSalonsSection />
      </section>
      <section className="mt-32 container mx-auto px-5">
        <WorkingProcessOfOurLavishLuxNailsSection />
      </section>
      <section className="mt-32 container mx-auto px-5">
        <RevitalizeYourNailsSection />
      </section>
      <section className="mt-32 container mx-auto px-5">
        <FaqAccordian />
      </section>
      <section className="mt-32 container mx-auto px-5">
        <WhyChooseOurNailSalonsSection />
      </section>
      <section className="mt-32 container mx-auto px-5">
        <SwipperGalleryComponent />
      </section>
      <section className="mt-32 container mx-auto px-5">
        <UserReviewSection />
      </section>
      <section className="mt-32 container mx-auto px-5">
        <LocationMap />
      </section>
    </div>
  );
};

export default HomeMainComponent;
