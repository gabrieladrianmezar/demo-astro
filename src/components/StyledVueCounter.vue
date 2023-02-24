<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    }
  }
};
</script>

<template>
  <div>
    <button class="button" @click="increment">+</button>
    <span>{{ count }}</span>
    <button @click="decrement">-</button>
  </div>
</template>

<style lang="scss" scoped>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 2rem;
  }

  button {
    width: 2rem;
    height: 2rem;
    font-size: 1rem;
    border: none;
    border-radius: 0.25rem;
    background-color: #eee;
    cursor: pointer;

    &:hover {
      background-color: #00bf00;
    }	
  }
  span {
    margin: 0 1rem;
  }
</style>