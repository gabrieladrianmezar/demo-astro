import { createSignal, onMount } from "solid-js";

function FetchSolid() {
  const [users, setUsers] = createSignal([]);
  const [showComponent, setShowComponent] = createSignal(false);

  onMount(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  });

  return (
    <ul>
<div>
      {showComponent() ? (
        <ul>
          {users().map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
      <button onClick={() => setShowComponent(!showComponent())} style={showComponent() ? { "background-color": "red" } : { "background-color": "green" }}>
        {showComponent() ? "Ocultar" : "Mostrar"}
      </button>
    </div>
    </ul>
  );
}

export default FetchSolid;
