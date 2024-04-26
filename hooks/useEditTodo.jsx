import { useState } from "react";
import { useRecoilState } from "recoil";
import { currentTodosSelector } from "../store/selectors";
import axiosInstance from "../services/axiosInstance";

const useEditTodo = () => {
  const [loading, setLoading] = useState(false);

  const editTodo = async (todoId, updatedTodoData) => {
    setLoading(true);
    try {
      const response = await axiosInstance.put(
        `/todo/update/${todoId}`,
        updatedTodoData
      );
      return { success: true, message: response.data.message };
    } catch (error) {
      return { success: false, message: error.response.data.error };
    } finally {
      setLoading(false);
    }
  };

  return { editTodo, loading };
};

export default useEditTodo;
