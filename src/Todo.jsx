import { useEffect, useState } from "react";
import "./App.css";

import { InputTodo } from "./components/InputTodo";
import { TodoState } from "./components/TodoState";

export default function Todo() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [tasksState, setTasksState] = useState([]);
  const [isEdit, setIsEdit] = useState([]);
  const [completedNum, setCompletedNum] = useState(0);
  const [editTodos, setEditTodos] = useState([]);

  const onChangeText = (e) => setText(e.target.value);

  const onClickAddTodo = () => {
    if (text === "") return;
    const newTodos = [...todos, text];
    setTodos(newTodos);
    setText("");

    const newTasksState = [...tasksState, false];
    setTasksState(newTasksState);

    const newIsEdit = [...isEdit, false];
    setIsEdit(newIsEdit);

    const newEditTodos = [...editTodos, ""];
    setEditTodos(newEditTodos);
  };

  const onChangeTaskStatus = (index) => {
    let newTasksState = [...tasksState];
    newTasksState[index] = !newTasksState[index];
    setTasksState(newTasksState);
  };

  useEffect(() => {
    let complete = 0;
    tasksState.forEach((state) => {
      if (state === true) complete++;
    });
    setCompletedNum(complete);
  }, [tasksState]);

  const onClickEdit = (index, todo) => {
    let newIsEdit = [...isEdit];
    newIsEdit[index] = !newIsEdit[index];
    setIsEdit(newIsEdit);

    let newEditTodos = [...todos];
    newEditTodos[index] = todo;
    setEditTodos(newEditTodos);
  };

  const onChangeEditText = (e, index) => {
    let newEditTodos = [...editTodos];
    newEditTodos[index] = e.target.value;
    setEditTodos(newEditTodos);
  };

  const onClickSave = (index) => {
    let newTodos = [...todos];
    newTodos[index] = editTodos[index];
    setTodos(newTodos);

    let newEditTodos = [...editTodos];
    newEditTodos[index] = "";
    setEditTodos(newEditTodos);

    let newIsEdit = [...isEdit];
    newIsEdit[index] = !newIsEdit[index];
    setIsEdit(newIsEdit);
  };

  const onClickDelete = (index) => {
    if (window.confirm("本当によろしいですか？")) {
      let newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);

      let newTaskState = [...tasksState];
      newTaskState.splice(index, 1);
      setTasksState(newTaskState);

      let newIsEdit = [...isEdit];
      newIsEdit.splice(index, 1);
      setIsEdit(newIsEdit);

      let newEditTodos = [...editTodos];
      newEditTodos.splice(index, 1);
      setEditTodos(newEditTodos);
    }
  };

  return (
    <div>
      <header>React Todoアプリ</header>

      <InputTodo
        text={text}
        onChangeText={onChangeText}
        onClickAddTodo={onClickAddTodo}
      />

      <div className="todo-area">
        <div className="todo-status">
          <h2>Todo List</h2>
          <TodoState todos={todos.length} completed={completedNum} />
        </div>

        <div>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  onChange={() => onChangeTaskStatus(index)}
                />
                {!isEdit[index] ? (
                  <label>{todo}</label>
                ) : (
                  <input
                    type="text"
                    value={editTodos[index]}
                    onChange={(e) => onChangeEditText(e, index)}
                  />
                )}
                {!isEdit[index] && (
                  <button onClick={() => onClickEdit(index, todo)}>編集</button>
                )}
                {!isEdit[index] && (
                  <button onClick={() => onClickDelete(index)}>削除</button>
                )}
                {isEdit[index] && (
                  <button onClick={() => onClickSave(index)}>保存</button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
