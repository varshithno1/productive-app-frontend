import { useState, useEffect } from "react";
import axiosInstance from "../services/axiosInstance";

const useUserDetails = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get("/user/me");
        setUserDetails(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  return { userDetails, loading, error };
};

export default useUserDetails;
