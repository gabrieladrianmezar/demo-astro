import { useState } from "react";

function StyledConstReactCounter() {
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const divStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    fontSize: '2rem',
  };

  const buttonStyles = {
    width: '2rem',
    height: '2rem',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '0.25rem',
    backgroundColor: '#eee',
    cursor: 'pointer',
    backgroundColor: isHovered ? '#add8e6' : '#eee',
  };

  const spanStyles = {
    margin: '0 1rem',
  };

  return (
    <div className={divStyles}>
      <button 
        className={buttonStyles} 
        onClick={handleIncrement} 
        onMouseOver={() => setIsHovered(true)} 
        onMouseOut={() => setIsHovered(false)}>
        +
      </button>
      <span className={spanStyles}>{count}</span>
      <button
        className={buttonStyles}
        onClick={handleDecrement}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}>
        -
      </button>
    </div>
  );
}

export default StyledConstReactCounter;