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
    <div class='div'>
      <button class='button' onClick={increment}>+</button>
      <span class='span' >{count()}</span>
      <button class='button' onClick={decrement}>-</button>
    </div>
  );
}

const StyledCounterStyler = `
.div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 2rem;
}

.button {
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #eee;
  cursor: pointer;
}

.button:hover {
  background-color: #104a8e;
}	

.span {
  margin: 0 1rem;
}
`

const StyledSolidCounter = () => {
  return (
    <>
      <style scoped>
        {StyledCounterStyler}
      </style>
      <SolidCounter />
    </>
  );
};

export default StyledSolidCounter;