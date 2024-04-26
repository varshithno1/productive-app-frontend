import React from "react";

const Sideprofile = ({ label, icon }) => {
  // Function to convert string to title case
  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  return (
    <div className="px-3 py-3 cursor-pointer flex items-center rounded-xl border text-xl bg-white shadow">
      <div className="flex justify-center items-center border-0 w-15 h-15 rounded-xl">
        <img
          src={icon}
          alt=""
          className="h-10 w-10 inline-block align-middle"
        />
      </div>
      <div className="tracking-normal font-semibold ml-3">
        {toTitleCase(label)}
      </div>
    </div>
  );
};

export default Sideprofile;
