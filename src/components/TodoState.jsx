export const TodoState = (props) => {
  const { todos } = props;

  const todosCount = todos.length;
  const completedCount = todos.filter((todo) => todo.isCompleted).length;
  const notCompletedCount = todosCount - completedCount;

  return (
    <span>{`全てのタスク: ${todosCount} 完了済み: ${completedCount} 未完了: ${notCompletedCount}`}</span>
  );
};
