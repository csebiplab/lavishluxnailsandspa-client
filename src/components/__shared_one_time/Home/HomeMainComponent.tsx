import BannerCarousel from "../__ui/BannerCarousel";
import AboutUs from "./AboutUs";
import BookNow from "./BookNow";

const HomeMainComponent = () => {
    return (
        <div className='min-h-screen'>
            <BannerCarousel />
            <div className="mt-16 container mx-auto">
                <BookNow />
            </div>
            <div className="mt-16 container mx-auto">
                <AboutUs />
            </div>
            <div className="mt-16 container mx-auto">
                {/* <AboutUs /> */}
            </div>
        </div>
    );
};

export default HomeMainComponent;