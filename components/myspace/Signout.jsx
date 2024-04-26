import React from "react";
import axiosInstance from "../../services/axiosInstance";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Signout = ({ label, icon }) => {
  const { setAuthUser } = useAuthContext();
  const navigate = useNavigate();

  const signout = async () => {
    try {
      await axiosInstance.post("/user/signout");
      localStorage.removeItem("jwt");
      localStorage.removeItem("user");
      setAuthUser(null);
      toast.success("Logged out successfully");
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
    <div
      className="px-3 py-3 cursor-pointer flex items-center rounded-xl border text-2xl shadow bg-white"
      onClick={signout}
    >
      <div className="flex justify-center items-center border-0 w-9 h-9 rounded-xl">
        <img src={icon} alt="" className="h-5 inline-block align-middle" />
      </div>
      <div className="tracking-normal font-semibold">{label}</div>
    </div>
  );
};

export default Signout;
