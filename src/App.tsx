import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./features/counter/counter";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { addTodo, deleteTodo } from "./features/todos/todoSlice";
import { RootState } from "./types";

const App: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos);

  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const addTodoHandler = (inputText: string) => {
    dispatch(addTodo({ id: count + 1, textInput: inputText })); // Dispatch the addTodo action
    setCount(count + 1);
  };

  const deleteTodoHandler = (id: number) => {
    dispatch(deleteTodo(id)); // Dispatch the deleteTodo action
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
      <TodoForm onAdddTodo={addTodoHandler} />
      <TodoList items={todos} onDeleteTodo={deleteTodoHandler} />
    </>
  );
};

export default App;
