import React, { useState, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapIcon, SwordIcon, MusicIcon, SearchIcon, BeanIcon, DicesIcon, BookOpenIcon, ActivityIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MissionCard from '@/components/MissionCard';
import ProfileCard from '@/components/ProfileCard';
import MathProblemDialog from '@/components/MathProblemDialog';
import DailyChallenge from '@/components/DailyChallenge';
import CountingSongs from '@/components/CountingSongs';
import NumberHunt from '@/components/NumberHunt';
import CountingBeans from '@/components/CountingBeans';
import MathGames from '@/components/MathGames';
import MathStories from '@/components/MathStories';
import MathPuzzles from '@/components/MathPuzzles';

const Index = () => {
  const [level, setLevel] = useState(1);
  const [experience, setExperience] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);

  const generateProblem = useCallback(() => {
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
  }, []);

  const startMission = () => {
    setDialogOpen(true);
  };

  const handleCorrectAnswer = () => {
    setExperience(prev => {
      const newExp = prev + 20;
      if (newExp >= 100) {
        setLevel(l => l + 1);
        return newExp - 100;
      }
      return newExp;
    });
  };

  const startDailyChallenge = () => {
    setDialogOpen(true);
  };

  const missionCards = [
    { icon: MapIcon, title: "Missions", buttonText: "Start New Mission", onClick: startMission, buttonColor: "bg-green-600 hover:bg-green-500" },
    { icon: SwordIcon, title: "Math Challenges", buttonText: "Take on a Challenge", onClick: startMission, buttonColor: "bg-red-600 hover:bg-red-500" },
  ];

  const challengeCards = [
    { icon: MusicIcon, title: "Counting Songs", buttonText: "Sing Along", onClick: () => setActiveFeature('countingSongs'), buttonColor: "bg-blue-600 hover:bg-blue-500" },
    { icon: SearchIcon, title: "Number Hunt", buttonText: "Start Hunt", onClick: () => setActiveFeature('numberHunt'), buttonColor: "bg-green-600 hover:bg-green-500" },
    { icon: BeanIcon, title: "Counting Beans", buttonText: "Play Now", onClick: () => setActiveFeature('countingBeans'), buttonColor: "bg-yellow-600 hover:bg-yellow-500" },
  ];

  const learningCards = [
    { icon: DicesIcon, title: "Math Games", buttonText: "Play Games", onClick: () => setActiveFeature('mathGames'), buttonColor: "bg-pink-600 hover:bg-pink-500" },
    { icon: BookOpenIcon, title: "Math Stories", buttonText: "Read Stories", onClick: () => setActiveFeature('mathStories'), buttonColor: "bg-indigo-600 hover:bg-indigo-500" },
    { icon: ActivityIcon, title: "Math Puzzles", buttonText: "Solve Puzzles", onClick: () => setActiveFeature('mathPuzzles'), buttonColor: "bg-orange-600 hover:bg-orange-500" },
  ];

  const renderActiveFeature = () => {
    switch (activeFeature) {
      case 'countingSongs':
        return <CountingSongs onClose={() => setActiveFeature(null)} />;
      case 'numberHunt':
        return <NumberHunt onClose={() => setActiveFeature(null)} />;
      case 'countingBeans':
        return <CountingBeans onClose={() => setActiveFeature(null)} />;
      case 'mathGames':
        return <MathGames onClose={() => setActiveFeature(null)} />;
      case 'mathStories':
        return <MathStories onClose={() => setActiveFeature(null)} />;
      case 'mathPuzzles':
        return <MathPuzzles onClose={() => setActiveFeature(null)} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-900 to-purple-700 text-white">
      <Header />
      
      <main className="container mx-auto p-4 flex-grow">
        <h2 className="text-xl md:text-2xl font-cinzel mb-4 text-center">Welcome, Tech Superhero!</h2>
        
        <ProfileCard level={level} experience={experience} />
        
        <DailyChallenge onStartChallenge={startDailyChallenge} />
        
        {activeFeature ? (
          renderActiveFeature()
        ) : (
          <Tabs defaultValue="missions" className="w-full mt-8">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3">
              <TabsTrigger value="missions">Missions</TabsTrigger>
              <TabsTrigger value="challenges">Challenges</TabsTrigger>
              <TabsTrigger value="learning">Learning</TabsTrigger>
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
          </Tabs>
        )}
        
        <div className="mt-8 text-center">
          <a href="upi://pay?pa=adnanmuhammad4393@okicici&pn=Adnan%20Muhammad&am=500.00&cu=INR&tn=Supporting ComicFix Community : Math Kingdom Conquest">
            <Button className="donate-btn bg-yellow-500 text-purple-900 hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300">
              Support ComicFix Community
            </Button>
          </a>
        </div>
      </main>

      <Footer />

      <MathProblemDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        generateProblem={generateProblem}
        onCorrectAnswer={handleCorrectAnswer}
      />
    </div>
  );
};

export default Index;
