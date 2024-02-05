import { FaStar } from "react-icons/fa";

export default function ReviewCard() {
  return (
    <div className="max-w-sm bg-white shadow-lg px-6 py-8">
      <div className="flex gap-x-1">
        <FaStar className="w-4 h-4 text-yellow-400" />
        <FaStar className="w-4 h-4 text-yellow-400" />
        <FaStar className="w-4 h-4 text-yellow-400" />
        <FaStar className="w-4 h-4 text-yellow-400" />
        <FaStar className="w-4 h-4 text-yellow-400" />
      </div>
      <p className="font-normal mt-4">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
    </div>
  );
}
