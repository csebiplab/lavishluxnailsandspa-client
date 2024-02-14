import SwipperGalleryComponent from "../__ui/SwipperGalleryComponent";
import SwiperHeroSection from "../__ui/SwipperHeroSection";
import AboutUs from "./AboutUs";
import BenefitsOfGoodNailSalonsSection from "./BenefitsOfGoodNailSalonsSection";
import ContactSection from "./ContactSection";
import FaqAccordian from "./FaqAccordian";
import FeaturedSection from "./FeaturedSection";
import GlamourAndRelaxationSection from "./GlamourAndRelaxationSection";
import GridPictureAndTextSection from "./GridPictureAndTextSection";
import HighQualityNailsSection from "./HighQualityNailsSection";
import LocationMap from "./LocationMap";
import NailsSaloonDiaries from "./NailsSaloonDiaries";
import OurService from "./OurService";
import RevitalizeYourNailsSection from "./RevitalizeYourNailsSection";
import UserReviewSection from "./UserReviewSection";
import WhyChooseOurNailSalonsSection from "./WhyChooseOurNailSalonsSection";
import WorkingProcessOfOurLavishLuxNailsSection from "./WorkingProcessOfOurLavishLuxNailsSection";

const HomeMainComponent = () => {
  return (
    <div className="min-h-screen">
      <section className="mt-4 container mx-auto px-5 md:px-[4.33rem]">
        <SwiperHeroSection />
      </section>
      <section className="my-12 container mx-auto px-5 md:px-[4.33rem]">
        <AboutUs />
      </section>
      <section className="my-12 container mx-auto px-5 md:px-[4.33rem]">
        <FeaturedSection />
      </section>
      <section className="my-12 container mx-auto px-5 md:px-[4.33rem]">
        <OurService />
      </section>
      <section className="my-12 container mx-auto px-5 md:px-[4.33rem]">
        <GridPictureAndTextSection />
      </section>
      <section className="my-12 container mx-auto px-5 md:px-[4.33rem]">
        <GlamourAndRelaxationSection />
      </section>
      <section className="my-12 container mx-auto px-5 md:px-[4.33rem]">
        <NailsSaloonDiaries />
      </section>
      <section className="my-12 container mx-auto px-5 md:px-[4.33rem]">
        <HighQualityNailsSection />
      </section>
      <section className="my-12 container mx-auto px-5 md:px-[4.33rem]">
        <BenefitsOfGoodNailSalonsSection />
      </section>
      <section className="my-12 container mx-auto px-5 md:px-[4.33rem]">
        <WorkingProcessOfOurLavishLuxNailsSection />
      </section>
      <section className="my-12 container mx-auto px-5 md:px-[4.33rem]">
        <RevitalizeYourNailsSection />
      </section>
      <section className="my-12 container mx-auto px-5 md:px-[4.33rem]">
        <FaqAccordian />
      </section>
      <section className="my-12 container mx-auto px-5 md:px-[4.33rem]">
        <WhyChooseOurNailSalonsSection />
      </section>
      <section className="my-12 mx-auto container-custom">
        <SwipperGalleryComponent />
      </section>
      <section className="my-12 mx-auto container-custom">
        <UserReviewSection />
      </section>
      <section className="my-12 container mx-auto px-5 md:px-[4.33rem]">
        <LocationMap />
      </section>
      <section className="my-12 container mx-auto px-5 md:px-[4.33rem]">
        <ContactSection />
      </section>
    </div>
  );
};

export default HomeMainComponent;
