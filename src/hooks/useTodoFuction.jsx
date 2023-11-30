import { useState } from "react";

export const useTodoFuction = () => {
  const taskObj = {
    id: 0,
    text: "",
    isCompleted: false,
    isEdit: false,
  };
  const [text, setText] = useState("");
  const [id, setId] = useState(1);
  const [newTodo, setNewTodo] = useState(taskObj);
  const [todos, setTodos] = useState([]);

  const changeText = (e) => setText(e.target.value);

  const addTodo = () => {
    if (text === "") return;

    let addTodo = { ...newTodo, id, text };
    setTodos([...todos, addTodo]);
    setText("");
    setId((prevCount) => prevCount + 1);
  };

  const changeProp = (id, name) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) => {
        if (prevTodo.id === id) {
          return {
            ...prevTodo,
            [name]: !prevTodo[name],
          };
        }
        return prevTodo;
      })
    );
  };

  const editText = (id, e) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) => {
        if (prevTodo.id === id) {
          return {
            ...prevTodo,
            text: e.target.value,
          };
        }
        return prevTodo;
      })
    );
  };

  const deleteTodo = (id) => {
    if (window.confirm("本当によろしいですか？")) {
      setTodos((prevTodos) => {
        return prevTodos.filter((prevTodo) => prevTodo.id !== id);
      });
    }
  };

  return {
    text,
    todos,
    changeText,
    addTodo,
    changeProp,
    editText,
    deleteTodo,
  };
};
