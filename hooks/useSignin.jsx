import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../services/axiosInstance";

const useSignin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const setSignin = async (email, password, setError) => {
    const success = handleInputErrors(email, password, setError);
    if (!success) return;

    setLoading(true);

    try {
      const response = await axiosInstance.post("/user/signin", {
        email,
        password,
      });
      console.log(response.data);
      localStorage.setItem("jwt", response.data.jwt);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      setAuthUser(response.data.jwt);
      toast.success(response.data.msg);
      navigate("/myspace");
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || "An error occurred");
        toast.error(error.response.data.message || "An error occurred", {
          duration: 600,
        });
      } else if (error.request) {
        setError("No response received from server");
        toast.error("No response received from server", {
          duration: 600,
        });
      } else {
        setError("Error: " + error.message);
        toast.error("Error: " + error.message, {
          duration: 600,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, setSignin };
};
export default useSignin;

function handleInputErrors(username, password, setError) {
  if (!username || !password) {
    toast.error("Please fill in all fields");
    setError("Please fill in all fields");
    return false;
  }

  return true;
}
