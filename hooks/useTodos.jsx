import { useState, useEffect } from "react";
import axiosInstance from "../services/axiosInstance"; // Import axiosInstance
import toast from "react-hot-toast";
import { currentTodosSelector } from "../store/selectors";
import { useRecoilState } from "recoil";

const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentTodos, setCurrentTodos] = useRecoilState(currentTodosSelector);

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get("/todo/all");
        // console.log("Client", response.data.todos);
        setTodos(response.data.todos);
        setCurrentTodos(response.data.todos);
        setError(null);
      } catch (error) {
        if (error.response) {
          setError(error.response.data.message || "An error occurred");
          toast.error(error.response.data.message || "An error occurred", {
            duration: 600,
          });
        } else if (error.request) {
          setError("No response received from server");
          toast.error("No response received from server", {
            duration: 600,
          });
        } else {
          setError("Error: " + error.message);
          toast.error("Error: " + error.message, {
            duration: 600,
          });
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  console.log("Before returning", todos);
  return { todos, loading, error, setError };
};

export default useTodos;
