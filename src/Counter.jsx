import { useState } from "react";
function Counter() {
    const [count, setCount] = useState(0);
  
    const increment = () => setCount(count + 1);
    const decrement = () => {
      if (count > 0) setCount(count - 1);
    };
  
    return (
      <div>
        <p>Current count: {count}</p>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
      </div>
    );
  }
  export default Counter;
  