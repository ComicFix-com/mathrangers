import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { MapIcon, SwordIcon, CrownIcon, BookOpenIcon } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-purple-700 text-white">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-4xl font-bold font-cinzel">MathRangers</h1>
        <Button variant="outline" className="bg-yellow-500 text-purple-900 hover:bg-yellow-400">
          Login
        </Button>
      </header>
      
      <main className="container mx-auto p-4">
        <h2 className="text-2xl font-cinzel mb-4">Power of Numbers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-purple-800 border-yellow-500">
            <CardHeader>
              <CardTitle className="font-cinzel">Your Kingdom</CardTitle>
            </CardHeader>
            <CardContent>
              <Avatar className="w-20 h-20 mx-auto mb-4">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>MR</AvatarFallback>
              </Avatar>
              <Progress value={33} className="mb-2" />
              <p className="text-center">Level 5</p>
            </CardContent>
          </Card>
          
          <Card className="bg-purple-800 border-yellow-500">
            <CardHeader>
              <CardTitle className="font-cinzel flex items-center">
                <MapIcon className="mr-2" /> Explore
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-green-600 hover:bg-green-500">Start Adventure</Button>
            </CardContent>
          </Card>
          
          <Card className="bg-purple-800 border-yellow-500">
            <CardHeader>
              <CardTitle className="font-cinzel flex items-center">
                <SwordIcon className="mr-2" /> Challenges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-red-600 hover:bg-red-500">Battle Villains</Button>
            </CardContent>
          </Card>
          
          <Card className="bg-purple-800 border-yellow-500">
            <CardHeader>
              <CardTitle className="font-cinzel flex items-center">
                <CrownIcon className="mr-2" /> Leaderboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-blue-600 hover:bg-blue-500">View Rankings</Button>
            </CardContent>
          </Card>
        </div>
        
        <Card className="mt-8 bg-purple-800 border-yellow-500">
          <CardHeader>
            <CardTitle className="font-cinzel flex items-center">
              <BookOpenIcon className="mr-2" /> Daily Challenge
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Solve this riddle to earn bonus points!</p>
            <Button className="w-full bg-yellow-500 text-purple-900 hover:bg-yellow-400">Start Challenge</Button>
          </CardContent>
        </Card>
        
        <div className="mt-8 text-center">
          <a href="upi://pay?pa=adnanmuhammad4393@okicici&pn=Adnan%20Muhammad&am=500.00&cu=INR&tn=Supporting ComicFix Community : Math Kingdom Conquest">
            <Button className="donate-btn bg-yellow-500 text-purple-900 hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300">
              Support ComicFix Community
            </Button>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Index;