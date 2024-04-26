import { useEffect } from "react";
import { useRecoilState } from "recoil";

import { messagesState } from "../store/atoms";
import { useSocketContext } from "../context/SocketContext";
// import notificationSound from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const [messages, setMessages] = useRecoilState(messagesState);

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      // const sound = new Audio(notificationSound);
      // sound.play();
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
