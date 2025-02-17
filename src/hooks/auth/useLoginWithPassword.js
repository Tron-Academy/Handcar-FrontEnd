import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { base_url } from "../../constants";
import { UserContext } from "../../UserContext";

const useLoginWithPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setShowLogin } = useContext(UserContext);

  const loginUser = async ({ phone, password }) => {
    setLoading(true);
    const formdata = new FormData();
    formdata.append("username", phone);
    formdata.append("password", password);
    try {
      const res = await axios.post(`${base_url}/UserLogin`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      console.log(res);

      const data = res.data;
      console.log(data);
      navigate("/");
      setShowLogin(false);
    } catch (err) {
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loginUser, loading };
};

export default useLoginWithPassword;
