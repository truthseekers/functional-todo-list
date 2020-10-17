import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const initialTodos = [
  {
    id: 0,
    title: "Buy Radishes",
    isCompleted: true,
  },
  {
    id: 1,
    title: "Buy mountain bike",
    isCompleted: false,
  },
];

function TodoList(props) {
  return <div>todo List items:</div>;
}

function App() {
  const [todos, setTodos] = useState(initialTodos);
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
