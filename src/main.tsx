import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
import TodoList from "./components/TodoList.tsx";
import App from "./App.tsx";
import "./index.css";

const todoItems = [{ id: 1, textInput: "Todo One" }];

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/todos",
    element: <TodoList items={todoItems} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
