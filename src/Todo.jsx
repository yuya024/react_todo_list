import "./App.css";

import { InputTodo } from "./components/InputTodo";
import { TodoState } from "./components/TodoState";
import { TodoList } from "./components/TodoList";
import { useTodoFuction } from "./hooks/useTodoFuction";

export default function Todo() {
  const { text, todos, changeText, addTodo, changeProp, editText, deleteTodo } =
    useTodoFuction();

  const todosCount = todos.length;
  const completedCount = todos.filter((todo) => todo.isCompleted).length;
  const notCompletedCount = todosCount - completedCount;

  const onChangeText = (e) => changeText(e);

  const onClickAddTodo = () => addTodo();

  const onChangeProp = (id, name) => changeProp(id, name);

  const onChangeEditText = (id, e) => editText(id, e);

  const onClickDelete = (id) => deleteTodo(id);

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
          <TodoState
            todosCount={todosCount}
            completedCount={completedCount}
            notCompletedCount={notCompletedCount}
          />
        </div>

        <TodoList
          todos={todos}
          onChangeProp={onChangeProp}
          onChangeEditText={onChangeEditText}
          onClickDelete={onClickDelete}
        />
      </div>
    </div>
  );
}
