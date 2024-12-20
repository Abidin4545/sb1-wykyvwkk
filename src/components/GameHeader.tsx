import React from 'react';

type GameHeaderProps = {
  moves: number;
  onReset: () => void;
};

export function GameHeader({ moves, onReset }: GameHeaderProps) {
  return (
    <>
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        🎮 Hafıza Oyunu
      </h1>
      
      <div className="flex justify-between items-center mb-8">
        <p className="text-lg font-semibold text-purple-600">
          Hamle Sayısı: {moves}
        </p>
        <button
          onClick={onReset}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Yeni Oyun
        </button>
      </div>
    </>
  );
}