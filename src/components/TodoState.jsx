export const TodoState = (props) => {
  const { todos, completed } = props;

  return (
    <span>{`全てのタスク: ${todos} 完了済み: ${completed} 未完了: ${
      todos - completed
    }`}</span>
  );
};
