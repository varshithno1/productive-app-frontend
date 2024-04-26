import { useState } from "react";
import { useRecoilState } from "recoil";
import { currentTodosSelector } from "../store/selectors";
import axiosInstance from "../services/axiosInstance";

const useAddTodo = () => {
  const [loading, setLoading] = useState(false);
  const [currentTodos, setCurrentTodos] = useRecoilState(currentTodosSelector);

  const saveTodo = async (title, description) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post("/todo/add", {
        title,
        description,
      });
      const data = response.data.todo;
      setCurrentTodos((prevTodos) => [...prevTodos, data]);
      return { success: true, message: response.data.message };
    } catch (error) {
      return { success: false, message: error.response.data.error };
    } finally {
      setLoading(false);
    }
  };

  return { saveTodo, loading };
};

export default useAddTodo;
