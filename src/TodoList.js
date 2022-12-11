export default function TodoList({ todos, deleter }) {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div key={todo.id}>
          <span onClick={() => deleter(todo.id)}>{todo.content}</span>
        </div>
      );
    })
  ) : (
    <p>No todos</p>
  );
  return <div>{todoList}</div>;
}
