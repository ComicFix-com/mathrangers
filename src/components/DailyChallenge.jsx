import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StarIcon } from 'lucide-react';

const DailyChallenge = ({ onStartChallenge }) => (
  <Card className="bg-gradient-to-r from-yellow-400 to-yellow-600 border-purple-500">
    <CardHeader>
      <CardTitle className="font-cinzel flex items-center text-purple-900">
        <StarIcon className="mr-2" /> Daily Challenge
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-purple-900 mb-4">Complete today's challenge for bonus XP and rewards!</p>
      <Button className="w-full bg-purple-700 hover:bg-purple-600 text-white" onClick={onStartChallenge}>
        Start Daily Challenge
      </Button>
    </CardContent>
  </Card>
);

export default DailyChallenge;