import BannerCarousel from "../__ui/BannerCarousel";
import BookNow from "./BookNow";

const HomeMainComponent = () => {
    return (
        <div className='min-h-screen'>
            <BannerCarousel />
            <div className="my-16 container mx-auto">
                <BookNow />
            </div>
        </div>
    );
};

export default HomeMainComponent;