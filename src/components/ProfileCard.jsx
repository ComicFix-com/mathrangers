import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import AnimatedNumber from './AnimatedNumber';

const ProfileCard = ({ level, experience }) => (
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
      <p className="text-center">Level <AnimatedNumber value={level} /> Ranger</p>
      <p className="text-center">XP: <AnimatedNumber value={experience} /> / 100</p>
    </CardContent>
  </Card>
);

export default ProfileCard;