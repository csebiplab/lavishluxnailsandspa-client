const BookNow = () => {
  return (
    <div className="inline-flex flex-col">
      <h1
        className={`text-center md:text-start text-3xl md:text-5xl font-semibold textPrimary leading-tight`}
      >
        Lavish Lux Nails & Spa - Best Nail Salon Mississauga
      </h1>
      <button
        className={`mt-5 md:mt-10 p-4 rounded-full text-xl bgBtn textSecondary w-2/4`}
      >
        Book Now
      </button>
    </div>
  );
};

export default BookNow;
