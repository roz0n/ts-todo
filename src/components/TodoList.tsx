import React from "react";
import { TodoListProps } from "../types";

const TodoList: React.FC<TodoListProps> = props => {
  return (
    <ul>
      {props.items.map(todo => (
        <span key={todo.id}>
          <li>{todo.label}</li>
          <button onClick={props.handleDeleteTodos.bind(null, todo.id)}>
            Delete
          </button>
        </span>
      ))}
    </ul>
  );
};

export default TodoList;
