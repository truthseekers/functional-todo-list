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
  const updateTodo = () => {
    console.log("Updated todo item: ", props.id);
    props.updateTodo(props.id);
  };

  return (
    <li>
      <input
        type="checkbox"
        onChange={updateTodo}
        checked={props.isCompleted}
      />
      Todo Item: {props.title}
    </li>
  );
}

function TodoList(props) {
  const incompleteTodos = [];
  const completeTodos = [];
  props.todos.map((elem) => {
    if (elem.isCompleted) {
      completeTodos.push(
        <TodoItem
          key={elem.id}
          id={elem.id}
          title={elem.title}
          isCompleted={elem.isCompleted}
          updateTodo={props.updateTodo}
        />
      );
    } else {
      incompleteTodos.push(
        <TodoItem
          key={elem.id}
          id={elem.id}
          title={elem.title}
          isCompleted={elem.isCompleted}
          updateTodo={props.updateTodo}
        />
      );
    }
  });

  return (
    <div>
      <h3>Incomplete Todos:</h3>
      <ul style={{ listStyleType: "none" }}>{incompleteTodos}</ul>
      <h3>Complete Todos:</h3>
      <ul style={{ listStyleType: "none" }}>{completeTodos}</ul>
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [textField, setTextField] = useState("");

  const handleNameFieldChange = (event) => {
    setTextField(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodos = [
      ...todos,
      { id: todos.length, title: textField, isCompleted: false },
    ];
    setTodos(newTodos);
    setTextField("");
  };

  const updateTodo = (updatedId) => {
    console.log("updatedId in App()", updatedId);
    let newTodos = [...todos];
    newTodos.forEach((elem) => {
      if (elem.id == updatedId) {
        elem.isCompleted = !elem.isCompleted;
      }
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="Todo Item"
            value={textField}
            onChange={handleNameFieldChange}
            name="name"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <TodoList updateTodo={updateTodo} todos={todos} />
    </div>
  );
}

export default App;
