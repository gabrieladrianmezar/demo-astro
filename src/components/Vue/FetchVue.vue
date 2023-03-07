<template>
    <div>
        <ul v-if="showComponent">
            <li v-for="user in users" :key="user.id">{{ user.name }}</li>
        </ul>
        <button v-bind:style="{ backgroundColor: showComponent ? 'red' : 'green' }"
                @click="showComponent = !showComponent">{{ showComponent ? 'Ocultar' : 'Mostrar' }}</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: [],
        showComponent: false,
      };
    },
    async mounted() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      this.users = await response.json();
    },
  };
  </script>
  