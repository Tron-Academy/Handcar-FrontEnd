import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import useAddItemtoCart from "../../../hooks/cart/useAddItemtoCart";
import Loading from "../../Loading";
import useAddItemtoWishList from "../../../hooks/wishlist/useAddItemtoWishList";

export default function ProductCard({ name, brand, price, id }) {
  const { loading, addItemToCart } = useAddItemtoCart();
  const { addItemtoWishList } = useAddItemtoWishList();
  return (
    <div className="bg-white p-5 flex flex-col gap-3 rounded-lg items-center border shadow-lg w-[330px]">
      <button
        onClick={() => addItemtoWishList({ id: parseInt(id) })}
        className="p-2 rounded-full bg-[#F2F2F2] w-fit ms-auto"
      >
        <CiHeart />
      </button>
      <img src="/accessories/product.png" className="w-[212px] h-[141px]"></img>
      <div className="flex justify-between w-full items-center">
        <p className="bg-[#FFE500] p-1 px-3 text-sm font-semibold text-[#322D00] rounded-md">
          BestSeller
        </p>
        <div className="flex gap-2 items-center p-1 rounded-md bg-[#F2F2F2]">
          <p className="text-[#FFB800]">
            <FaStar />
          </p>
          <p>4.0</p>
        </div>
      </div>
      <Link
        to={`/accessories/${id}`}
        className="font-medium text-start me-auto"
      >
        {name}
      </Link>
      <p className="font-medium me-auto">{brand}</p>
      <div className="flex gap-3 me-auto items-center">
        <p className="font-semibold">{price}</p>
        <p className="font-medium text-[#959595] line-through">AED 199</p>
        <p className="text-[#17A600] font-bold text-xs">9% OFF</p>
      </div>
      <button
        onClick={() => {
          addItemToCart({ id });
        }}
        className="flex items-center gap-3 border rounded-lg hover:bg-black hover:text-white border-[#BBBBBB] p-2 w-full justify-center"
      >
        <span>Add to cart</span>
        <span>
          <BsCartPlus />
        </span>
      </button>
      {loading && <Loading />}
    </div>
  );
}
