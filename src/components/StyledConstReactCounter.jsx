import { useState } from "react";

function StyledConstReactCounter() {
  const [count, setCount] = useState(0);

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
  };

  const buttonHoverStyles = {
    backgroundColor: '#add8e6',
  };

  const spanStyles = {
    margin: '0 1rem',
  };

  return (
    <div style={divStyles}>
      <button
        style={{ ...buttonStyles}}
        onClick={handleIncrement}
        onMouseOver={() => buttonStyles.backgroundColor = '#add8e6'}
        onMouseOut={() => buttonStyles.backgroundColor = '#eee'}
      >
        +
      </button>
      <span style={spanStyles}>{count}</span>
      <button
        style={{ ...buttonStyles}}
        onClick={handleDecrement}
        onMouseOver={() => buttonStyles.backgroundColor = '#add8e6'}
        onMouseOut={() => buttonStyles.backgroundColor = '#eee'}
      >
        -
      </button>
    </div>
  );
}

export default StyledConstReactCounter;
