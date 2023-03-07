<script>
    let todos = [];
    let newTodo = "";
  
    function addTodo() {
      todos = [...todos, newTodo];
      newTodo = "";
    }
  </script>
  
  <div>
    <ul>
      {#each todos as todo, index}
        <li key={index}>{todo}</li>
      {/each}
    </ul>
    <input bind:value={newTodo} />
    <button on:click={addTodo}>Add Todo</button>
  </div>
  