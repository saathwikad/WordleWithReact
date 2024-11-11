import React, { useState } from 'react';

const letters = [
  ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'Enter', 'Backspace'
];

const Keyboard = ({ onClick, typedLetters }) => {
  return (
    <div className="keyboard">
      {letters.map((letter) => (
        <button
          key={letter}
          className={`key ${letter === 'Enter' || letter === 'Backspace' ? 'special' : 'letter'} ${typedLetters.includes(letter) ? 'typed' : ''}`}
          onClick={() => onClick(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

const App = () => {
  const [input, setInput] = useState('');
  const [typedLetters, setTypedLetters] = useState([]);

  const handleKeyPress = (key) => {
    if (key === 'Backspace') {
      setInput(input.slice(0, -1));
      setTypedLetters(typedLetters.slice(0, -1));
    } else if (key === 'Enter') {
      console.log('Submitted:', input);
      setInput('');
      setTypedLetters([]);
    } else {
      setInput(input + key);
      setTypedLetters([...typedLetters, key]);
    }
  };

  return (
    <div className="app">
      <div className="display">{input}</div>
      <Keyboard onClick={handleKeyPress} typedLetters={typedLetters} />
    </div>
  );
};

export default App;
