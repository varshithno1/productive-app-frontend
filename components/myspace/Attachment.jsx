import React from "react";
import Attachbox from "./Attachbox";

const Attachment = () => {
  return (
    <div>
      <div>
        <h3>Attachment</h3>
      </div>
      <div className="flex flex-wrap">
        <Attachbox title={"Razagro.xml"} date={"19 Apr 2024"} />
        <Attachbox title={"Razagro.xml"} date={"19 Apr 2024"} />
        <Attachbox title={"Razagro.xml"} date={"19 Apr 2024"} />
        <Attachbox title={"Razagro.xml"} date={"19 Apr 2024"} />
        <Attachbox title={"Razagro.xml"} date={"19 Apr 2024"} />
      </div>
    </div>
  );
};

export default Attachment;
