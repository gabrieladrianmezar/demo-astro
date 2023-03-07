<script>
    import { onMount } from 'svelte';
  
    let users = [];
    let showComponent = false;

    onMount(async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      users = await response.json();
    });

    function toggleComponent() {
        showComponent = !showComponent;
    }
  </script>
  
  {#if showComponent}
    <ul>
        {#each users as user}
        <li>{user.name}</li>
        {/each}
    </ul>
  {/if}

  <button 
    on:click={toggleComponent}
    class:selected={showComponent}
    class:not-selected={!showComponent}>
    {showComponent ? 'Ocultar' : 'Mostrar'}
  </button>
  
  <style>
    .selected {
        background-color: red;
    }

    .not-selected {
        background-color: green;
    }
  </style>