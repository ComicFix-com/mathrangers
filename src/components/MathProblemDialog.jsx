import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const MathProblemDialog = ({ open, onOpenChange, problem, userAnswer, setUserAnswer, onSubmit, message }) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="bg-purple-800 text-white">
      <DialogHeader>
        <DialogTitle className="font-cinzel text-2xl">Math Mission</DialogTitle>
        <DialogDescription className="text-gray-300">
          Solve this problem to save the kingdom!
        </DialogDescription>
      </DialogHeader>
      {problem && (
        <div className="py-4">
          <p className="text-xl font-bold mb-4">{problem.problem} = ?</p>
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
        <Button onClick={onSubmit} className="bg-green-600 hover:bg-green-500">
          Submit Answer
        </Button>
      </DialogFooter>
      {message && <p className="mt-4 text-center font-bold">{message}</p>}
    </DialogContent>
  </Dialog>
);

export default MathProblemDialog;