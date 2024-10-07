import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const puzzles = [
  { question: "If you have 3 apples and get 2 more, how many do you have?", answer: 5 },
  { question: "What number comes next: 2, 4, 6, __?", answer: 8 },
  { question: "If a triangle has 3 sides, how many sides do 2 triangles have?", answer: 6 },
];

const MathPuzzles = ({ onClose }) => {
  const [currentPuzzle, setCurrentPuzzle] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (parseInt(userAnswer) === puzzles[currentPuzzle].answer) {
      setMessage('Correct! Great job!');
    } else {
      setMessage('Not quite. Try again!');
    }
  };

  const nextPuzzle = () => {
    setCurrentPuzzle((prev) => (prev + 1) % puzzles.length);
    setUserAnswer('');
    setMessage('');
  };

  return (
    <div className="bg-orange-800 p-6 rounded-lg">
      <h2 className="text-2xl font-cinzel mb-4">Math Puzzles</h2>
      <p className="mb-4">{puzzles[currentPuzzle].question}</p>
      <input
        type="number"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        className="bg-orange-700 text-white p-2 rounded mr-2"
        placeholder="Your answer"
      />
      <Button onClick={handleSubmit} className="bg-green-600">
        Submit
      </Button>
      {message && <p className="mt-4">{message}</p>}
      <Button onClick={nextPuzzle} className="mt-4 bg-yellow-500 text-orange-900">
        Next Puzzle
      </Button>
      <Button onClick={onClose} className="mt-4 ml-2 bg-purple-600">Back to Learning</Button>
    </div>
  );
};

export default MathPuzzles;