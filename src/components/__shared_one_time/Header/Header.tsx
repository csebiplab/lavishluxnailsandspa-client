import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import Image from "next/image";
import brandImg from "@/assets/images/lavish-lux-brand-logo.png";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@/styles/utilities.module.scss";
import AnimatedBorderNav from "../__ui/AnimatedBorderNav";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.secondaryBgColor} ${
        scrollY > 30 && "sticky top-0"
      } shadow-md z-50`}
    >
      <nav className="py-4 relative mx-auto container">
        <div className="flex justify-between items-center px-5">
          <div className="">
            <Link href={"/"}>
              <Image
                src={brandImg}
                alt="Lavish Lux Brand Image"
                width={130}
                height={24.5}
                priority={true}
                // style={{
                //   width: "auto",
                //   height: "auto",
                // }}
                className="h-auto w-44"
              />
            </Link>
          </div>
          {/* For Desktop View */}
          <AnimatedBorderNav />
          {/* <div className="hidden md:block">
            <ul className={`navMenu flex justify-center items-center gap-x-12`}>
              <li className="text-center text-2xl">
                <Link href="/">About</Link>
              </li>
              <li className="text-center text-2xl">
                <Link href="/">Services</Link>
              </li>
              <li className="text-center text-2xl">
                <Link href="/">Booking</Link>
              </li>
              <li className="text-center text-2xl">
                <Link href="/">Conatact</Link>
              </li>
            </ul>
          </div> */}

          <div className="cursor-pointer block md:hidden">
            <div className="flex items-center gap-x-6">
              <button
                className={`px-4 py-2 rounded-md text-sm bgBtn textSecondary transition duration-300 ease-in-out`}
              >
                Book Now
              </button>
              {showMobileMenu ? (
                <RxCross1
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                  className="w-6 h-6"
                />
              ) : (
                <RxHamburgerMenu
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                  className="w-6 h-6"
                />
              )}
            </div>
          </div>
        </div>

        {/* For Mobile Veiw*/}
        <div
          className={`py-4 bg-white bg-opacity-95 absolute left-0 w-full border-t-2 border-t-cyan-800 z-50 ${
            showMobileMenu
              ? "bottom-2 transition-opacity duration-300 transform translate-y-full min-h-screen"
              : "-top-[25rem]"
          }`}
        >
          <ul
            className={`${styles.navMenu} flex flex-col gap-y-16 justify-center items-center mt-10`}
          >
            <li className="px-5 border-b border-b-gray-700 text-center text-2xl">
              <Link href="/">About</Link>
            </li>
            <li className="px-5 border-b border-b-gray-700 text-center text-2xl">
              <Link href="/">Services</Link>
            </li>
            <li className="px-5 border-b border-b-gray-700 text-center text-2xl">
              <Link href="/">Booking</Link>
            </li>
            <li className="px-5 border-b border-b-gray-700 text-center text-2xl">
              <Link href="/">Conatact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
