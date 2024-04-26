import React, { useState } from "react";
import cross from "../../src/assets/cross.svg";
import { RxCross2 } from "react-icons/rx";

const SubscriptionInfo = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={`bg-[#6161ff] p-5 border-white border-2 shadow-lg rounded-3xl  ${
        isVisible ? "" : "hidden"
      }`}
    >
      <div className="flex justify-between mb-2">
        <p className="text-lg text-white opacity-90 font-normal">
          Upgrade Now!
        </p>
        <button onClick={handleClose} className="focus:outline-none">
          {/* <img src={cross} className="h-4" /> */}
          <RxCross2 className="text-white " />
        </button>
      </div>
      <p className="text-white opacity-70">
        View benefit you can explore, feel the pro features!
      </p>
      <div className="flex justify-center">
        <button className="bg-white text-[#6161ff] font-medium text-sm mt-4 py-2 px-[30px] rounded-3xl shadow">
          ₹2400/month
        </button>
      </div>
    </div>
  );
};

export default SubscriptionInfo;
