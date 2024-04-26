import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useAuthContext } from "../../context/AuthContext";
import { selectedConversationState } from "../../store/atoms";
import useUserDetails from "../../hooks/useUserDetails";
import SingleConversation from "./SingleConversation";
import MessageInput from "./MessageInput";
import { useSocketContext } from "../../context/SocketContext";

const MessagesContainer = () => {
  const [selectedConversation, setSelectedConversation] = useRecoilState(
    selectedConversationState
  );

  useEffect(() => {
    // Cleanup function (unmounts)
    return () => setSelectedConversation([]);
  }, [setSelectedConversation]);

  const { onlineUsers } = useSocketContext();
  const isOnline = (userId) => onlineUsers.includes(userId);

  return (
    <div className="w-full flex flex-col">
      {selectedConversation.length === 0 ? (
        <NoChatSelectedComponent />
      ) : (
        <>
          <div className="p-4 bg-gray-300 flex items-center">
            <img
              src={selectedConversation.profilePic}
              className="h-16"
              alt=""
            />
            <div className="text-gray-900 text-2xl font-bold ml-2 flex-col">
              <div>{selectedConversation.username}</div>
              <div className="text-gray-400 text-sm font-thin">
                {isOnline(selectedConversation._id) ? "Online" : "Offline"}
              </div>
            </div>
          </div>
          <SingleConversation />
          <MessageInput />
        </>
      )}
    </div>
  );
};

const NoChatSelectedComponent = () => {
  const { userDetails, loading } = useUserDetails();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-black font-semibold flex flex-col items-center gap-2">
        <p>Welcome {userDetails?.username}</p>
        <p>Select a chat to start messaging</p>
      </div>
    </div>
  );
};

export default MessagesContainer;
