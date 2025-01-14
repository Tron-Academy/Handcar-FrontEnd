import React from "react";
import { FaStar } from "react-icons/fa6";

export default function SingleServiceReview() {
  return (
    <div className="w-full flex flex-col gap-2 py-5 border-t">
      <div className="flex sm:flex-row flex-col sm:gap-5 gap-2 sm:items-center items-start">
        <div className="flex gap-1 items-center sm:border-e sm:pe-4">
          <p className="bg-[#D9D9D9] rounded-full p-2 w-fit text-[#7C7C7C]">
            MH
          </p>
          <p>Miravat H</p>
        </div>
      </div>
      <p>16 Feb, 2024</p>
      <div className="flex gap-1">
        {Array.from({ length: 4 }).map((_, index) => (
          <p key={index} className="text-[#FFB800]">
            <FaStar />
          </p>
        ))}
        <p className="text-[#DADADA]">
          <FaStar />
        </p>
      </div>
      <p className="font-medium">Nice perfume in affordable price</p>
      <p>
        I found Davidoff Cool Water perfume is a timeless and refreshing
        fragrance that exudes elegance and sophistication. The captivating blend
        of aromatic and aquatic notes creates a sense of tranquility and
        vitality, perfect for both casual and formal occasions.
      </p>
    </div>
  );
}
