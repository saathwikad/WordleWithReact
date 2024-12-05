import React, { useState } from 'react';

const Keyboard = ({ onClick, typedLetters }) => {
  const letters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'Enter', 'Backspace'];

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

const Grid = ({ rows, cols, grid, updateGrid }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 60px)`, gap: '5px' }}>
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            style={{
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #ccc',
              fontSize: '18px',
              fontWeight: 'bold',
              backgroundColor: '#fff',
            }}
          >
            {cell}
          </div>
        ))
      )}
    </div>
  );
};

const App = () => {
  const rows = 6;
  const cols = 5;
  const [grid, setGrid] = useState(
    Array.from({ length: rows }, () => Array(cols).fill(''))
  );
  const [currentRow, setCurrentRow] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);

  const handleKeyPress = (key) => {
    if (key === 'Backspace') {
      if (currentCol > 0) {
        const newGrid = [...grid];
        newGrid[currentRow][currentCol - 1] = '';
        setGrid(newGrid);
        setCurrentCol(currentCol - 1);
      }
    } else if (key === 'Enter') {
      if (currentCol === cols) {
        setCurrentRow(currentRow + 1);
        setCurrentCol(0);
      }
    } else if (/^[A-Z]$/.test(key)) {
      if (currentCol < cols) {
        const newGrid = [...grid];
        newGrid[currentRow][currentCol] = key;
        setGrid(newGrid);
        setCurrentCol(currentCol + 1);
      }
    }
  };

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Wordle</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <Grid rows={rows} cols={cols} grid={grid} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Keyboard onClick={handleKeyPress} typedLetters={[]} />
      </div>
    </>
  );
};

export default App;
