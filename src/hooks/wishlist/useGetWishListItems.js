import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useGetWishListItems = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  const getWishListItems = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/wishlist_items`, {
        withCredentials: true,
      });
      const data = res.data;
      setItems(data.items);
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getWishListItems();
  }, []);

  return { loading, items };
};

export default useGetWishListItems;
