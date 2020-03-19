export interface TodoProps {
  id: number;
  label: string;
  done: boolean;
}

export interface TodoInputProps {
  handleAddTodos: (todo: TodoProps) => void;
}

export interface TodoListProps {
  items: TodoProps[];
  handleDeleteTodos: (id: number) => void;
}
