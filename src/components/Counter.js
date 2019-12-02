import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (    
      <label>
        Number:
        <input           
          type="text"
          autoFocus 
          value={count}
          onChange={e => setCount(Number(e.target.value))}
        />
    <div>
      <p>Le compteur est  à : {count} </p>
      <button onClick={() => setCount(count +1)}>
        +1
      </button>
      <button onClick={() => setCount(count -1)}>
        -1
      </button>
    </div>
    </label>
  );
}

export default Counter;