import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const CountingBeans = ({ onClose }) => {
  const [beanCount, setBeanCount] = useState(generateBeanCount());
  const [userGuess, setUserGuess] = useState('');
  const [message, setMessage] = useState('');

  function generateBeanCount() {
    return Math.floor(Math.random() * 20) + 1;
  }

  const handleGuess = () => {
    const guess = parseInt(userGuess);
    if (guess === beanCount) {
      setMessage('Correct! Great job counting!');
    } else {
      setMessage(`Not quite. There are ${beanCount} beans. Try again!`);
    }
  };

  return (
    <div className="bg-yellow-800 p-6 rounded-lg">
      <h2 className="text-2xl font-cinzel mb-4">Counting Beans</h2>
      <div className="mb-4">
        {Array.from({ length: beanCount }).map((_, index) => (
          <span key={index} role="img" aria-label="bean" className="text-2xl">
            🫘
          </span>
        ))}
      </div>
      <input
        type="number"
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)}
        className="bg-yellow-700 text-white p-2 rounded mr-2"
        placeholder="How many beans?"
      />
      <Button onClick={handleGuess} className="bg-green-600">
        Guess
      </Button>
      {message && <p className="mt-4">{message}</p>}
      <Button onClick={onClose} className="mt-4 bg-purple-600">Back to Challenges</Button>
    </div>
  );
};

export default CountingBeans;