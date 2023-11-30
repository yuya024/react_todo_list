export const TodoList = (props) => {
  const { todos, onChangeProp, onChangeEditText, onClickDelete } = props;

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              name="isCompleted"
              onChange={(e) => onChangeProp(todo.id, e.target.name)}
            />
            {!todo.isEdit ? (
              <label>{todo.text}</label>
            ) : (
              <input
                type="text"
                name="text"
                value={todo.text}
                onChange={(e) => onChangeEditText(todo.id, e)}
              />
            )}
            {!todo.isEdit && (
              <button
                name="isEdit"
                onClick={(e) => onChangeProp(todo.id, e.target.name)}
              >
                編集
              </button>
            )}
            {!todo.isEdit && (
              <button onClick={() => onClickDelete(todo.id)}>削除</button>
            )}
            {todo.isEdit && (
              <button
                name="isEdit"
                onClick={(e) => onChangeProp(todo.id, e.target.name)}
              >
                保存
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
