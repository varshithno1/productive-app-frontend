import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectedConversationState, messagesState } from "../store/atoms";
import axiosInstance from "../services/axiosInstance";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useRecoilState(messagesState);
  const selectedConversation = useRecoilValue(selectedConversationState);

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get(
          `/chat/message/${selectedConversation._id}`
        );
        const data = response.data;
        if (data.error) throw new Error(data.error);
        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
};

export default useGetMessages;
