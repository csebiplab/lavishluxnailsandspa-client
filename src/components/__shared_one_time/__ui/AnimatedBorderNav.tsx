import Link from "next/link";

const AnimatedBorderNav = () => {
  return (
    <div className="hidden md:block">
      <div className="">
        <Link className="nav-link nav-link-fade-up" href="#">
          About
        </Link>
        <Link className="nav-link nav-link-fade-up" href="#">
          Services
        </Link>
        <Link className="nav-link nav-link-fade-up" href="#">
          Booking
        </Link>
        <Link className="nav-link nav-link-fade-up" href="#">
          Contact
        </Link>
        <button className="py-2 px-8 bgBtn text-white">Book Now</button>
      </div>
    </div>
  );
};

export default AnimatedBorderNav;
