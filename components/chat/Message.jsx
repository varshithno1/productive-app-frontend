import React from "react";
import { useAuthContext } from "../../context/AuthContext.jsx";
import { selectedConversationState } from "../../store/atoms.js";
import { extractTime } from "../../services/extractTime.js";
import { useRecoilState } from "recoil";
import useUserDetails from "../../hooks/useUserDetails.jsx";

const Message = ({ message }) => {
  const [selectedConversation] = useRecoilState(selectedConversationState);
  const user = localStorage.getItem("user");
  const userObj = JSON.parse(user);
  // const { userDetails, loading, error } = useUserDetails();

  const fromMe = message.senderId === userObj._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";

  const profilePic = fromMe
    ? userObj?.profilePic
    : selectedConversation?.profilePic;

  const bubbleBgColor = fromMe
    ? "bg-sky-200 text-black p-2"
    : "bg-gray-800 text-white p-2 rounded-xl";

  const userName = fromMe ? userObj?.username : selectedConversation?.username;

  const sore = fromMe ? "flex-start" : "flex-end";

  const formattedTime = extractTime(message.createdAt);
  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <>
      {fromMe ? (
        <div className="flex justify-end">
          <div className="flex items-end gap-2.5 m-3 max-w-[1000px]">
            <div
              className={`flex flex-col w-full max-w-[600px] leading-1.5 p-4 border-gray-200  bg-[#6161ff] rounded-e-xl rounded-xl`}
              style={{ overflowWrap: "break-word" }}
            >
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-sm font-semibold text-white ">
                  {userName}
                </span>
                <span className="text-sm font-normal text-gray-200 ">
                  {formattedTime}
                </span>
              </div>
              <div className="text-sm font-normal py-2.5 text-white ">
                {message.message}
              </div>
            </div>
            <img
              className="w-8 h-8 rounded-full"
              src={profilePic}
              alt="image"
            ></img>
          </div>
        </div>
      ) : (
        <div className="flex items-start gap-2.5 m-3">
          <img
            className="w-8 h-8 rounded-full"
            src={profilePic}
            alt="image"
          ></img>
          <div
            className={`flex flex-col w-full max-w-[200px] leading-1.5 p-4 border-gray-200 rounded-e-xl rounded-xl bg-[#3a3a3a]`}
          >
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="text-sm font-semibold text-gray-100 ">
                {userName}
              </span>
              <span className="text-sm font-normal text-white">
                {formattedTime}
              </span>
            </div>
            <p className="text-sm font-normal py-2.5 text-gray-100 ">
              {message.message}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
