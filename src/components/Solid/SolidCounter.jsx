import { createSignal } from 'solid-js';

function SolidCounter() {
  const [count, setCount] = createSignal(0);

  const increment = () => {
    setCount(count() + 1);
  };

  const decrement = () => {
    setCount(count() - 1);
  };

  return (
    <div>
      <button onClick={increment}>+</button>
      <span>{count()}</span>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default SolidCounter;