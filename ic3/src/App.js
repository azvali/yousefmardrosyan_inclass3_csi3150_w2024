import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div className='appContainer'>
      <div className='display'>
        <div className='displayCount'>
          {counter}
        </div>
        <div className='buttons'>
          <button className='decrement' onClick={decrementCounter}>-</button>
          <button className='increment' onClick={incrementCounter}>+</button>
          
        </div>
        </div>
    </div>
  );
}

export default App;
