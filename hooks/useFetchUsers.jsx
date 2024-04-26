import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axiosInstance from "../services/axiosInstance";

const useFetchUsers = (value) => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get("/user/all", {
          params: { search: value },
        });
        setUsers(response.data);
      } catch (error) {
        toast.error("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    // Fetch users only if a search value is provided
    if (value) {
      fetchUsers();
    } else {
      // Clear users when search value is empty
      setUsers([]);
    }
  }, [value]); // Include value in the dependency array

  return { loading, users };
};

export default useFetchUsers;
