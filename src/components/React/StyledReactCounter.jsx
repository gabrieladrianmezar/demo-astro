import { useState } from "react";
import styles from "./StyledReactCounter.module.css";

function StyledReactCounter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className={styles.div}>
      <button className={styles.button} onClick={handleIncrement}>+</button>
      <span className={styles.span}>{count}</span>
      <button className={styles.button} onClick={handleDecrement}>-</button>
    </div>
  );
}

export default StyledReactCounter