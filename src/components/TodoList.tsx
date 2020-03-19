import React from "react";
import { TodoProps } from "../App";

interface TodoListProps {
  items: TodoProps[];
  handleDeleteTodos: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = props => {
  return (
    <ul>
      {props.items.map(todo => (
        <span>
          <li key={todo.id}>{todo.label}</li>
          <button onClick={props.handleDeleteTodos.bind(null, todo.id)}>
            Delete
          </button>
        </span>
      ))}
    </ul>
  );
};

export default TodoList;
