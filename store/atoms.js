import { atom } from "recoil";

export const messagesState = atom({
  key: "messagesState",
  default: [],
});

export const searchState = atom({
  key: "searchState",
  default: "",
});

export const selectedConversationState = atom({
  key: "selectedConversationState",
  default: [],
});

export const taskDetailsState = atom({
  key: "taskDetailsState",
  default: {},
});

export const sidebarToggleState = atom({
  key: "sidebarToggleState",
  default: "none", // Default state is set to "none"
});

export const currentTodosState = atom({
  key: "currentTodosState",
  default: [], // Default state is set to an empty array
});
