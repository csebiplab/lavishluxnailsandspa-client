import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import brandImg from "@/assets/images/lavish-lux-brand-logo.png";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <header className="bg-black bg-opacity-80 shadow-md text-white sticky top-0">
      <nav className="py-4 relative">
        <div className="flex justify-between items-center px-5">
          <div>
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
          </div>
          <div>
            <RxHamburgerMenu
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="w-6 h-6"
            />
          </div>
        </div>

        {/* For Mobile */}
        <div
          className={`py-4 bg-black absolute left-0 bottom-2 w-full border-t-2 border-t-cyan-800 ${
            showMobileMenu
              ? "block transition-opacity duration-300 opacity-100 transform translate-y-full min-h-screen"
              : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-y-4 justify-center items-end">
            <li className="px-5 border-b w-full text-center">
              <Link href="/">About</Link>
            </li>
            <li className="px-5 border-b w-full text-center">
              <Link href="/">Services</Link>
            </li>
            <li className="px-5 border-b w-full text-center">
              <Link href="/">Booking</Link>
            </li>
            <li className="px-5 border-b w-full text-center">
              <Link href="/">Conatact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
