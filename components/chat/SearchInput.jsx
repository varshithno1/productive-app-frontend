import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { selectedConversationState } from "../../store/atoms";
import { searchState } from "../../store/atoms";

// const SearchInput = () => {
//   const [search, setSearch] = useState("");
//   const [selectedConversation, setSelectedConversation] = useRecoilState(
//     selectedConversationState
//   );
//   const { conversations } = useGetConversationUsers();

//   const handleChange = (e) => {
//     const value = e.target.value.toLowerCase();
//     setSearch(value);

//     if (!value) {
//       setSelectedConversation([]);
//       return;
//     }

//     // const users = conversations.find((c) =>
//     const users = conversations.filter((c) =>
//       c.username.toLowerCase().includes(value)
//     );

//     console.log("Search:", value);
//     console.log("users:", users);

//     if (users.length > 0) {
//       setSelectedConversation(users);
//     } else {
//       setSelectedConversation([]);
//       selectedConversation;
//       toast.error("No User found");
//     }
//   };

//   return (
//     <form action="">
//       <input
//         type="text"
//         placeholder="Search username...."
//         onChange={handleChange}
//       />
//     </form>
//   );
// };
// export default SearchInput;

const SearchInput = () => {
  const [search, setSearch] = useRecoilState(searchState);
  const setSelectedConversation = useSetRecoilState(selectedConversationState);

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    if (!value) {
      setSelectedConversation([]);
      return;
    }
  };

  // return (
  //   <div>
  //     <form action="">
  //       <input
  //         type="text"
  //         placeholder="Search username...."
  //         onChange={handleChange}
  //         value={search}
  //         className="my-3 p-2 w-full rounded-md mb-5"
  //       />
  //     </form>
  //   </div>
  // );

  return (
    <form className="w-full mx-auto mb-3">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#6161ff] focus:border-[#6161ff] "
          placeholder="Search Users..."
          onChange={handleChange}
          value={search}
          required
        />
      </div>
    </form>
  );
};

export default SearchInput;
