import { useState } from "react";
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 2rem;
`;

const Button = styled.button`
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #eee;
  cursor: pointer;
  &:hover {
    background-color: #add8e6;
  }
`;

const Span = styled.span`
  margin: 0 1rem;
`;

function StyledSCReactCounter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <Div>
      <Button onClick={handleIncrement}>+</Button>
      <Span>{count}</Span>
      <Button onClick={handleDecrement}>-</Button>
    </Div>
  );
}

export default StyledSCReactCounter;
