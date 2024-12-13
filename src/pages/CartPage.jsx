import React from "react";
import CartNavigation from "../components/cart/CartNavigation";
import CartItem from "../components/cart/CartItem";
import CouponsSection from "../components/cart/CouponsSection";
import CheckOutSection from "../components/cart/CheckOutSection";
import useGetCartItems from "../hooks/cart/useGetCartItems";

export default function CartPage() {
  const { loading, items } = useGetCartItems();
  return (
    <div className="lg:px-[120px] px-10 py-10">
      <CartNavigation />
      <div className="my-10 flex flex-col gap-5">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <CouponsSection />
      <CheckOutSection />
    </div>
  );
}
