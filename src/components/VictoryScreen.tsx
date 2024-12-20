import React from 'react';
import { Trophy } from 'lucide-react';

type VictoryScreenProps = {
  moves: number;
  onReset: () => void;
};

export function VictoryScreen({ moves, onReset }: VictoryScreenProps) {
  return (
    <div className="text-center p-8 bg-white rounded-xl shadow-lg">
      <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
      <h2 className="text-3xl font-bold text-green-600 mb-4">
        Tebrikler! Kazandınız! 🎉
      </h2>
      <p className="text-gray-600 mb-4">
        {moves} hamlede oyunu tamamladınız
      </p>
      <button
        onClick={onReset}
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors"
      >
        Tekrar Oyna
      </button>
    </div>
  );
}