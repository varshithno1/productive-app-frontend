import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { selectedConversationState, searchState } from "../../store/atoms";
import useGetConversationUsers from "../../hooks/useGetConversationUsers";
import useFetchUsers from "../../hooks/useFetchUsers";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import MessageSkeleton from "./MessageSkeleton";
import { useSocketContext } from "../../context/SocketContext";
import { extractTime } from "../../services/extractTime.js";

const Conversations = () => {
  const [selectedConversation, setSelectedConversation] = useRecoilState(
    selectedConversationState
  );
  const [search, setSearch] = useRecoilState(searchState);

  const { loading: conversationLoading, conversations } =
    useGetConversationUsers();
  const { loading: usersLoading, users } = useFetchUsers(search);

  let usersToDisplay = [];
  if (search) {
    // Display fetched users if there is a search query
    usersToDisplay = usersLoading ? [] : users;
  } else {
    // Display previous chats if there is no search query
    usersToDisplay = conversationLoading ? [] : conversations;
  }

  const handleUserSelect = (user) => {
    setSelectedConversation(user);
    setSearch("");
  };

  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  // Implementing Online Users
  const { onlineUsers } = useSocketContext();
  const isOnline = (userId) => onlineUsers.includes(userId);

  console.log("Search users", users);
  return (
    <div className="">
      {/* {usersLoading && <MessageSkeleton n={4} />} */}
      {search ? (
        usersLoading ? (
          <MessageSkeleton n={8} />
        ) : users.length === 0 ? (
          <div>No user found</div>
        ) : (
          users.map((user) => (
            <div key={user._id} className="group">
              <div
                className="flex hover:bg-[#6161ff] hover:text-white hover:cursor-pointer m-1 py-3 px-5 rounded-lg items-center border border-gray-300 group"
                onClick={() => handleUserSelect(user)}
              >
                <div className="w-max">
                  <div className="relative w-16 h-16 rounded-full mr-3 bg-gray-300 flex justify-center items-center">
                    <img
                      className="w-14 h-14"
                      src={user.profilePic}
                      alt="User Img"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between items-center">
                    <div className="text-xl font-bold">
                      {toTitleCase(user.username)}
                    </div>
                    <div className="px-3 py-2 rounded-md bg-[#6161ff] text-white hover:bg-white hover:text-[#6161ff]">
                      Send Message
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )
      ) : (
        <div>
          {conversationLoading ? (
            <MessageSkeleton n={6} />
          ) : conversations.length === 0 ? (
            <div>No Chat</div>
          ) : (
            conversations.map((user) => (
              <div
                key={user.user._id}
                className="flex hover:bg-[#6161ff] hover:text-white hover:cursor-pointer m-1 py-3 px-5 rounded-lg items-center border border-gray-300"
                onClick={() => handleUserSelect(user.user)}
              >
                <div className="w-max">
                  <div className="relative w-16 h-16 rounded-full mr-3 bg-gray-300 flex justify-center items-center">
                    <img
                      className="w-14 h-14"
                      src={user.user.profilePic}
                      alt="User Img"
                    />
                    <span
                      className={`bottom-0 left-12 absolute w-4 h-4 ${
                        isOnline(user.user._id) ? `bg-green-400` : `bg-red-400`
                      } border-2 border-white dark:border-gray-800 rounded-full`}
                    ></span>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between items-center">
                    <div className="text-xl font-bold">
                      {toTitleCase(user.user.username)}
                    </div>
                    {user.lastMessageTime && (
                      <div>{extractTime(user.lastMessageTime)}</div>
                    )}
                  </div>
                  {user.lastMessage && <div>{user.lastMessage}</div>}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Conversations;

// {
//   "_id": "6617e1e05f7fc797971c6ee9",
//   "username": "sai1",
//   "email": "sai1@gmail.com",
//   "profilePic": "https://api.dicebear.com/8.x/lorelei/svg?seed=sai1"
// }
