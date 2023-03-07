import React, { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const removeTodo = (e) => {
    const index = todos.indexOf(e.target.innerText);
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  return (
        <div>
            <ul>
                {todos.map((todo, index) => (
                <div key={index}>
                  <li>{todo}</li>
                  <button onClick={removeTodo}> X</button>
                </div>
                ))}
            </ul>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
  );
}

export default Todo;
