import React from 'react';
import { Card } from './Card';
import { CardType } from '../types/game';

type GameBoardProps = {
  cards: string[];
  flippedIndices: number[];
  matchedPairs: string[];
  onCardClick: (index: number) => void;
};

export function GameBoard({ 
  cards, 
  flippedIndices, 
  matchedPairs, 
  onCardClick 
}: GameBoardProps) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {cards.map((animal, index) => (
        <Card
          key={index}
          animal={animal}
          isFlipped={flippedIndices.includes(index)}
          isMatched={matchedPairs.includes(animal)}
          onClick={() => onCardClick(index)}
        />
      ))}
    </div>
  );
}