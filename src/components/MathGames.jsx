import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const games = [
  { title: "Addition Adventure", description: "Practice addition with a fun adventure game!" },
  { title: "Subtraction Safari", description: "Go on a safari and learn subtraction along the way!" },
  { title: "Multiplication Mania", description: "Multiply your way to victory in this exciting game!" },
];

const MathGames = ({ onClose }) => {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <div className="bg-pink-800 p-6 rounded-lg">
      <h2 className="text-2xl font-cinzel mb-4">Math Games</h2>
      {selectedGame ? (
        <div>
          <h3 className="text-xl mb-2">{selectedGame.title}</h3>
          <p className="mb-4">{selectedGame.description}</p>
          <Button onClick={() => setSelectedGame(null)} className="bg-yellow-500 text-pink-900">
            Back to Games List
          </Button>
        </div>
      ) : (
        <ul className="space-y-4">
          {games.map((game, index) => (
            <li key={index} className="bg-pink-700 p-4 rounded">
              <h3 className="font-bold mb-2">{game.title}</h3>
              <p className="text-sm mb-2">{game.description}</p>
              <Button onClick={() => setSelectedGame(game)} className="bg-yellow-500 text-pink-900">
                Play Now
              </Button>
            </li>
          ))}
        </ul>
      )}
      <Button onClick={onClose} className="mt-4 bg-purple-600">Back to Learning</Button>
    </div>
  );
};

export default MathGames;