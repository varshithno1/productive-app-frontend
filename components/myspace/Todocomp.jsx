import React, { useState } from "react";
import DoneTodo from "./DoneTodo";
import NotDoneTodo from "./NotDoneTodo";

const Todocomp = ({ toggle, todo }) => {
  const [isCompleted, setCompleted] = useState(false);
  // console.log(todo);

  const handleToggleCompleted = () => {
    setCompleted(!isCompleted);
  };

  return isCompleted ? (
    <DoneTodo onToggleCompleted={handleToggleCompleted} todo={todo} />
  ) : (
    <NotDoneTodo onToggleCompleted={handleToggleCompleted} todo={todo} />
  );
};

export default Todocomp;

// {
//   "_id": "65f993843cae6164b469232a",
//   "title": "Chicken",
//   "completed": false,
//   "status": "pending",
//   "dueDate": "2024-03-19T13:30:44.265Z",
//   "taskTypeId": "65f993833cae6164b4692327"
// }
