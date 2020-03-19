import React, { useRef } from "react";
import { TodoProps } from "../App";

interface TodoInputProps {
  handleAddTodos: (todo: TodoProps) => void;
}

const TodoInput: React.FC<TodoInputProps> = props => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const inputValue = textInputRef.current!.value;
    const newTodo: TodoProps = {
      id: Math.floor(Math.random() * 11),
      label: inputValue,
      done: false
    };

    props.handleAddTodos(newTodo);
    textInputRef.current!.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="todo-text">What do you need done?</label>
        <input type="text" name="todo-text" ref={textInputRef} />
      </div>

      <button type="submit">Add to list</button>
    </form>
  );
};

export default TodoInput;
