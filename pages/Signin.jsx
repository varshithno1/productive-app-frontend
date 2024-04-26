import React from "react";
import RightSignin from "../components/sign/RightSignin";
import LeftSignin from "../components/sign/LeftSignin";

const Signin = () => {
  return (
    <div className="flex h-screen w-full">
      <div className="w-[80vw] h-screen">
        <LeftSignin />
      </div>
      <div className="w-full flex justify-center py-3">
        <div className="w-full flex justify-center rounded-2xl">
          <RightSignin />
        </div>
      </div>
    </div>
  );
};

export default Signin;
