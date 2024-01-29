import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import Image from "next/image";
import brandImg from "@/assets/images/lavish-lux-brand-logo.png";
import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/utilities.module.scss";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <header
      className={`${styles.secondaryBgColor} opacity-90 shadow-md sticky top-0 z-50`}
    >
      <nav className="py-4 relative">
        <div className="flex justify-between items-center px-5">
          <Link href={"/"}>
            <Image
              src={brandImg}
              alt="Lavish Lux Brand Image"
              width={135}
              height={24.5}
              priority={true}
              style={{
                width: "auto",
                height: "auto",
              }}
            />
          </Link>
          <div className="cursor-pointer">
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

        {/* For Mobile */}
        <div
          className={`py-4 bg-white absolute left-0 w-full border-t-2 border-t-cyan-800 ${
            showMobileMenu
              ? "bottom-2 transition-opacity duration-300 bg-opacity-95 transform translate-y-full min-h-screen"
              : "-top-96"
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
