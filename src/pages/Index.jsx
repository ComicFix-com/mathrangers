import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapIcon, SwordIcon, MusicIcon, SearchIcon, BeanIcon, DicesIcon, BookOpenIcon, ActivityIcon } from 'lucide-react';
import Header from '@/components/Header';
import MissionCard from '@/components/MissionCard';
import ProfileCard from '@/components/ProfileCard';
import MathProblemDialog from '@/components/MathProblemDialog';
import DailyChallenge from '@/components/DailyChallenge';

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

  const startDailyChallenge = () => {
    const { problem, answer } = generateProblem();
    setCurrentProblem({ problem: `Daily Challenge: ${problem}`, answer });
    setDialogOpen(true);
    setUserAnswer('');
    setMessage('');
  };

  const missionCards = [
    { icon: MapIcon, title: "Missions", buttonText: "Start New Mission", onClick: startMission, buttonColor: "bg-green-600 hover:bg-green-500" },
    { icon: SwordIcon, title: "Math Challenges", buttonText: "Take on a Challenge", onClick: startMission, buttonColor: "bg-red-600 hover:bg-red-500" },
  ];

  const challengeCards = [
    { icon: MusicIcon, title: "Counting Songs", buttonText: "Sing Along", buttonColor: "bg-blue-600 hover:bg-blue-500" },
    { icon: SearchIcon, title: "Number Hunt", buttonText: "Start Hunt", buttonColor: "bg-green-600 hover:bg-green-500" },
    { icon: BeanIcon, title: "Counting Beans", buttonText: "Play Now", buttonColor: "bg-yellow-600 hover:bg-yellow-500" },
  ];

  const learningCards = [
    { icon: DicesIcon, title: "Math Games", buttonText: "Play Games", buttonColor: "bg-pink-600 hover:bg-pink-500" },
    { icon: BookOpenIcon, title: "Math Stories", buttonText: "Read Stories", buttonColor: "bg-indigo-600 hover:bg-indigo-500" },
    { icon: ActivityIcon, title: "Math Puzzles", buttonText: "Solve Puzzles", buttonColor: "bg-orange-600 hover:bg-orange-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-purple-700 text-white">
      <Header />
      
      <main className="container mx-auto p-4">
        <h2 className="text-xl md:text-2xl font-cinzel mb-4 text-center">Welcome, Math Superhero!</h2>
        
        <DailyChallenge onStartChallenge={startDailyChallenge} />
        
        <Tabs defaultValue="missions" className="w-full mt-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="missions">Missions</TabsTrigger>
            <TabsTrigger value="challenges">Challenges</TabsTrigger>
            <TabsTrigger value="learning">Learning</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>
          <TabsContent value="missions">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {missionCards.map((card, index) => (
                <MissionCard key={index} {...card} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="challenges">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {challengeCards.map((card, index) => (
                <MissionCard key={index} {...card} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="learning">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {learningCards.map((card, index) => (
                <MissionCard key={index} {...card} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="profile">
            <ProfileCard level={level} experience={experience} />
          </TabsContent>
        </Tabs>
        
        <div className="mt-8 text-center">
          <a href="upi://pay?pa=adnanmuhammad4393@okicici&pn=Adnan%20Muhammad&am=500.00&cu=INR&tn=Supporting ComicFix Community : Math Kingdom Conquest">
            <Button className="donate-btn bg-yellow-500 text-purple-900 hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300">
              Support ComicFix Community
            </Button>
          </a>
        </div>
      </main>

      <MathProblemDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        problem={currentProblem}
        userAnswer={userAnswer}
        setUserAnswer={setUserAnswer}
        onSubmit={checkAnswer}
        message={message}
      />
    </div>
  );
};

export default Index;
