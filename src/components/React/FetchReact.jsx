import React, { useState, useEffect } from "react";

function Fetch() {
  const [users, setUsers] = useState([]);
  const [showComponent, setShowComponent] = useState(false);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
        {showComponent ? (
            <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
            </ul>
            ) : null}
            <button style={showComponent ? {backgroundColor: "red"}: {backgroundColor: "green"}} onClick={() => setShowComponent(!showComponent)}>
        {showComponent ? "Ocultar" : "Mostrar"}
        </button>
    </div>
  );
}

export default Fetch;
