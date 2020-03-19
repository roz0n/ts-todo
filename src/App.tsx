import React, { useState } from "react";
import TodoList from "../src/components/TodoList";
import TodoInput from "./components/TodoInput";
import { TodoProps } from "./types";

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  const handleAddTodos = (todo: TodoProps): void => {
    setTodos([...todos, todo]);
  };

  const handleDeleteTodos = (id: number): void => {
    setTodos([...todos.filter(todo => todo.id !== id)]);
  };

  return (
    <div className="App">
      <TodoInput handleAddTodos={handleAddTodos} />
      <TodoList items={todos} handleDeleteTodos={handleDeleteTodos} />
    </div>
  );
};

export default App;
