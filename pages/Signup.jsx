import React from "react";
import LeftSignup from "../components/sign/LeftSignup";
import RightSignup from "../components/sign/RightSignup";

const Signup = () => {
  return (
    <div className="flex h-screen w-full">
      <div className="w-[80vw] h-screen">
        <LeftSignup />
      </div>
      <div className="w-full flex justify-center py-3">
        <div className="w-full flex justify-center rounded-2xl">
          <RightSignup />
        </div>
      </div>
    </div>
  );
};

export default Signup;
