import React from "react";
import ReveiwCard from "../__ui/ReviewCard";

const UserReviewSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {[1, 2, 3, 4, 5, 6].map((__, i) => (
        <ReveiwCard key={i} />
      ))}
    </div>
  );
};

export default UserReviewSection;
