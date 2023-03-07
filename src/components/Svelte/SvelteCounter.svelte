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