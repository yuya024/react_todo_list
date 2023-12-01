export const TodoList = (props) => {
  const { todos, onChangeTodos, onClickDelete } = props;

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              name="isCompleted"
              onChange={(e) => onChangeTodos(todo.id, e)}
            />
            {!todo.isEdit ? (
              <label>{todo.text}</label>
            ) : (
              <input
                type="text"
                name="text"
                value={todo.text}
                onChange={(e) => onChangeTodos(todo.id, e)}
              />
            )}
            {!todo.isEdit && (
              <button name="isEdit" onClick={(e) => onChangeTodos(todo.id, e)}>
                編集
              </button>
            )}
            {!todo.isEdit && (
              <button onClick={() => onClickDelete(todo.id)}>削除</button>
            )}
            {todo.isEdit && (
              <button name="isEdit" onClick={(e) => onChangeTodos(todo.id, e)}>
                保存
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
