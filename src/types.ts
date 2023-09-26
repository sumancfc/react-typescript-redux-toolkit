export interface RootState {
  todos: Todo[];
}

export interface Todo {
  id: number;
  textInput: string;
}

export interface CounterState {
  value: number;
}

export interface TodoListProps {
  items: { id: number; textInput: string }[];
  onDeleteTodo: (id: number) => void;
}

export interface TodoFormProps {
  onAdddTodo: (inputText: string) => void;
}
