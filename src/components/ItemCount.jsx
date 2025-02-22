import React, { useState } from 'react';

function ItemCount({ initial = 1, stock }) {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span style={{ margin: '0 10px' }}>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default ItemCount;
