import React, { useState } from 'react';
import Keyboard from './Keyboard';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');

  const handleKeyPress = (key) => {
    if (key === 'Backspace') {
      setInput(input.slice(0, -1));
    } else if (key === 'Enter') {
      console.log('Submitted:', input);
    } else {
      setInput(input + key);
    }
  };

  return (
    <div className="app">
      <div className="header">
        <div className="display">{input}</div>
        <div className="title">Website Title</div>
      </div>
      <Keyboard onClick={handleKeyPress} />
    </div>
  );
};

export default App;
