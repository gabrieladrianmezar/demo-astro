import { createSignal } from "solid-js";

function TodoSolid() {
  const [todos, setTodos] = createSignal([]);
  const [newTodo, setNewTodo] = createSignal("");

  const addTodo = () => {
    setTodos([...todos(), newTodo()]);
    setNewTodo("");
  };

  return (
    <div>
      <ul>
        {todos().map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <input value={newTodo()} onInput={(e) => setNewTodo(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default TodoSolid;
