import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const NumberHunt = ({ onClose }) => {
  const [hiddenNumbers, setHiddenNumbers] = useState(generateHiddenNumbers());
  const [foundNumbers, setFoundNumbers] = useState([]);

  function generateHiddenNumbers() {
    return Array.from({ length: 5 }, () => Math.floor(Math.random() * 20) + 1);
  }

  const handleNumberClick = (number) => {
    if (hiddenNumbers.includes(number)) {
      setFoundNumbers([...foundNumbers, number]);
    }
  };

  return (
    <div className="bg-green-800 p-6 rounded-lg">
      <h2 className="text-2xl font-cinzel mb-4">Number Hunt</h2>
      <p className="mb-4">Find these numbers: {hiddenNumbers.join(', ')}</p>
      <div className="grid grid-cols-5 gap-2 mb-4">
        {Array.from({ length: 20 }, (_, i) => i + 1).map((number) => (
          <Button
            key={number}
            onClick={() => handleNumberClick(number)}
            className={`${
              foundNumbers.includes(number) ? 'bg-yellow-500' : 'bg-green-600'
            }`}
          >
            {number}
          </Button>
        ))}
      </div>
      <Button onClick={onClose} className="mt-4 bg-purple-600">Back to Challenges</Button>
    </div>
  );
};

export default NumberHunt;