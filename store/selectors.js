// selectors.js
import { selector } from "recoil";
import {
  currentTodosState,
  messagesState,
  searchState,
  selectedConversationState,
} from "./atoms";

export const setMessages = selector({
  key: "setMessages",
  set: ({ set }, messages) => {
    set(messagesState, messages);
  },
  get: ({ get }) => {
    return get(messagesState);
  },
});

export const setSelectedConversation = selector({
  key: "setSelectedConversation",
  set: ({ set }, selectedConversation) => {
    set(selectedConversationState, selectedConversation);
  },
  get: ({ get }) => {
    return get(selectedConversationState);
  },
});

export const setSearch = selector({
  key: "setSearch",
  set: ({ set }, search) => {
    set(searchState, search);
  },
  get: ({ get }) => {
    return get(searchState);
  },
});

export const setTaskDetails = selector({
  key: "setTaskDetails",
  set: ({ set }, taskDetails) => {
    set(taskDetailsState, taskDetails);
  },
  get: ({ get }) => {
    return get(taskDetailsState);
  },
});

export const setSidebarToggle = selector({
  key: "setSidebarToggle",
  set: ({ set }, toggleState) => {
    set(sidebarToggleState, toggleState);
  },
  get: ({ get }) => {
    return get(sidebarToggleState);
  },
});

export const currentTodosSelector = selector({
  key: "currentTodosSelector",
  get: ({ get }) => {
    return get(currentTodosState);
  },
  set: ({ set }, newValue) => {
    set(currentTodosState, newValue);
  },
});
