// useGetConversationUsers.js
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axiosInstance from "../services/axiosInstance";

const useGetConversationUsers = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversationUsers = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get("/chat/mychats");
        setConversations(response.data);
        console.log("Conver userses = ", response.data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getConversationUsers();
  }, []);

  return { loading, conversations };
};

export default useGetConversationUsers;
