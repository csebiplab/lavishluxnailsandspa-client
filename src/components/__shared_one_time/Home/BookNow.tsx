const BookNow = () => {
  return (
    <div className="inline-flex flex-col">
      <h1
        className={`text-center md:text-start hero-h1 font-semibold textPrimary`}
      >
        <span className="block">Lavish Lux Nails & Spa - </span>{" "}
        <span className="block">Best Nail Salon</span>{" "}
        <span className="block">Mississauga</span>
      </h1>
      <button
        className={`mt-5 md:mt-10 px-2 py-3 rounded-full text-xl bgBtn textSecondary w-2/5 mx-auto md:mx-0`}
      >
        Book Now
      </button>
    </div>
  );
};

export default BookNow;
