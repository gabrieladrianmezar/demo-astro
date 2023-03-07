<template>
    <div>
      <ul>
        <li v-for="(todo, index) in todos" :key="index">{{ todo }}</li>
      </ul>
      <input v-model="newTodo" />
      <button @click="addTodo">Add Todo</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        todos: [],
        newTodo: "",
      };
    },
    methods: {
      addTodo() {
        this.todos.push(this.newTodo);
        this.newTodo = "";
      },
    },
  };
  </script>
  