import React, { useState, useEffect } from 'react';
import { GameBoard } from './components/GameBoard';
import { GameHeader } from './components/GameHeader';
import { VictoryScreen } from './components/VictoryScreen';
import { ANIMALS } from './constants/animals';
import { shuffleArray, createInitialCards, checkForWin } from './utils/gameUtils';

function App() {
  const [cards, setCards] = useState<string[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    setCards(shuffleArray(createInitialCards(ANIMALS)));
  };

  const handleCardClick = (index: number) => {
    if (flippedIndices.length === 2) return;
    
    setFlippedIndices([...flippedIndices, index]);
    
    if (flippedIndices.length === 1) {
      setMoves(moves + 1);
      
      if (cards[flippedIndices[0]] === cards[index]) {
        setMatchedPairs([...matchedPairs, cards[index]]);
        setFlippedIndices([]);
      } else {
        setTimeout(() => setFlippedIndices([]), 1000);
      }
    }
  };

  useEffect(() => {
    if (checkForWin(matchedPairs, ANIMALS.length)) {
      setGameWon(true);
    }
  }, [matchedPairs]);

  const resetGame = () => {
    setCards(shuffleArray(createInitialCards(ANIMALS)));
    setFlippedIndices([]);
    setMatchedPairs([]);
    setMoves(0);
    setGameWon(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 p-8">
      <div className="max-w-4xl mx-auto">
        <GameHeader moves={moves} onReset={resetGame} />
        
        {gameWon ? (
          <VictoryScreen moves={moves} onReset={resetGame} />
        ) : (
          <GameBoard
            cards={cards}
            flippedIndices={flippedIndices}
            matchedPairs={matchedPairs}
            onCardClick={handleCardClick}
          />
        )}
      </div>
    </div>
  );
}

export default App;