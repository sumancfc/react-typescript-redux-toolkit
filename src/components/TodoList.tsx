import React from "react";

interface TodoListProps {
  items: { id: number; textInput: string }[];
  onDeleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, onDeleteTodo }) => {
  return (
    <>
      <h1>Todo List</h1>
      <ul className='todo-list'>
        {items.map((item) => (
          <li key={item.id}>
            {item.id}. {item.textInput}
            <button
              onClick={() => onDeleteTodo(item.id)}
              className='delete-button'
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
