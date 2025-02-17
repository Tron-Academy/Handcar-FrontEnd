import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { ImAttachment } from "react-icons/im";
import { IoClose } from "react-icons/io5";
import useAddServiceReview from "../../../../hooks/vendorservices/useAddServiceReview";
import Loading from "../../../Loading";
import { UserContext } from "../../../../UserContext";
import { toast } from "react-toastify";

export default function WriteServiceReview({
  setShowPopup,
  service_id,
  refetch,
}) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const { loading, postReview } = useAddServiceReview();
  const { user } = useContext(UserContext);

  async function submitReview() {
    if (!user) {
      toast.warn("Please login to continue");
    } else if (rating === 0 || comment === "") {
      toast.warn("please fill all fields");
    } else {
      await postReview({ id: service_id, rating, comment });
      setShowPopup(false);
      refetch();
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowPopup(false)}
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="xl:w-1/3 md:w-1/2 sm:w-3/4 w-11/12 mx-auto flex flex-col gap-5 rounded-md items-center bg-white border border-[#A5A5A5] py-5"
      >
        <div className="w-full p-5 flex flex-col gap-3">
          <p
            className="ms-auto cursor-pointer"
            onClick={() => setShowPopup(false)}
          >
            <IoClose />
          </p>
          <h4 className="text-xl font-bold">Write a review</h4>
          <div>
            <p>How would You Rate Our Service ?</p>
            <div className="flex gap-5 justify-center my-5">
              <button
                className="hover:scale-150 duration-200 ease-in-out text-[#FFB800]"
                onClick={() => setRating(1)}
              >
                {rating < 1 ? <FaRegStar /> : <FaStar />}
              </button>
              <button
                className="hover:scale-150 duration-200 ease-in-out text-[#FFB800]"
                onClick={() => setRating(2)}
              >
                {rating < 2 ? <FaRegStar /> : <FaStar />}
              </button>
              <button
                className="hover:scale-150 duration-200 ease-in-out text-[#FFB800]"
                onClick={() => setRating(3)}
              >
                {rating < 3 ? <FaRegStar /> : <FaStar />}
              </button>
              <button
                className="hover:scale-150 duration-200 ease-in-out text-[#FFB800]"
                onClick={() => setRating(4)}
              >
                {rating < 4 ? <FaRegStar /> : <FaStar />}
              </button>
              <button
                className="hover:scale-150 duration-200 ease-in-out text-[#FFB800]"
                onClick={() => setRating(5)}
              >
                {rating < 5 ? <FaRegStar /> : <FaStar />}
              </button>
            </div>
          </div>
          <textarea
            className="bg-[#F6F6F6] rounded-md w-full p-3"
            rows={7}
            placeholder="write your review here"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button
            onClick={submitReview}
            className="px-4 py-2 bg-black rounded-lg text-white border-2 hover:bg-white hover:text-black shadow-md"
          >
            Submit Review
          </button>
          {loading && <Loading />}
        </div>
      </motion.div>
    </motion.div>
  );
}
