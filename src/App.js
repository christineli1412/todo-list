import { useState } from "react";
import TodoList from "./TodoList";
import TodoEntryForm from "./TodoEntryForm";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "Meet Masao for Udon" },
    { id: 2, content: "Fix React notes" },
  ]);
  function addTodo(todo) {
    setTodos([...todos, todo]);
  }
  function deleteTodo(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }
  return (
    <div className="App">
      <h1> Things To Do</h1>
      <TodoList todos={todos} deleter={deleteTodo} />
      <TodoEntryForm adder={addTodo} />
    </div>
  );
}
