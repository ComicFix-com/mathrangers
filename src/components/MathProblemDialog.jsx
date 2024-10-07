import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const MathProblemDialog = ({ open, onOpenChange, generateProblem, onCorrectAnswer }) => {
  const [currentProblem, setCurrentProblem] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [message, setMessage] = useState('');
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    if (open) {
      newProblem();
    }
  }, [open, generateProblem]);

  const newProblem = () => {
    setCurrentProblem(generateProblem());
    setUserAnswer('');
    setMessage('');
  };

  const handleSubmit = () => {
    if (parseInt(userAnswer) === currentProblem.answer) {
      setMessage('Correct! Great job!');
      setStreak(s => s + 1);
      onCorrectAnswer();
      setTimeout(newProblem, 1500);
    } else {
      setMessage('Not quite. Try again!');
      setStreak(0);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-purple-800 text-white">
        <DialogHeader>
          <DialogTitle className="font-cinzel text-2xl">Math Mission</DialogTitle>
          <DialogDescription className="text-gray-300">
            Solve as many problems as you can!
          </DialogDescription>
        </DialogHeader>
        {currentProblem && (
          <div className="py-4">
            <p className="text-xl font-bold mb-4">{currentProblem.problem} = ?</p>
            <Input
              type="number"
              placeholder="Enter your answer"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className="bg-purple-700 text-white"
            />
          </div>
        )}
        <DialogFooter>
          <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-500">
            Submit Answer
          </Button>
        </DialogFooter>
        {message && <p className="mt-4 text-center font-bold">{message}</p>}
        <p className="mt-2 text-center">Current Streak: {streak}</p>
      </DialogContent>
    </Dialog>
  );
};

export default MathProblemDialog;