import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import axiosInstance from "../services/axiosInstance";

const useSignup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const setSignup = async (
    username,
    email,
    password,
    confirmPassword,
    setError
  ) => {
    const success = handleInputErrors(
      username,
      email,
      password,
      confirmPassword,
      setError
    );
    if (!success) return;

    setLoading(true);
    try {
      const response = await axiosInstance.post("/user/signup", {
        username,
        email,
        password,
        confirmPassword,
      });
      console.log(response.data);
      localStorage.setItem("jwt", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      setAuthUser(response.data.token);
      toast.success(response.data.msg);
      navigate("/myspace");
    } catch (error) {
      if (error.response) {
        setError(error.response.data.msg || "An error occurred");
        toast.error(error.response.data.msg || "An error occurred", {
          duration: 600,
        });
      } else if (error.request) {
        setError("No response received from server");
        toast.error("No response received from server", { duration: 600 });
      } else {
        setError("Error: " + error.message);
        toast.error("Error: " + error.message, { duration: 600 });
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, setSignup };
};

function handleInputErrors(
  username,
  email,
  password,
  confirmPassword,
  setError
) {
  if (!username || !email || !password || !confirmPassword) {
    setError("Please fill in all fields");
    toast.error("Please fill in all fields");
    return false;
  }

  return true;
}

export default useSignup;
