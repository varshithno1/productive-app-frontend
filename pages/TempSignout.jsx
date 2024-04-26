import React from "react";
import axios from "axios"; // Import axios
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../services/axiosInstance.js";

const TempSignout = () => {
  const { setAuthUser } = useAuthContext();
  const navigate = useNavigate();

  const signout = async () => {
    try {
      const response = await axiosInstance.post("/user/signout");
      localStorage.removeItem("jwt");
      toast.success("Logged out successfully");
      setAuthUser(null);
      navigate("/signin");
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "An error occurred", {
          duration: 600,
        });
      }
    }
  };

  return (
    <div>
      <div>TempSignout</div>
      <button onClick={signout}>Logout</button>
    </div>
  );
};

export default TempSignout;
