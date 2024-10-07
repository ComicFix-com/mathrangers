import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { MapIcon, SwordIcon, CrownIcon, BookOpenIcon, UsersIcon } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [level, setLevel] = useState(1);
  const [experience, setExperience] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentProblem, setCurrentProblem] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [message, setMessage] = useState('');

  const generateProblem = () => {
    const operations = ['+', '-', '*'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    let problem, answer;

    switch (operation) {
      case '+':
        problem = `${num1} + ${num2}`;
        answer = num1 + num2;
        break;
      case '-':
        problem = `${num1 + num2} - ${num1}`;
        answer = num2;
        break;
      case '*':
        problem = `${num1} × ${num2}`;
        answer = num1 * num2;
        break;
    }

    return { problem, answer };
  };

  const startMission = () => {
    const { problem, answer } = generateProblem();
    setCurrentProblem({ problem, answer });
    setDialogOpen(true);
    setUserAnswer('');
    setMessage('');
  };

  const checkAnswer = () => {
    if (parseInt(userAnswer) === currentProblem.answer) {
      setMessage('Correct! You saved the kingdom!');
      setExperience(prev => {
        const newExp = prev + 20;
        if (newExp >= 100) {
          setLevel(l => l + 1);
          return newExp - 100;
        }
        return newExp;
      });
    } else {
      setMessage('Oops! Try again, brave ranger!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-purple-700 text-white">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-4xl font-bold font-cinzel">MathRangers: Problem Solvers</h1>
      </header>
      
      <main className="container mx-auto p-4">
        <h2 className="text-2xl font-cinzel mb-4">Welcome, Math Superhero!</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-purple-800 border-yellow-500">
            <CardHeader>
              <CardTitle className="font-cinzel">Your Ranger</CardTitle>
            </CardHeader>
            <CardContent>
              <Avatar className="w-20 h-20 mx-auto mb-4">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>MR</AvatarFallback>
              </Avatar>
              <Progress value={experience} className="mb-2" />
              <p className="text-center">Level {level} Ranger</p>
            </CardContent>
          </Card>
          
          <Card className="bg-purple-800 border-yellow-500">
            <CardHeader>
              <CardTitle className="font-cinzel flex items-center">
                <MapIcon className="mr-2" /> Missions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-green-600 hover:bg-green-500" onClick={startMission}>Start New Mission</Button>
            </CardContent>
          </Card>
          
          <Card className="bg-purple-800 border-yellow-500">
            <CardHeader>
              <CardTitle className="font-cinzel flex items-center">
                <SwordIcon className="mr-2" /> Math Challenges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-red-600 hover:bg-red-500" onClick={startMission}>Take on a Challenge</Button>
            </CardContent>
          </Card>
          
          <Card className="bg-purple-800 border-yellow-500">
            <CardHeader>
              <CardTitle className="font-cinzel flex items-center">
                <CrownIcon className="mr-2" /> Ranger Rankings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-blue-600 hover:bg-blue-500">View Top Problem Solvers</Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <Card className="bg-purple-800 border-yellow-500">
            <CardHeader>
              <CardTitle className="font-cinzel flex items-center">
                <BookOpenIcon className="mr-2" /> Daily Puzzle
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Solve today's math puzzle to power up your ranger!</p>
              <Button className="w-full bg-yellow-500 text-purple-900 hover:bg-yellow-400" onClick={startMission}>Accept Puzzle</Button>
            </CardContent>
          </Card>

          <Card className="bg-purple-800 border-yellow-500">
            <CardHeader>
              <CardTitle className="font-cinzel flex items-center">
                <UsersIcon className="mr-2" /> Ranger Squad
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Form a squad of math superheroes!</p>
              <Button className="w-full bg-pink-500 hover:bg-pink-400">Manage Squad</Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-8 text-center">
          <a href="upi://pay?pa=adnanmuhammad4393@okicici&pn=Adnan%20Muhammad&am=500.00&cu=INR&tn=Supporting ComicFix Community : Math Kingdom Conquest">
            <Button className="donate-btn bg-yellow-500 text-purple-900 hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300">
              Support ComicFix Community
            </Button>
          </a>
        </div>
      </main>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="bg-purple-800 text-white">
          <DialogHeader>
            <DialogTitle className="font-cinzel text-2xl">Math Mission</DialogTitle>
            <DialogDescription className="text-gray-300">
              Solve this problem to save the kingdom!
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
            <Button onClick={checkAnswer} className="bg-green-600 hover:bg-green-500">
              Submit Answer
            </Button>
          </DialogFooter>
          {message && <p className="mt-4 text-center font-bold">{message}</p>}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;