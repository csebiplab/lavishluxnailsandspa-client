import styles from "@/styles/utilities.module.scss";

const BookNow = () => {
  const { bgBtn, textSecondary } = styles;
  return (
    <div className="inline-flex flex-col">
      <h1 className="text-center md:text-start text-3xl font-extrabold inline">
        Lavish Lux Nails & Spa - Best Nail Salon Mississauga
      </h1>
      <button
        className={`self-center md:self-end mt-10 px-12 py-4 rounded-md text-xl ${bgBtn} ${textSecondary} transition duration-300 ease-in-out`}
      >
        Book Now
      </button>
    </div>
  );
};

export default BookNow;
