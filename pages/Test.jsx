import React from "react";
import DoneTodo from "../components/myspace/DoneTodo";
import Todocomp from "../components/myspace/Todocomp";
import SubscriptionInfo from "../components/myspace/SubscriptionInfo";

const Test = () => {
  return (
    <div className="bg-[#f3f4f6]">
      {/* <DoneTodo label={"Done with Gym"} /> */}
      {/* <TaskDetails
        label={"Commenting on Github"}
        des={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nobis."
        }
      /> */}
      {/* <Todocomp name={"Done with the gym"}/> */}
      <SubscriptionInfo />
    </div>
  );
};

export default Test;
