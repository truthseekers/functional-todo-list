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

function TodoItem(props) {
  return <li>Todo Item: {props.title}</li>;
}

function TodoList(props) {
  const todos = [];
  props.todos.map((elem) => {
    todos.push(<TodoItem key={elem.id} title={elem.title} />);
  });

  return (
    <div>
      <h3>todo List items:</h3>
      <ul>{todos}</ul>
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [textField, setTextField] = useState("");

  const handleNameFieldChange = (event) => {
    setTextField(event.target.value);
  };

  <form>
    <label>
      <input
        type="text"
        placeholder="Todo Item"
        value={textField}
        onChange={handleNameFieldChange}
        name="name"
      />
    </label>
  </form>;
  return (
    <div className="App">
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
