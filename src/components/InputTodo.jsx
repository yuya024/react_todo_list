export const InputTodo = (props) => {
  const { text, onChangeText, onClickAddTodo } = props;

  return (
    <div className="input-area">
      <input
        id="input-todo"
        type="text"
        value={text}
        onChange={onChangeText}
        placeholder="TODOを入力"
      />
      <button onClick={onClickAddTodo}>保存</button>
    </div>
  );
};
