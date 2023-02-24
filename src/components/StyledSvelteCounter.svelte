<script>
  let count = 0;

  const increment = () => {
    count += 1;
  }

  function decrement() {
    count -= 1;
  }
</script>

<div>
  <button on:click={increment}>+</button>
  <span>{count}</span>
  <button on:click={decrement}>-</button>
</div>

<style lang="scss">
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
      background-color: #ff8b28;
    }	
  }
  span {
    margin: 0 1rem;
  }
</style>