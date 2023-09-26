import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./features/counter/counter";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

interface Todo {
  id: number;
  textInput: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const [count, setCount] = useState(0);

  const addTodo = (inputText: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: count + 1, textInput: inputText },
    ]);
    setCount(count + 1);
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <Counter />
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
      <TodoForm onAdddTodo={addTodo} />
      <TodoList items={todos} onDeleteTodo={deleteTodo} />
    </>
  );
};

export default App;
