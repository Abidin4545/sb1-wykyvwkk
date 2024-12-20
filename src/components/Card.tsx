import React from 'react';
import { ANIMAL_ICONS } from '../constants/animals';

type CardProps = {
  animal: string;
  isFlipped: boolean;
  isMatched: boolean;
  onClick: () => void;
};

export function Card({ animal, isFlipped, isMatched, onClick }: CardProps) {
  const AnimalIcon = ANIMAL_ICONS[animal as keyof typeof ANIMAL_ICONS];

  return (
    <div
      onClick={!isFlipped && !isMatched ? onClick : undefined}
      className={`relative w-24 h-24 cursor-pointer transition-transform duration-500 transform ${
        isFlipped ? 'rotate-y-180' : ''
      }`}
    >
      <div
        className={`absolute w-full h-full rounded-xl ${
          isMatched ? 'bg-green-100' : 'bg-white'
        } shadow-lg flex items-center justify-center transform ${
          isFlipped ? 'rotate-y-180' : ''
        } transition-all duration-500 border-2 ${
          isMatched ? 'border-green-400' : 'border-blue-300'
        } hover:border-blue-400`}
      >
        {isFlipped && (
          <AnimalIcon
            className={`w-12 h-12 ${isMatched ? 'text-green-500' : 'text-blue-500'}`}
          />
        )}
      </div>
      {!isFlipped && (
        <div className="absolute w-full h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center justify-center text-3xl text-white font-bold">
          ?
        </div>
      )}
    </div>
  );
}