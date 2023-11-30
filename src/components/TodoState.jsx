export const TodoState = (props) => {
  const { todosCount, completedCount, notCompletedCount } = props;

  return (
    <span>{`全てのタスク: ${todosCount} 完了済み: ${completedCount} 未完了: ${notCompletedCount}`}</span>
  );
};
