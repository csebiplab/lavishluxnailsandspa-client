import Image from "next/image";
import Link from "next/link";
import brandImg from "@/assets/images/lavish-lux-brand-logo.png";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaRegCopyright,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={`primaryBgColor mt-16`}>
      <div className="container mx-auto px-5 py-8 md:px-16">
        <div className="flex md:block justify-center">
          <div className="flex flex-col md:flex-row justify-center md:justify-between gap-y-4 md:gap-0">
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
            <div>
              <p className="font-bold mb-3">Company</p>
              <div className="flex flex-col gap-y-2">
                <Link href="/" className="hover:underline">
                  How it works
                </Link>
                <Link href="/" className="hover:underline">
                  Gallery
                </Link>
                <Link href="/" className="hover:underline">
                  Testimonials
                </Link>
                <Link href="/" className="hover:underline">
                  Careers
                </Link>
                <Link href="/" className="hover:underline">
                  Sitemap
                </Link>
              </div>
            </div>
            <div>
              <p className="font-bold mb-3">Services</p>
              <div className="flex flex-col gap-y-2">
                <Link href="/" className="hover:underline">
                  Sevices1
                </Link>
                <Link href="/" className="hover:underline">
                  Services2
                </Link>
                <Link href="/" className="hover:underline">
                  Services3
                </Link>
                <Link href="/" className="hover:underline">
                  Services4
                </Link>
                <Link href="/" className="hover:underline">
                  Services5
                </Link>
                <Link href="/" className="hover:underline">
                  Services6
                </Link>
                <Link href="/" className="hover:underline">
                  Services7
                </Link>
              </div>
            </div>
            <div className="">
              <p className="font-bold mb-3">Follow Us</p>
              <div className="flex justify-start md:justify-end gap-x-4">
                <Link href="/" className="cursor-pointer">
                  <FaFacebook className=" w-8 h-8 text-black" />
                </Link>
                <Link href="/" className="cursor-pointer">
                  <FaGoogle className=" w-8 h-8 text-black" />
                </Link>
                <Link href="/" className="cursor-pointer">
                  <FaInstagram className=" w-8 h-8 text-black" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="borderClr mt-4 mb-8" />
        <div className="flex justify-between">
          <p className="flex gap-x-2 items-center">
            <FaRegCopyright className="text-gray-500" />
            <span className="text-gray-600">
              Copyright {new Date().getFullYear()} | All rights Reserved
            </span>
          </p>
          <Link href="#" className="text-gray-500 font-semibold">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
