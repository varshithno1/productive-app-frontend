import { useState } from "react";
import { useRecoilState } from "recoil";
import { currentTodosSelector } from "../store/selectors";
import axiosInstance from "../services/axiosInstance";

const useDeleteTodo = () => {
  const [loading, setLoading] = useState(false);
  const [currentTodos, setCurrentTodos] = useRecoilState(currentTodosSelector);

  const deleteTodo = async (todoToDelete) => {
    setLoading(true);
    try {
      // Delete the todo from the backend
      await axiosInstance.delete(`/todo/delete/${todoToDelete._id}`);

      // Update the currentTodos state by filtering out the todo to delete
      setCurrentTodos((prevTodos) =>
        prevTodos.filter((todo) => todo._id !== todoToDelete._id)
      );
      return { success: true, message: "Todo deleted successfully" };
    } catch (error) {
      return { success: false, message: error.message };
    } finally {
      setLoading(false);
    }
  };

  return { deleteTodo, loading };
};

export default useDeleteTodo;
