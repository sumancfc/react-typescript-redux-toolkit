import React, { useRef } from "react";

interface TodoFormProps {
  onAdddTodo: (inputText: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdddTodo }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInputRef.current!.value;
    onAdddTodo(enteredText);
  };

  return (
    <div className='todo-form'>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Add a new TODO' ref={textInputRef} />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
