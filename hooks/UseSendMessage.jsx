import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import toast from "react-hot-toast";
import axiosInstance from "../services/axiosInstance";
import { messagesState, selectedConversationState } from "../store/atoms";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const selectedConversation = useRecoilValue(selectedConversationState);
  const [messages, setMessages] = useRecoilState(messagesState);

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const res = await axiosInstance.post(
        `/chat/message/send/${selectedConversation._id}`,
        { message }
      );
      const data = res.data;
      if (data.error) throw new Error(data.error);

      // Assuming messages is an array of messages
      // Replace this logic with your own, depending on how you manage messages
      // Append the new message to the existing messages array
      // setMessages((prevMessages) => [...prevMessages, data]);

      // setMessages((prevMessages) => {
      //   if (!prevMessages || prevMessages.length === 0) {
      //     return [data];
      //   } else {
      //     return [...prevMessages, data];
      //   }
      // });
      const updatedMessages = Array.isArray(messages)
        ? [...messages, data]
        : [data];

      // Set the messages state directly
      setMessages(updatedMessages);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
