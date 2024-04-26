// import React from "react";
// import Rightmain from "../components/myspace/Rightmain";
// import Sidebar from "../components/myspace/Sidebar";
// import TaskDetails from "../components/myspace/TaskDetails";
// const Myspace = () => {
//   return (
//     <div className="h-full flex">
//       <div className="font-AlbertSans w-[15vw] left-0 top-0 fixed h-full bg-[#f3f4f6]">
//         <Sidebar />
//       </div>
//       <div className="w-[60vw] ml-[15vw] h-full">
//         <Rightmain />
//       </div>
//       <div>
//         <div className="w-[25vw] border border-l-2 h-screen fixed">
//           <TaskDetails
//             label={"Documneting on github"}
//             des={
//               "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis pariatur quidem earum nobis adipisci magni et facilis laudantium, aliquid fuga?"
//             }
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Myspace;

// import React, { useState } from "react";
// import { useRecoilState } from "recoil";
// import { sidebarToggleState } from "../store/atoms";
// import { setSidebarToggle } from "../store/selectors";
// import Rightmain from "../components/myspace/Rightmain";
// import Sidebar from "../components/myspace/Sidebar";
// import TaskDetails from "../components/myspace/TaskDetails";
// import SaveTaskDetails from "../components/myspace/SaveTaskDetails";
// const Myspace = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const TaskDetailstoggle = () => setIsOpen(!isOpen);
//   const [taskDetails, setTaskDetails] = useState({
//     label: "Documneting on github",
//     des: "All info",
//   });
//   const [sidebarToggle, setSidebarToggleState] = useRecoilState(
//     setSidebarToggleState
//   );
//   const toggleSidebarState = (newState) => {
//     setSidebarToggle(setSidebarToggle(newState));
//   };
// return (
//   <>
//     <div className="font-AlbertSans w-[20rem] left-0 top-0 fixed h-full bg-[#f3f4f6]">
//       <Sidebar />
//     </div>
//     <div
//       className="top-0 left-[20rem] h-full relative w-auto flex"
//       style={{ width: `calc(100% - 20rem)` }}
//     >
//       <Rightmain toggle={TaskDetailstoggle} />
//       {/* {isOpen && <TaskDetails details={taskDetails} />} */}
//       {/* {isOpen && <SaveTaskDetails />} */}
//        here there in ternary operator if(sidebarToggle == new )
//       <Savetaskdetails />
//       else if sidebarToggle == edit
//       <Taskdetails />
//       else if sidebarToggle == none
//     </div>
//   </>
// );

//   return (
//     <>
//       <div className="font-AlbertSans w-[20rem] left-0 top-0 fixed h-full bg-[#f3f4f6]">
//         <Sidebar />
//       </div>
//       <div
//         className="top-0 left-[20rem] h-full relative w-auto flex"
//         style={{ width: `calc(100% - 20rem)` }}
//       >
//         <Rightmain toggle={TaskDetailstoggle} />
//         {/* Conditional rendering based on sidebarToggle state */}
//         {sidebarToggle === "new" && <SaveTaskDetails />}
//         {sidebarToggle === "edit" && <TaskDetails details={taskDetails} />}
//         {sidebarToggle === "none" && null}
//       </div>
//     </>
//   );
// };

// // const Myspace = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const TaskDetailstoggle = () => setIsOpen(!isOpen);
// //   return (
// //     <div className="h-full flex">
// //       <div className="font-AlbertSans w-[15vw] left-0 top-0 fixed h-full bg-[#f3f4f6]">
// //         <Sidebar />
// //       </div>
// //       <div className="w-[85vw] top-0 ml-[15vw] h-full relative">
// //         <Rightmain />
// //         {/* <TaskDetails /> */}
// //       </div>
// //     </div>
// //   );
// // };
// export default Myspace;

import React, { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil"; // Import useSetRecoilState
import { sidebarToggleState } from "../store/atoms";

import Rightmain from "../components/myspace/Rightmain";
import Sidebar from "../components/myspace/Sidebar";
import EditTodo from "../components/myspace/EditTodo";
import AddTodo from "../components/myspace/AddTodo";

const Myspace = () => {
  const [sidebarToggle, setSidebarToggle] = useRecoilState(sidebarToggleState);
  return (
    <>
      <div className="font-AlbertSans w-[20rem] left-0 top-0 fixed h-full bg-[#f3f4f6]">
        <Sidebar />
      </div>
      <div
        className="top-0 left-[20rem] h-full relative w-auto flex"
        style={{ width: `calc(100% - 20rem)` }}
      >
        <Rightmain />
        {sidebarToggle === "new" && <AddTodo />}
        {sidebarToggle === "edit" && <EditTodo />}
        {sidebarToggle === "none" && null}
      </div>
    </>
  );
};

export default Myspace;
