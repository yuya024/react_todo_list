import "./App.css";

import { InputTodo } from "./components/InputTodo";
import { TodoState } from "./components/TodoState";
import { TodoList } from "./components/TodoList";
import { useTodoFuction } from "./hooks/useTodoFuction";

export default function Todo() {
  const { text, todos, changeText, addTodo, changeTodos, deleteTodo } =
    useTodoFuction();

  return (
    <div>
      <header>React Todoアプリ</header>

      <InputTodo
        text={text}
        onChangeText={(e) => changeText(e)}
        onClickAddTodo={() => addTodo()}
      />

      <div className="todo-area">
        <div className="todo-status">
          <h2>Todo List</h2>
          <TodoState todos={todos} />
        </div>

        <TodoList
          todos={todos}
          onChangeTodos={(id, e) => changeTodos(id, e)}
          onClickDelete={(id) => deleteTodo(id)}
        />
      </div>
    </div>
  );
}
