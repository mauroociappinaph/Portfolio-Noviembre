
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const TicTacToe = () => {
  const [name, setName] = useState('');
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);

  useEffect(() => {
    // Leer el nombre de localStorage si no hay nombre en el estado global
    const storedName = localStorage.getItem('name');
    if (storedName && !name) {
      setName(storedName);
    }

    // Actualizar localStorage si hay un nombre en el estado
    if (name) {
      localStorage.setItem('name', name);
    }

    // Ejecutar el autoplay si el juego no ha terminado y no es el turno de X
    if (!isXNext && !winner) {
      const timer = setTimeout(() => {
        autoplay();
      }, 500); // Ajusta el retraso según lo necesario
      return () => clearTimeout(timer);
    }
  }, [isXNext, board, winner, name]);

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const autoplay = () => {
    const bestMove = findBestMove(board);
    handleClick(bestMove);
  };

  const findBestMove = (board) => {
    const emptyIndices = board.reduce((acc, value, index) => {
      if (!value) acc.push(index);
      return acc;
    }, []);

    // Agrega un 70% de probabilidad de ganar para el jugador 'O'
    if (Math.random() < 0.7) {
      let bestMove = emptyIndices[0];
      let bestScore = -Infinity;

      emptyIndices.forEach((index) => {
        const newBoard = board.slice();
        newBoard[index] = 'O';
        const score = minimax(newBoard, false);
        if (score > bestScore) {
          bestScore = score;
          bestMove = index;
        }
      });

      return bestMove;
    } else {
      // Selecciona un movimiento aleatorio si no se elige la opción óptima
      return emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    }
  };

  const minimax = (board, isMaximizing) => {
    const winner = calculateWinner(board);
    if (winner === 'O') return 10;
    if (winner === 'X') return -10;
    if (board.every((square) => square)) return 0;

    if (isMaximizing) {
      let bestScore = -Infinity;
      board.forEach((square, index) => {
        if (!square) {
          const newBoard = board.slice();
          newBoard[index] = 'O';
          const score = minimax(newBoard, false);
          bestScore = Math.max(score, bestScore);
        }
      });
      return bestScore;
    } else {
      let bestScore = Infinity;
      board.forEach((square, index) => {
        if (!square) {
          const newBoard = board.slice();
          newBoard[index] = 'X';
          const score = minimax(newBoard, true);
          bestScore = Math.min(score, bestScore);
        }
      });
      return bestScore;
    }
  };

  const renderSquare = (index) => (
    <button className="square" onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const displayWinner = winner === name ? 'Mauro' : winner;

  return (
    <div className="tic-tac-toe">
      <h1 className="text-center text-3xl font-bold mb-4">Desafío</h1>
      <div className="status">
        {winner ? `Ganador: ${displayWinner}` : `Siguiente Jugador: ${isXNext ? name : 'Mauro'}`}
      </div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button className="reset-button" onClick={resetGame}>Reiniciar Juego</button>
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default TicTacToe;