import React from "react";

const Sideoptions = ({ icon, label }) => {
  return (
    <div className="px-4 py-4 text-[#707070] cursor-pointer rounded-xl text-xl hover:bg-[#ffffff] hover:shadow active:text-[#2b2b2b]">
      {/* <img src={icon} alt="" className="h-5 mr-3 inline-block align-middle" /> */}
      <div className="h-5 mr-3 inline-block align-middle">{icon}</div>
      <span className="inline-block align-middle font-medium">{label}</span>
    </div>
  );
};

export default Sideoptions;
