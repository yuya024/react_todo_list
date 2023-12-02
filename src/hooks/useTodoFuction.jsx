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
  const [todos, setTodos] = useState([]);

  const changeText = (e) => setText(e.target.value);

  const addTodo = () => {
    if (text === "") return;

    let addTodo = { ...taskObj, id, text };
    setTodos([...todos, addTodo]);
    setText("");
    setId((prevCount) => prevCount + 1);
  };

  const changeTodos = (id, e) => {
    const { name, value } = e.target;

    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) => {
        if (prevTodo.id === id) {
          return {
            ...prevTodo,
            [name]: name === "text" ? value : !prevTodo[name],
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
    changeTodos,
    deleteTodo,
  };
};
