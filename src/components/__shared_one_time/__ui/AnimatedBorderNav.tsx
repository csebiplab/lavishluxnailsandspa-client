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
      </div>
    </div>
  );
};

export default AnimatedBorderNav;
